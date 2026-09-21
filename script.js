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

async function loadAudioSourceSafely(srcPath) {
  if (!audioElement) return;

  if (audioBlobCache[srcPath]) {
    if (audioElement.src !== audioBlobCache[srcPath]) {
      audioElement.src = audioBlobCache[srcPath];
      audioElement.load();
    }
    return;
  }

  try {
    const res = await fetch(srcPath, { cache: "no-cache" });
    if (!res.ok) throw new Error("HTTP Error " + res.status);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    audioBlobCache[srcPath] = blobUrl;
    if (audioElement) {
      audioElement.src = blobUrl;
      audioElement.load();
    }
  } catch (err) {
    console.log("Blob fetch fallback for:", srcPath, err);
    if (audioElement) {
      audioElement.src = srcPath;
      audioElement.load();
    }
  }
}

function loadTrack(index, autoPlay = false) {
  currentTrackIdx = index;
  const currentTracks = getTracks();
  const track = currentTracks[currentTrackIdx];

  // Dynamically change website theme color to match cover art!
  document.documentElement.setAttribute("data-theme", track.theme);

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

  // Direct HTML5 Audio Source assignment for 0ms instant streaming
  if (audioElement) {
    audioElement.preload = "auto";
    const srcPath = fixPath(track.src);
    const resolvedUrl = new URL(srcPath, window.location.href).href;

    if (audioElement.src !== resolvedUrl) {
      audioElement.src = srcPath;
      audioElement.load();
    }

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

    if (autoPlay) {
      playAudio();
    }
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
      const maxDuration = (audioElement.duration && isFinite(audioElement.duration)) ? audioElement.duration : duration;
      const safeSeek = Math.max(0, Math.min(seekTime, maxDuration - 0.1));

      if (audioElement.readyState === 0) {
        audioElement.addEventListener("loadedmetadata", () => {
          audioElement.currentTime = safeSeek;
          if (isPlaying) audioElement.play().catch(() => {});
        }, { once: true });
      } else {
        audioElement.currentTime = safeSeek;
        if (isPlaying) audioElement.play().catch(() => {});
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

  // Artist Cards Click
  const artistCards = document.querySelectorAll(".artist-card");
  artistCards.forEach(card => {
    card.addEventListener("click", () => {
      const viewTarget = card.getAttribute("data-artist-view");
      if (viewTarget === "artist-dc") {
        switchView("artist-dc");
      } else {
        alert("Pilihan hebat! Halaman khusus untuk artis ini akan langsung aktif begitu Anda mengirimkan nama & lagunya.");
      }
    });
  });
});
