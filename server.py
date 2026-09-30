import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.isfile(path):
            return super().do_GET()

        range_header = self.headers.get('Range')
        if not range_header or not range_header.startswith('bytes='):
            return super().do_GET()

        file_size = os.path.getsize(path)
        try:
            range_val = range_header.split('=')[1]
            if '-' in range_val:
                start_str, end_str = range_val.split('-', 1)
                start = int(start_str) if start_str else 0
                end = int(end_str) if end_str else file_size - 1
            else:
                start = int(range_val)
                end = file_size - 1
        except Exception:
            return super().do_GET()

        if start >= file_size:
            self.send_error(416, "Requested Range Not Satisfiable")
            return

        end = min(end, file_size - 1)
        length = end - start + 1

        ctype = self.guess_type(path)
        if path.endswith('.webm'):
            ctype = 'audio/webm'

        self.send_response(206)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(length))
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

        with open(path, 'rb') as f:
            f.seek(start)
            chunk_size = 64 * 1024
            remaining = length
            while remaining > 0:
                chunk = f.read(min(chunk_size, remaining))
                if not chunk:
                    break
                self.wfile.write(chunk)
                remaining -= len(chunk)

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
    print(f"Starting server with Range support on http://localhost:{port}")
    server = HTTPServer(('0.0.0.0', port), RangeRequestHandler)
    server.serve_forever()
