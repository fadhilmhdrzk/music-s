/* ==========================================================================
   DANIEL CAESAR INTERACTIVE WEBSITE LOGIC
   ========================================================================== */

// Track Data Lists for All 4 Favorite Artists
const danielCaesarTracks = [
  {
    id: 0,
    title: "Won't Live Here",
    album: "Single (2016)",
    cover: "assets/images/Won't Live Here.jfif",
    theme: "wont-live-here",
    quote: '"Accepting the quiet passage of time and letting go of a place or memory that no longer feels like home."',
    meaning: `Taken from the album NEVER ENOUGH, "Won't Live Here" captures the quiet realization that it is time to move on. Daniel reflects on the subtle shift when a place, person, or memory ceases to offer comfort. It delves into the delicate space between holding on to nostalgia and finding the strength to step away into something new.`,
    src: "assets/audio/track1_wont_live_here.webm",
    duration: "3:42"
  },
  {
    id: 1,
    title: "Baby Blues",
    album: "Son Of Spergy (2025)",
    cover: "assets/images/Baby Blues.jfif",
    theme: "baby-blues",
    quote: '"A tender reflection on melancholia, love, and the fragile moments that linger long after the sun goes down."',
    meaning: 'Featured in the conceptual album Son Of Spergy, "Baby Blues" portrays a deep sense of late-night melancholia. Daniel explores the lingering vulnerability of past connections and quiet moments of contemplation. The term "Baby Blues" symbolizes a warm, bittersweet emotional state—where longing and the gentle fear of losing pure affection intertwine.',
    src: "assets/audio/track2_baby_blues.webm",
    duration: "1:44"
  },
  {
    id: 2,
    title: "Please Do Not Lean",
    album: "NEVER ENOUGH (2023)",
    cover: "assets/images/Please Do Not Lean.jfif",
    theme: "please-do-not-lean",
    quote: '"Trying to be the man my woman needs me to be, while wrestling with my own instability and fearing I might break under the weight."',
    meaning: 'Released as a key single leading to NEVER ENOUGH, "Please Do Not Lean" is an honest confession of personal fragility. Daniel addresses the pressure of wanting to be a solid pillar for someone else while knowing he is emotionally unstable himself. It serves as a gentle yet firm warning about the boundaries of relying too heavily on a partner who is still healing.',
    src: "assets/audio/track3_please_do_not_lean.webm",
    duration: "4:01"
  },
  {
    id: 3,
    title: "TOO DEEP TO TURN BACK",
    album: "CASE STUDY 01 (2019)",
    cover: "assets/images/TO DEEP TO TURN BACK.jfif",
    theme: "too-deep",
    quote: '"Floating through spiritual doubt and self-discovery, realizing I’ve crossed a line where there’s no option left but to move forward."',
    meaning: `From CASE STUDY 01, "TOO DEEP TO TURN BACK" delves into themes of existentialism, faith, and irreversible personal evolution. The track reflects the point of no return in a person's journey—where one must embrace the unknown and continue progressing despite doubts, accompanied by lush gospel-inspired harmonies.`,
    src: "assets/audio/track4_too_deep_to_turn_back.webm",
    duration: "5:18"
  }
];

const frankOceanTracks = [
  {
    id: 0,
    title: "Ivy",
    album: "Blonde (2016)",
    cover: "assets/images/Ivy.jfif",
    theme: "fo-ivy",
    quote: '"Even when time fades the memories of youth, your touch remains carved in my heart forever."',
    meaning: `Featured in Blonde, "Ivy" is Frank Ocean's raw, nostalgic reflection on youthful, impulsive first love. Over stripped-back electric guitar strums, Frank navigates the bittersweet realization that innocence passes, leaving behind memories of a love that transformed his life forever.`,
    src: "assets/audio/fo_ivy.webm",
    duration: "4:09"
  },
  {
    id: 1,
    title: "Moon River",
    album: "Single (2018)",
    cover: "assets/images/Moon River.jfif",
    theme: "fo-moon-river",
    quote: '"Wandering through the endless night, chasing the quiet horizon with you as my compass."',
    meaning: `Frank Ocean's iconic cover of Henry Mancini's classic ballad. Layered with rich, ambient vocal harmonies and minimal instrumentation, "Moon River" explores spiritual wanderlust, quiet romance, and crossing life's unpredictable currents with a kindred soul.`,
    src: "assets/audio/fo_moon_river.webm",
    duration: "3:07"
  },
  {
    id: 2,
    title: "White Ferrari",
    album: "Blonde (2016)",
    cover: "assets/images/White Ferrari.jfif",
    theme: "fo-white-ferrari",
    quote: '"Riding through silent highways under the stars, wrapped in a love that transcends time and space."',
    meaning: `A meditative masterpiece blending acoustic guitar, ambient synths, and pitch-shifted harmonies. "White Ferrari" evokes late-night car rides, quiet intimacy, and unconditional love that transcends time and space.`,
    src: "assets/audio/fo_white_ferrari.webm",
    duration: "4:08"
  },
  {
    id: 3,
    title: "Pink Matter",
    album: "channel ORANGE (2012)",
    cover: "assets/images/Pink Matter.jfif",
    theme: "fo-pink-matter",
    quote: '"Searching for answers among the stars, lost in the delicate universe of your soul."',
    meaning: `From channel ORANGE, "Pink Matter" featuring André 3000 is a philosophical neo-soul odyssey. Frank contemplates existentialism, the mind-body connection, and whether romantic desire offers true enlightenment in an enigmatic universe.`,
    src: "assets/audio/fo_pink_matter.webm",
    duration: "5:10"
  }
];

const waveToEarthTracks = [
  {
    id: 0,
    title: "Love",
    album: "0.1 flaws and all. (2023)",
    cover: "assets/images/love.jfif",
    theme: "wte-love",
    quote: '"Love, my love, you are my everything... floating in the calm sea with you."',
    meaning: `Wave To Earth's signature lo-fi indie jazz track. "Love" envelops the listener in warm, gentle basslines and smooth saxophone accents, capturing the comforting peace of finding solace in a loved one's presence.`,
    src: "assets/audio/wte_love.webm",
    duration: "4:15"
  },
  {
    id: 1,
    title: "Seasons",
    album: "wave 0.01 (2020)",
    cover: "assets/images/seasons.jfif",
    theme: "wte-seasons",
    quote: '"I can\'t let you go, even if the seasons change and the leaves fall away."',
    meaning: `An emotional indie pop ballad reflecting on time, distance, and eternal devotion. Atmospheric guitar reverberations paint a landscape of changing autumn leaves and unwavering affection.`,
    src: "assets/audio/wte_seasons.webm",
    duration: "4:16"
  },
  {
    id: 2,
    title: "Calla",
    album: "0.1 flaws and all. (2023)",
    cover: "assets/images/Calla.jfif",
    theme: "wte-calla",
    quote: '"My love is like a calla lily, blooming quietly for you even in the quietest night."',
    meaning: `In "Calla", Wave To Earth uses the symbolism of the calla lily flower to express pure, untamed affection and quiet devotion. Over lush acoustic guitar strums and dreamy jazz-inflected vocals, the track captures the delicate vulnerability of opening one's heart to someone who feels like home.`,
    src: "assets/audio/wte_calla.webm",
    duration: "3:30"
  },
  {
    id: 3,
    title: "Light",
    album: "wave 0.01 (2020)",
    cover: "assets/images/Light.jfif",
    theme: "wte-light",
    quote: '"Be my light when the night gets dark and cold, hold my hand until sunrise."',
    meaning: `A cozy, reassuring track about being a guiding beacon for someone through lonely nights. Soft acoustic tones and intimate whispering vocals create a soothing sanctuary.`,
    src: "assets/audio/wte_light.webm",
    duration: "3:48"
  }
];

const lanyTracks = [
  {
    id: 0,
    title: "Soft",
    album: "a beautiful blur (2023)",
    cover: "assets/images/Soft.jfif",
    theme: "lany-soft",
    quote: '"You make me so soft, taking down all the walls I built around my heart."',
    meaning: `Featured in "a beautiful blur", "Soft" explores emotional vulnerability. Paul Klein sings about how genuine love disarms cynicism, allowing someone to drop their defense mechanisms and love without fear.`,
    src: "assets/audio/lany_soft.webm",
    duration: "3:12"
  },
  {
    id: 1,
    title: "You!",
    album: "mama's boy (2020)",
    cover: "assets/images/you!.jfif",
    theme: "lany-you",
    quote: '"Like water in the desert, impossible to find... I\'m nothing without you."',
    meaning: `A soaring, stadium-sized anthem celebrating true love. Driven by energetic drums and shimmering guitars, "You!" is an uplifting declaration that life finds its purpose when shared with the right person.`,
    src: "assets/audio/lany_you.webm",
    duration: "4:34"
  },
  {
    id: 2,
    title: "'Cause you have to",
    album: "a beautiful blur (2023)",
    cover: "assets/images/'Cause you have to.jfif",
    theme: "lany-cause",
    quote: '"Do you still love me, or are you staying just \'cause you have to?"',
    meaning: `A poignant piano ballad capturing the painful realization that a relationship is fading. LANY vulnerability asks whether love has faded into empty obligation, pleading for honest truth.`,
    src: "assets/audio/lany_cause.webm",
    duration: "4:18"
  },
  {
    id: 3,
    title: "Malibu Nights",
    album: "Malibu Nights (2018)",
    cover: "assets/images/Malibu Nigths.jfif",
    theme: "lany-malibu",
    quote: '"Way too much time with my thoughts... drive through the canyon to Malibu."',
    meaning: `The iconic title track of LANY's breakthrough heartbreak record. Raw piano chords and atmospheric production paint late-night drives along the California coast while processing grief, memory, and healing.`,
    src: "assets/audio/lany_malibu_nights.webm",
    duration: "4:46"
  }
];

const dewa19Tracks = [
  {
    id: 0,
    title: "Aku Milikmu",
    album: "Format Masa Depan (1994)",
    cover: "assets/images/Aku milikmu.jfif",
    theme: "dewa-aku-milikmu",
    quote: '"Surrendering completely to the warmth of your embrace, letting the rest of the world fade away."',
    meaning: `Featured in Format Masa Depan, "Aku Milikmu" is a timeless romantic ballad expressing complete surrender to love and devotion. Wrapped in iconic electric guitar riffs and soaring vocal harmonies, the track explores the overwhelming passion of a night spent together. It symbolizes the desire to freeze time, holding on tightly to the warmth of intimacy before morning arrives.`,
    src: "assets/audio/dewa19_aku_milikmu.webm",
    duration: "4:32"
  },
  {
    id: 1,
    title: "Kangen",
    album: "Dewa 19 (1992)",
    cover: "assets/images/kangen.jfif",
    theme: "dewa-kangen",
    quote: '"Counting every heartbeat across the distance, holding onto fragile hopes of our reunion."',
    meaning: `The breakthrough masterpiece from Dewa 19's debut album that defined an entire generation. "Kangen" captures the aching vulnerability of distance, nostalgic yearning, and heartfelt romance. Through nostalgic melodies and poetic lyrics, it paints a vivid picture of a soul consumed by longings, waiting patiently for the moment two paths finally cross again.`,
    src: "assets/audio/dewa19_kangen.webm",
    duration: "5:08"
  },
  {
    id: 2,
    title: "Risalah Hati",
    album: "Bintang Lima (2000)",
    cover: "assets/images/Risalah hati.jfif",
    theme: "dewa-roman-picisan",
    quote: '"An unyielding devotion that dares to bend fate, making even the coldest heart learn how to love."',
    meaning: `From the legendary Bintang Lima album, "Risalah Hati" is a dramatic rock composition exploring poetic infatuation and stubborn affection. Ahmad Dhani weaves a tale of unyielding determination, where devotion becomes an unstoppable force capable of changing fate. The grandeur of its arrangement reflects the intense emotional weight of convincing a distant heart to love back.`,
    src: "assets/audio/dewa19_risalah_hati.webm",
    duration: "4:07"
  },
  {
    id: 3,
    title: "Mistikus Cinta",
    album: "Cintailah Cinta (2002)",
    cover: "assets/images/Mistikus Cinta.jfif",
    theme: "dewa-mistikus-cinta",
    quote: '"A mystical bond beyond space and time, entering without a sound to alter our universe forever."',
    meaning: `A mystical, philosophical reflection from Cintailah Cinta on the transcendent nature of spiritual and romantic love. "Mistikus Cinta" blends hypnotic rhythms with deep lyrical inquiry, portraying passion not merely as a human emotion, but as an uncontrollable cosmic force. It explores how true affection transcends physical boundaries, entering our lives unannounced and altering our perception of reality.`,
    src: "assets/audio/dewa19_mistikus_cinta.webm",
    duration: "5:35"
  }
];

const hindiaTracks = [
  {
    id: 0,
    title: "Membasuh",
    album: "Menari dengan Bayangan (2019)",
    cover: "assets/images/Membasuh.jfif",
    theme: "hindia-membasuh",
    quote: '"A gentle sanctuary where we wash away each other’s wounds in an unforgiving world."',
    meaning: `Featuring Rara Sekar, "Membasuh" is a comforting hymn about healing, mutual support, and finding solace amidst life's chaotic moments. Hindia explores the spirit of selflessness—learning to give without expecting anything in return. The song serves as a gentle reminder that even when the world feels heavy and unforgiving, sharing our wounds can wash away the bitterness of life.`,
    src: "assets/audio/hindia_membasuh.webm",
    duration: "6:10"
  },
  {
    id: 1,
    title: "Kita ke sana",
    album: "Lagipula Hidup Akan Berakhir (2023)",
    cover: "assets/images/Kita kesana.jfif",
    theme: "hindia-kita-ke-sana",
    quote: '"Stepping boldly into the unknown together, chasing answers beyond the horizon of our fears."',
    meaning: `An energetic, cathartic track celebrating youth, friendship, and stepping boldly into the unknown together. From Lagipula Hidup Akan Berakhir, "Kita ke sana" reflects on pushing past anxieties and societal expectations. It captures the raw freedom of embarking on a journey with trusted companions, embracing whatever lies ahead with open arms and shared courage.`,
    src: "assets/audio/hindia_kita_ke_sana.webm",
    duration: "3:45"
  },
  {
    id: 2,
    title: "Semua lagu cinta terdengar sama",
    album: "Lagipula Hidup Akan Berakhir (2023)",
    cover: "assets/images/Semua lagu cinta terdengar sama.jfif",
    theme: "hindia-semua-lagu",
    quote: '"When you are no longer here, every sweet melody loses its magic and fades into empty noise."',
    meaning: `A sharp, reflective urban track on heartbreak, nostalgia, and the way music ties itself to personal memories. Hindia dissects the hollow feeling after a significant separation, where romantic clichés suddenly lose their magic. The track illustrates how ordinary melodies become painful reminders of someone who was once the entire center of your world.`,
    src: "assets/audio/hindia_semua_lagu.webm",
    duration: "4:02"
  },
  {
    id: 3,
    title: "Rumah ke rumah",
    album: "Menari dengan Bayangan (2019)",
    cover: "assets/images/Rumah ke rumah.jfif",
    theme: "hindia-rumah-ke-rumah",
    quote: '"Wandering from one heart to another, collecting fragile lessons on the search for home."',
    meaning: `One of Hindia's most personal tracks, tracing personal growth through past relationships and learning to forgive oneself. "Rumah ke rumah" uses the metaphor of a house to represent the people who offer shelter to a broken heart. It portrays a bittersweet journey of moving from person to person, gathering lessons, and eventually searching for a permanent place to belong.`,
    src: "assets/audio/hindia_rumah_ke_rumah.webm",
    duration: "4:37"
  }
];

const salPriadiTracks = [
  {
    id: 0,
    title: "Kita usahakan rumah itu",
    album: "MARKERS AND SUCH (2024)",
    cover: "assets/images/Kita usahakan rumah itu.jfif",
    theme: "sal-kita-usahakan",
    quote: '"Nurturing a warm sanctuary made of shared dreams, soft whispers, and endless laughter."',
    meaning: `From MARKERS AND SUCH, "Kita usahakan rumah itu" is a heartwarming anthem about building a future, sharing modest dreams, and nurturing love through simple daily acts. Sal Priadi frames romance not as a grand fairy tale, but as a grounded, continuous effort to build a safe haven where two souls can find comfort, laughter, and peace together.`,
    src: "assets/audio/sal_kita_usahakan_rumah_itu.webm",
    duration: "3:18"
  },
  {
    id: 1,
    title: "I'd like to watch you sleeping",
    album: "MARKERS AND SUCH (2024)",
    cover: "assets/images/I'd like to watch you sleeping.jfif",
    theme: "sal-id-like-to-watch",
    quote: '"Finding absolute tranquility in the quiet rhythm of your breath as the dark world rests."',
    meaning: `A tender, intimate lullaby capturing the serene beauty of watching a loved one rest peacefully. Sal conveys a deep sense of devotion in the quietest hours of the night. The track reflects an overwhelming desire to protect someone's peace, finding immense joy in simply witnessing their quietest, most vulnerable moments.`,
    src: "assets/audio/sal_id_like_to_watch_you_sleeping.webm",
    duration: "3:40"
  },
  {
    id: 2,
    title: "Amin paling serius",
    album: "Single (2019)",
    cover: "assets/images/Amin paling serius.jfif",
    theme: "sal-amin-paling-serius",
    quote: '"Whispering our most solemn prayers to the universe, hoping love will shelter us through every storm."',
    meaning: `A deeply romantic duet with Nadin Amizah, expressing earnest prayers and devotion for a shared future. "Amin paling serius" explores two flawed individuals coming together, laying down their anxieties, and offering their most sincere hopes to the divine. It portrays love as a sacred covenant built on faith, patience, and mutual understanding.`,
    src: "assets/audio/sal_amin_paling_serius.webm",
    duration: "5:20"
  },
  {
    id: 3,
    title: "Ada titik - titik diujung doa",
    album: "MARKERS AND SUCH (2024)",
    cover: "assets/images/Ada titik - titik di ujung doa.jfif",
    theme: "sal-ada-titik",
    quote: '"Leaving silent pauses at the end of every prayer, where your name is softly kept without a word."',
    meaning: `A poetic ballad exploring unspoken desires, quiet faith, and hope held in the silent corners of prayer. Sal Priadi captures the emotional weight of loving someone so deeply that words become insufficient. The track symbolizes the quiet moments where feelings are too vast to speak aloud, leaving them as quiet whispers sent to the universe.`,
    src: "assets/audio/sal_ada_titik.webm",
    duration: "3:55"
  }
];

const perungguTracks = [
  {
    id: 0,
    title: "33x",
    album: "Memorandum (2022)",
    cover: "assets/images/33x.jfif",
    theme: "perunggu-33x",
    quote: '"Repeating small silent prayers through the relentless noise, finding grounding in the daily grind."',
    meaning: `An anthemic rock track blending mid-life reflections, resilience, and finding peace amidst daily routines. "33x" speaks to the working-class spirit, balancing adult responsibilities with personal faith. It symbolizes repetition as a form of grounding—offering small, quiet prayers in the middle of life's relentless pace to keep moving forward with hope.`,
    src: "assets/audio/perunggu_33x.webm",
    duration: "4:12"
  },
  {
    id: 1,
    title: "Ini abadi",
    album: "Memorandum (2022)",
    cover: "assets/images/Ini abadi.jfif",
    theme: "perunggu-ini-abadi",
    quote: '"A timeless bond of brotherhood that outlasts worn-out shoes and tiring miles of life."',
    meaning: `From Memorandum, an uplifting anthem celebrating enduring friendships and unforgettable memories. "Ini abadi" captures the emotional durability of shared brotherhood and youth. It honors the bonds that remain unbreakable despite growing older, busy lives, and tired feet, preserving precious moments as timeless treasures that never fade.`,
    src: "assets/audio/perunggu_ini_abadi.webm",
    duration: "4:48"
  },
  {
    id: 2,
    title: "Gemilang",
    album: "Memorandum (2022)",
    cover: "assets/images/Gemilang.jfif",
    theme: "perunggu-gemilang",
    quote: '"Honoring our small victories today, stepping proudly into the uncertainties of tomorrow."',
    meaning: `A high-energy heartland rock track celebrating small victories and perseverance through life's trials. "Gemilang" serves as a triumphant tribute to anyone striving to survive the daily grind. It encourages listeners to honor their efforts, celebrate brief moments of pride, and step into an uncertain tomorrow with confidence and an unyielding spirit.`,
    src: "assets/audio/perunggu_gemilang.webm",
    duration: "4:05"
  },
  {
    id: 3,
    title: "Pastikan riuh akhiri malammu",
    album: "Memorandum (2022)",
    cover: "assets/images/Pastikan riuh akhiri malammu.jfif",
    theme: "perunggu-pastikan-riuh",
    quote: '"Letting joyful cheers and warm laughter swallow the exhaustion of a long, hard day."',
    meaning: `A triumphant closing ballad urging listeners to embrace warmth, joy, and gratitude at the end of hard days. "Pastikan riuh akhiri malammu" reflects on the catharsis of coming together after facing life's struggles. It serves as a heartwarming reminder to leave worries behind, finishing long days with laughter, togetherness, and a grateful heart.`,
    src: "assets/audio/perunggu_pastikan_riuh.webm",
    duration: "4:25"
  }
];

function fixPath(path) {
  if (!path) return "";
  const isSubFolder = window.location.pathname.includes('/pages/') || window.location.href.includes('/pages/');
  if (isSubFolder && !path.startsWith('../') && !path.startsWith('http')) {
    return '../' + path;
  }
  return path;
}

function getTracks() {
  const currentArtist = document.body.getAttribute("data-artist");
  if (currentArtist === "frank-ocean") return frankOceanTracks;
  if (currentArtist === "wave-to-earth") return waveToEarthTracks;
  if (currentArtist === "lany") return lanyTracks;
  if (currentArtist === "dewa-19") return dewa19Tracks;
  if (currentArtist === "hindia") return hindiaTracks;
  if (currentArtist === "sal-priadi") return salPriadiTracks;
  if (currentArtist === "perunggu") return perungguTracks;
  return danielCaesarTracks;
}

// State Management
let currentTrackIdx = 0;
let isPlaying = false;
let lastVolume = 0.8;
let selectedModalTrackIdx = 0;

// DOM Elements
const audioElement = document.getElementById("audio-element");
const turntableDeck = document.getElementById("turntable-deck");
const vinylDisc = document.getElementById("vinyl-disc");
const vinylLabel = document.getElementById("vinyl-label");
const trackAlbum = document.getElementById("track-album");
const trackTitle = document.getElementById("track-title");
const playBtn = document.getElementById("btn-play");
const playIcon = document.getElementById("play-icon");
const prevBtn = document.getElementById("btn-prev");
const nextBtn = document.getElementById("btn-next");
const currTimeEl = document.getElementById("curr-time");
const totalTimeEl = document.getElementById("total-time");
const progressBg = document.getElementById("progress-bg");
const progressFill = document.getElementById("progress-fill");
const volSlider = document.getElementById("vol-slider");
const volIcon = document.getElementById("vol-icon");
const playlistPills = document.getElementById("playlist-pills");
const quoteText = document.getElementById("quote-text");
const sleevesGrid = document.getElementById("sleeves-grid");
const visualizerWrap = document.querySelector(".visualizer-bar-wrap");
const vBars = document.querySelectorAll(".v-bar");

// Modal DOM Elements
const meaningModal = document.getElementById("meaning-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalCoverImg = document.getElementById("modal-cover-img");
const modalAlbumName = document.getElementById("modal-album-name");
const modalTrackTitle = document.getElementById("modal-track-title");
const modalQuote = document.getElementById("modal-quote");
const modalMeaningText = document.getElementById("modal-meaning-text");
const btnPlayModal = document.getElementById("btn-play-modal");

// Web Audio API Real Frequency Analyzer
let audioCtx = null;
let analyser = null;
let dataArray = null;
let sourceNode = null;
let visualizerAnimFrame = null;

function initAudioContext() {
  if (!audioCtx) {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 64;
        sourceNode = audioCtx.createMediaElementSource(audioElement);
        sourceNode.connect(analyser);
        analyser.connect(audioCtx.destination);
        dataArray = new Uint8Array(analyser.frequencyBinCount);
      }
    } catch (e) {
      console.log("AudioContext note:", e);
    }
  }
}

function startVisualizer() {
  if (visualizerWrap) visualizerWrap.classList.add("playing");
  initAudioContext();
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  function draw() {
    if (!isPlaying) return;
    if (analyser && dataArray) {
      analyser.getByteFrequencyData(dataArray);
      const indices = [2, 5, 8, 12, 16];
      vBars.forEach((bar, i) => {
        const val = dataArray[indices[i]] || 0;
        const height = 6 + (val / 255) * 22;
        bar.style.height = `${height}px`;
      });
    }
    visualizerAnimFrame = requestAnimationFrame(draw);
  }

  cancelAnimationFrame(visualizerAnimFrame);
  draw();
}

function stopVisualizer() {
  cancelAnimationFrame(visualizerAnimFrame);
  if (visualizerWrap) visualizerWrap.classList.remove("playing");
  vBars.forEach(bar => {
    bar.style.height = "";
  });
}

/* ==========================================================================
   VINYL MUSIC PLAYER LOGIC
   ========================================================================== */

function initPlayer() {
  if (!playlistPills) return;
  const currentTracks = getTracks();
  // Build playlist pills
  playlistPills.innerHTML = "";
  currentTracks.forEach((track, idx) => {
    const pill = document.createElement("button");
    pill.className = `pill-item ${idx === currentTrackIdx ? 'active' : ''}`;
    pill.innerText = track.title;
    pill.addEventListener("click", () => loadTrack(idx, true));
    playlistPills.appendChild(pill);
  });

  renderSleevesGallery();
  setupProgressScrubbing();
  loadTrack(currentTrackIdx, false);
}

const audioBlobCache = {};

async function loadAudioSourceSafely(srcPath, autoPlay = false) {
  if (!audioElement) return;

  const applySrc = (url) => {
    if (audioElement.src !== url) {
      audioElement.src = url;
      audioElement.load();
    }
    if (autoPlay) {
      playAudio();
    }
  };

  if (audioBlobCache[srcPath]) {
    applySrc(audioBlobCache[srcPath]);
    return;
  }

  // Set direct path first for instant playback start
  const resolvedUrl = new URL(srcPath, window.location.href).href;
  applySrc(resolvedUrl);

  // Background Blob conversion so Chrome/Edge can seek any WebM file without server Range header dependence
  try {
    const res = await fetch(srcPath);
    if (res.ok) {
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      audioBlobCache[srcPath] = blobUrl;

      const currentTracks = getTracks();
      const activeTrack = currentTracks[currentTrackIdx];
      if (activeTrack && fixPath(activeTrack.src) === srcPath) {
        const savedTime = audioElement.currentTime || 0;
        const wasPlaying = isPlaying;
        audioElement.src = blobUrl;
        if (savedTime > 0) {
          try { audioElement.currentTime = savedTime; } catch (e) {}
        }
        if (wasPlaying) {
          audioElement.play().catch(() => {});
        }
      }
    }
  } catch (err) {
    console.log("Blob fetch note:", err);
  }
}

function loadTrack(index, autoPlay = false) {
  currentTrackIdx = index;
  const currentTracks = getTracks();
  const track = currentTracks[currentTrackIdx];

  // Dynamically change website theme color to match cover art!
  document.documentElement.setAttribute("data-theme", track.theme);
  if (document.body) document.body.setAttribute("data-theme", track.theme);

  // Update UI Text & Cover
  if (trackAlbum) trackAlbum.innerText = `Album: ${track.album}`;
  if (trackTitle) trackTitle.innerText = track.title;
  if (vinylLabel) vinylLabel.style.backgroundImage = `url("${encodeURI(fixPath(track.cover))}")`;
  if (quoteText) quoteText.innerText = track.quote;

  // Update Pill selection
  if (playlistPills) {
    const pills = playlistPills.querySelectorAll(".pill-item");
    pills.forEach((pill, i) => {
      pill.classList.toggle("active", i === currentTrackIdx);
    });
  }

  if (audioElement) {
    audioElement.preload = "auto";
    const srcPath = fixPath(track.src);

    audioElement.onloadedmetadata = () => {
      if (audioElement.duration && !isNaN(audioElement.duration) && isFinite(audioElement.duration)) {
        const mins = Math.floor(audioElement.duration / 60);
        const secs = Math.floor(audioElement.duration % 60);
        if (totalTimeEl) totalTimeEl.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      } else {
        if (totalTimeEl) totalTimeEl.innerText = track.duration;
      }
    };
    if (totalTimeEl) totalTimeEl.innerText = track.duration;

    loadAudioSourceSafely(srcPath, autoPlay);
  } else {
    if (autoPlay) {
      playAudio();
    } else {
      pauseAudio();
    }
  }
}

function playAudio() {
  if (!audioElement) return;
  isPlaying = true;
  audioElement.play().catch(e => {
    console.log("Audio play error:", e);
  });
  if (playIcon) playIcon.className = "fa-solid fa-pause";
  if (vinylDisc) vinylDisc.classList.add("playing");
  if (turntableDeck) turntableDeck.classList.add("playing");
  startVisualizer();
}

function pauseAudio() {
  if (!audioElement) return;
  isPlaying = false;
  audioElement.pause();
  if (playIcon) playIcon.className = "fa-solid fa-play";
  if (vinylDisc) vinylDisc.classList.remove("playing");
  if (turntableDeck) turntableDeck.classList.remove("playing");
  stopVisualizer();
}

// Play/Pause Toggle Button
if (playBtn) {
  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  });
}

// Prev / Next Track
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    let prevIdx = currentTrackIdx - 1;
    if (prevIdx < 0) prevIdx = getTracks().length - 1;
    loadTrack(prevIdx, true);
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    let nextIdx = (currentTrackIdx + 1) % getTracks().length;
    loadTrack(nextIdx, true);
  });
}

function getTrackDuration() {
  if (audioElement && audioElement.duration && isFinite(audioElement.duration) && !isNaN(audioElement.duration) && audioElement.duration > 0) {
    return audioElement.duration;
  }
  const currentTracks = getTracks();
  const track = currentTracks[currentTrackIdx];
  if (track && track.duration) {
    const parts = track.duration.split(":");
    if (parts.length === 2) {
      const mins = parseInt(parts[0], 10) || 0;
      const secs = parseInt(parts[1], 10) || 0;
      return mins * 60 + secs;
    }
  }
  return 0;
}

// Time Progress Updates & Interactive Drag/Scrubbing
let isDraggingProgress = false;
let pendingSeekTime = null;
let ignoreNextClick = false;

if (audioElement) {
  audioElement.addEventListener("timeupdate", () => {
    const duration = getTrackDuration();
    if (!isDraggingProgress && duration > 0) {
      const currentTime = audioElement.currentTime || 0;
      const pct = Math.min(100, Math.max(0, (currentTime / duration) * 100));
      const pFill = document.getElementById("progress-fill") || progressFill;
      const cTime = document.getElementById("curr-time") || currTimeEl;
      if (pFill) pFill.style.width = `${pct}%`;

      // Format Time
      const currentMins = Math.floor(currentTime / 60);
      const currentSecs = Math.floor(currentTime % 60);
      if (cTime) cTime.innerText = `${currentMins}:${currentSecs < 10 ? '0' : ''}${currentSecs}`;
    }
  });
}

function calculateSeekFromEvent(e, updateAudioNow = false) {
  const pBg = document.getElementById("progress-bg") || progressBg;
  const pFill = document.getElementById("progress-fill") || progressFill;
  const cTime = document.getElementById("curr-time") || currTimeEl;

  if (!pBg) return 0;
  const duration = getTrackDuration();
  if (duration <= 0) return 0;

  const rect = pBg.getBoundingClientRect();
  const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : (e.clientX || 0);
  const clickPos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));

  // Update UI fill percentage
  if (pFill) pFill.style.width = `${clickPos * 100}%`;

  // Calculate timestamp
  const seekTime = clickPos * duration;
  const mins = Math.floor(seekTime / 60);
  const secs = Math.floor(seekTime % 60);
  if (cTime) cTime.innerText = `${mins}:${secs < 10 ? '0' : ''}${secs}`;

  if (updateAudioNow && audioElement && isFinite(seekTime)) {
    try {
      const maxDuration = (audioElement.duration && isFinite(audioElement.duration) && audioElement.duration > 0) ? audioElement.duration : duration;
      const safeSeek = Math.max(0, Math.min(seekTime, maxDuration - 0.1));

      audioElement.currentTime = safeSeek;
      if (isPlaying) {
        audioElement.play().catch(() => {});
      }
    } catch (err) {
      console.log("Seek error:", err);
    }
  }

  return seekTime;
}

function setupProgressScrubbing() {
  const pBg = document.getElementById("progress-bg") || progressBg;
  if (!pBg || pBg.dataset.scrubBound === "true") return;
  pBg.dataset.scrubBound = "true";

  pBg.addEventListener("mousedown", (e) => {
    isDraggingProgress = true;
    pBg.classList.add("dragging");
    pendingSeekTime = calculateSeekFromEvent(e, false);
  });

  window.addEventListener("mousemove", (e) => {
    if (isDraggingProgress) {
      pendingSeekTime = calculateSeekFromEvent(e, false);
    }
  });

  window.addEventListener("mouseup", (e) => {
    if (isDraggingProgress) {
      calculateSeekFromEvent(e, true);
      isDraggingProgress = false;
      pBg.classList.remove("dragging");
      ignoreNextClick = true;
      setTimeout(() => { ignoreNextClick = false; }, 100);
    }
  });

  pBg.addEventListener("click", (e) => {
    if (ignoreNextClick) return;
    calculateSeekFromEvent(e, true);
  });

  pBg.addEventListener("touchstart", (e) => {
    isDraggingProgress = true;
    pBg.classList.add("dragging");
    pendingSeekTime = calculateSeekFromEvent(e, false);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (isDraggingProgress) {
      pendingSeekTime = calculateSeekFromEvent(e, false);
    }
  }, { passive: true });

  window.addEventListener("touchend", (e) => {
    if (isDraggingProgress) {
      calculateSeekFromEvent(e, true);
      isDraggingProgress = false;
      pBg.classList.remove("dragging");
    }
  });
}

// Volume Slider
volSlider.addEventListener("input", (e) => {
  const val = parseFloat(e.target.value);
  audioElement.volume = val;
  if (val > 0) {
    lastVolume = val;
  }
  updateVolIcon(val);
});

// Volume Icon Click (Mute / Unmute Toggle)
volIcon.addEventListener("click", () => {
  if (audioElement.volume > 0) {
    // Mute sound
    lastVolume = audioElement.volume;
    audioElement.volume = 0;
    volSlider.value = 0;
    volIcon.className = "fa-solid fa-volume-xmark";
  } else {
    // Restore sound
    const restoreVol = lastVolume > 0 ? lastVolume : 0.8;
    audioElement.volume = restoreVol;
    volSlider.value = restoreVol;
    updateVolIcon(restoreVol);
  }
});

function updateVolIcon(val) {
  if (val === 0) {
    volIcon.className = "fa-solid fa-volume-xmark";
  } else if (val < 0.5) {
    volIcon.className = "fa-solid fa-volume-low";
  } else {
    volIcon.className = "fa-solid fa-volume-high";
  }
}

// When song ends, play next
if (audioElement) {
  audioElement.addEventListener("ended", () => {
    let nextIdx = (currentTrackIdx + 1) % getTracks().length;
    loadTrack(nextIdx, true);
  });
}

/* ==========================================================================
   ALBUM STORY MEANING MODAL LOGIC
   ========================================================================== */

function openMeaningModal(track) {
  if (!meaningModal) return;
  selectedModalTrackIdx = track.id;

  modalCoverImg.src = encodeURI(fixPath(track.cover));
  modalAlbumName.innerText = track.album;
  modalTrackTitle.innerText = track.title;
  modalQuote.innerText = track.quote;
  modalMeaningText.innerText = track.meaning;

  meaningModal.classList.add("active");
  meaningModal.setAttribute("aria-hidden", "false");
}

function closeMeaningModal() {
  if (!meaningModal) return;
  meaningModal.classList.remove("active");
  meaningModal.setAttribute("aria-hidden", "true");
}

// Modal Event Listeners
if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", closeMeaningModal);
}

if (meaningModal) {
  meaningModal.addEventListener("click", (e) => {
    if (e.target === meaningModal) {
      closeMeaningModal();
    }
  });
}

if (btnPlayModal) {
  btnPlayModal.addEventListener("click", () => {
    closeMeaningModal();
    loadTrack(selectedModalTrackIdx, true);
    document.getElementById("vinyl-player").scrollIntoView({ behavior: "smooth" });
  });
}

/* ==========================================================================
   3D ALBUM SLEEVES GALLERY LOGIC
   ========================================================================== */

function renderSleevesGallery() {
  if (!sleevesGrid) return;
  sleevesGrid.innerHTML = "";
  const currentTracks = getTracks();

  currentTracks.forEach((track) => {
    const sleeveCard = document.createElement("div");
    sleeveCard.className = "sleeve-card";
    const resolvedCover = encodeURI(fixPath(track.cover));
    const fallbackCover = encodeURI(fixPath("assets/images/Daniel Caesar.jfif"));
    sleeveCard.innerHTML = `
      <div class="sleeve-img-wrap">
        <img src="${resolvedCover}" alt="${track.title} Cover" onerror="this.onerror=null; this.src='${fallbackCover}';" />
      </div>
      <h4 class="sleeve-title">${track.title}</h4>
      <p class="sleeve-album">${track.album}</p>
    `;

    // Click on sleeve card opens the Pop-up Modal with story & meaning!
    sleeveCard.addEventListener("click", () => {
      openMeaningModal(track);
    });

    sleevesGrid.appendChild(sleeveCard);
  });
}

/* ==========================================================================
   SPA ROUTING & VIEW NAVIGATION LOGIC
   ========================================================================== */

function switchView(viewName) {
  const views = document.querySelectorAll(".app-view");
  views.forEach(v => v.classList.remove("active-view"));

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.classList.add("active-view");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Active Nav Link highlight
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => item.classList.remove("active"));
  
  if (viewName === 'landing') {
    const navHome = document.getElementById("nav-home");
    if (navHome) navHome.classList.add("active");
  } else if (viewName === 'artist-dc') {
    const navDc = document.getElementById("nav-dc-link");
    if (navDc) navDc.classList.add("active");
  }
}

// Initialize Everything on Load
document.addEventListener("DOMContentLoaded", () => {
  initPlayer();

  // Logo Click -> Home
  const navLogo = document.getElementById("nav-logo");
  if (navLogo) {
    navLogo.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("landing");
    });
  }

  // Home Nav Link Click
  const navHome = document.getElementById("nav-home");
  if (navHome) {
    navHome.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("landing");
    });
  }

  // Top 4 Artists Nav Link Click -> Scroll to Artists Grid
  const navArtistsLink = document.getElementById("nav-artists-link");
  if (navArtistsLink) {
    navArtistsLink.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("landing");
      setTimeout(() => {
        const artistsSection = document.getElementById("artists");
        if (artistsSection) artistsSection.scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  }

  // Daniel Caesar Nav Link Click
  const navDcLink = document.getElementById("nav-dc-link");
  if (navDcLink) {
    navDcLink.addEventListener("click", (e) => {
      e.preventDefault();
      switchView("artist-dc");
    });
  }

  // Back Button inside Artist Page
  const btnBackHome = document.getElementById("btn-back-home");
  if (btnBackHome) {
    btnBackHome.addEventListener("click", () => {
      switchView("landing");
    });
  }

});
