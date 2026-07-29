const root = document.documentElement;
const body = document.body;
const stackCards = [...document.querySelectorAll(".stack-card")];
const stackTriggers = [...document.querySelectorAll(".stack-trigger")];
const bottleFrames = [...document.querySelectorAll(".bottle-frame")];
const floaters = [...document.querySelectorAll(".floater")];
const butterCanvas = document.querySelector(".butter-canvas");
const heroToast = document.querySelector(".hero-toast");
const bolachaImage = document.querySelector(".bolacha-image");
const titlesSection = document.querySelector(".titles-section");
const shiftsNote = document.querySelector(".titles-note-shifts");
const shiftsCircle = document.querySelector(".titles-circle-shifts");
const projectEntryButtons = [...document.querySelectorAll(".titles-entry-button")];
const nameToggles = [...document.querySelectorAll(".name-toggle")];
const personPopupOverlay = document.querySelector(".person-popup-overlay");
const personPopupImage = document.querySelector(".person-popup-image");
const projectPopupOverlay = document.querySelector(".project-popup-overlay");
const projectPopupGallery = document.querySelector(".project-popup-gallery");
const personPopupSources = {
  leandro: {
    src: "leandro.HEIC",
    alt: "Leandro portrait"
  },
  sara: {
    src: "sara.PNG",
    alt: "Sara portrait"
  }
};
const videoExtensions = new Set(["mp4", "mov", "webm", "m4v", "ogg"]);
const pdfExtensions = new Set(["pdf"]);
const projectPopupSources = {
  barmag: [
    "titulos/BARMAG/BARMAG_201_2026_01_31-pages-1.pdf",
    "titulos/BARMAG/BARMAG_201_2026_01_31-pages-2.pdf",
    "titulos/BARMAG/BARMAG_201_2026_01_31-pages-3.pdf"
  ],
  enseada: [
    "titulos/enseada/IMG_1567.jpg",
    "titulos/enseada/IMG_8482.HEIC",
    "titulos/enseada/IMG_8515.PNG",
    "titulos/enseada/Label Coca Cola .png",
    "titulos/enseada/PHOTO-2025-07-31-14-43-25.JPG"
  ],
  formalighting: [
    "titulos/formalighting/3BC9F899-4EA2-46B3-8168-07BB0C505BD1.PNG"
  ],
  furia: [
    "titulos/furia/69c8325c-9b7f-46d6-8d39-0b27b9a7a804.JPG",
    "titulos/furia/PHOTO-2025-07-26-10-30-12.JPG"
  ],
  "havana-cocktail-maestros": [
    "titulos/havana cocktail maestros/552A2230.JPG",
    "titulos/havana cocktail maestros/552A3067.JPG",
    "titulos/havana cocktail maestros/552A3073.JPG",
    "titulos/havana cocktail maestros/552A3090.JPG",
    "titulos/havana cocktail maestros/552A3116.jpg",
    "titulos/havana cocktail maestros/552A3127.JPG",
    "titulos/havana cocktail maestros/IMG_1656.JPG",
    "titulos/havana cocktail maestros/IMG_1678.PNG"
  ],
  martell: [
    "titulos/martell/39632cff-1011-45a2-b701-c328694fa733.JPG",
    "titulos/martell/781ECE23-05C3-4E16-9F4E-B4F3424DA04A.jpg",
    "titulos/martell/F4C73008-A3D0-47C1-AADA-448ECC53B283.JPG",
    "titulos/martell/GUINGUETTE_DADA_TABLECLOTH cópia.PNG",
    "titulos/martell/IMG_0999.jpg",
    "titulos/martell/IMG_1001.jpg",
    "titulos/martell/IMG_1003.jpg",
    "titulos/martell/IMG_1004.jpg",
    "titulos/martell/IMG_1005.jpg",
    "titulos/martell/IMG_3798.JPG",
    "titulos/martell/IMG_3840 2.JPG",
    "titulos/martell/IMG_8360.MOV",
    "titulos/martell/Joueu.PNG",
    "titulos/martell/Kazimir.PNG",
    "titulos/martell/QUASE TRÁS.JPG"
  ],
  "monkey-mash": [
    "titulos/monkey mash/20 MAIO MONKEY MASH@MAYUKA_TIAGO MAYA-00043.jpg",
    "titulos/monkey mash/20 MAIO MONKEY MASH@MAYUKA_TIAGO MAYA-00242.jpg",
    "titulos/monkey mash/20 MAIO MONKEY MASH@MAYUKA_TIAGO MAYA-00087.jpg",
    "titulos/monkey mash/20 MAIO MONKEY MASH@MAYUKA_TIAGO MAYA-09934.jpg",
    "titulos/monkey mash/Sem título - 15 de maio de 2026 00.25.51.JPG",
    "titulos/monkey mash/Gemini_Generated_Image_1qrd1x1qrd1x1qrd.png",
    "titulos/monkey mash/cookie.png"
  ],
  "toca-da-raposa": [
    "titulos/toca da raposa/WABISABI-128.jpg",
    "titulos/toca da raposa/WABISABI-51.jpg",
    "titulos/toca da raposa/WABISABI-107.jpg",
    "titulos/toca da raposa/WABISABI-2.jpg",
    "titulos/toca da raposa/WABISABI-3.jpg",
    "titulos/toca da raposa/ChatGPT Image 7_05_2026, 17_46_45.png",
    "titulos/toca da raposa/WABISABI-9.jpg",
    "titulos/toca da raposa/WABISABI-132.jpg",
    "titulos/toca da raposa/WABISABI-290.jpg",
    "titulos/toca da raposa/WABISABI-182.jpg",
    "titulos/toca da raposa/WABISABI-14.jpg"
  ],
  "ophelia": [
    "titulos/ophelia/opheliaxwabisabi-20.jpg",
    "titulos/ophelia/opheliaxwabisabi-211.jpg",
    "titulos/ophelia/ophelia.png",
    "titulos/ophelia/ChatGPT Image 13_07_2026, 13_20_39.png",
    "titulos/ophelia/opheliaxwabisabi-102.jpg",
    "titulos/ophelia/opheliaxwabisabi-111.jpg",
    "titulos/ophelia/opheliaxwabisabi-112.jpg",
    "titulos/ophelia/opheliaxwabisabi-115.jpg",
    "titulos/ophelia/opheliaxwabisabi-126.jpg",
    "titulos/ophelia/opheliaxwabisabi-132.jpg",
    "titulos/ophelia/opheliaxwabisabi-148.jpg",
    "titulos/ophelia/opheliaxwabisabi-16.jpg",
    "titulos/ophelia/opheliaxwabisabi-46.jpg",
    "titulos/ophelia/opheliaxwabisabi-54.jpg",
    "titulos/ophelia/opheliaxwabisabi-57.jpg"
  ],
  "paris-whisky-live": [
    "titulos/paris whisky live/IMG_8672.PNG"
  ],
  "three-house": [
    "titulos/three house/HALLOWEEN_2025@MAYUKA_TIAGO MAYA-05243.JPG",
    "titulos/three house/HALLOWEEN_2025@MAYUKA_TIAGO MAYA-05512.jpg",
    "titulos/three house/HALLOWEEN_2025@MAYUKA_TIAGO MAYA-05758.JPG",
    "titulos/three house/IMG_1211.JPG",
    "titulos/three house/IMG_8960.MOV",
    "titulos/three house/IMG_9241.JPG",
    "titulos/three house/IMG_9243.JPG"
  ],
  torto: [
    "titulos/torto/1Torto post champarriao.PNG",
    "titulos/torto/73d6fa1c-a354-488a-bad5-885b05ced587.JPG",
    "titulos/torto/IMG_5900.JPG",
    "titulos/torto/TORTO_4ANUS@MAYUKA_TIAGO MAYA-00047.JPG",
    "titulos/torto/TORTO_4ANUS@MAYUKA_TIAGO MAYA-00208.JPG",
    "titulos/torto/TORTO_4ANUS@MAYUKA_TIAGO MAYA-00211.JPG",
    "titulos/torto/TORTO_4ANUS@MAYUKA_TIAGO MAYA-00518.JPG",
    "titulos/torto/TORTO_4ANUS@MAYUKA_TIAGO MAYA-09914.JPG",
    "titulos/torto/TORTO_4ANUS@MAYUKA_TIAGO MAYA-09946.JPG",
    "titulos/torto/ezgif.com-speed.gif"
  ]
};
const stackModal = document.querySelector(".stack-modal");
const stackModalTitle = document.querySelector(".stack-modal-title");
const stackModalDescription = document.querySelector(".stack-modal-description");
const stackModalClose = document.querySelector(".stack-modal-close");
const stackModalBackdrop = document.querySelector(".stack-modal-backdrop");
const stackGallery = document.querySelector(".stack-gallery");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const animationConfig = {
  bottleScrollMultiplier: 0.25,
  stackScatterStartViewport: 1,
  stackScatterFullAtCenter: 0.5,
  stackScatterPlateauViewports: 0.78,
  stackRestackViewports: 1.35
};
let activeStackTrigger = null;

let ticking = false;
let dragState = null;
let stackTargets = [];
let stackLayoutSeed = 1;
let stackScatterAmount = 0;
let preFocusStackTargets = null;
let stackModalPosition = null;
let butterPainter = null;
let activePerson = null;
let shiftsCirclePinned = false;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function progressWithinElement(element, multiplier = 1) {
  const rect = element.getBoundingClientRect();
  const range = rect.height * multiplier;
  return clamp((window.innerHeight - rect.bottom) / Math.max(range, 1), 0, 1);
}

function seededNoise(seed) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function getStackMetrics() {
  const galleryRect = stackGallery?.getBoundingClientRect();
  const width = galleryRect?.width || window.innerWidth;
  const height = galleryRect?.height || window.innerHeight;
  const maxX = Math.max((width * 0.5) - 170, 120);
  const maxY = Math.max((height * 0.5) - 170, 100);
  return { width, height, maxX, maxY };
}

function createScatterTargets(seedOffset = 0) {
  const { maxX, maxY } = getStackMetrics();
  const total = Math.max(stackCards.length, 1);

  return stackCards.map((_, index) => {
    const seed = index + 1 + seedOffset * 17;
    const progress = (index + 0.7) / total;
    const angle = (index * 2.399963229728653) + (seededNoise(seed * 1.7) - 0.5) * 1.45 + seedOffset * 0.33;
    const radius = Math.sqrt(progress) * (0.58 + seededNoise(seed * 2.3) * 0.52);
    const x = Math.cos(angle) * maxX * radius + (seededNoise(seed * 3.1) - 0.5) * 120;
    const y = Math.sin(angle) * maxY * radius + (seededNoise(seed * 4.7) - 0.5) * 120;
    const rotate = (seededNoise(seed * 5.3) - 0.5) * 26;

    return { x, y, rotate };
  });
}

function smoothStep(value) {
  const progress = clamp(value, 0, 1);
  return progress * progress * progress * (progress * ((progress * 6) - 15) + 10);
}

function getStackedTarget(index) {
  const midpoint = (stackCards.length - 1) / 2;
  const offset = index - midpoint;

  return {
    x: 0,
    y: offset * 2.2,
    rotate: offset * 0.35
  };
}

function getStackScatterAmount() {
  if (!stackGallery) {
    return 0;
  }

  const galleryRect = stackGallery.getBoundingClientRect();
  const scatterStartTop = window.innerHeight * animationConfig.stackScatterStartViewport;
  const scatterFullTop = (window.innerHeight * animationConfig.stackScatterFullAtCenter) - (galleryRect.height * 0.5);
  const fullScatterAt = Math.max(scatterStartTop - scatterFullTop, 1);
  const travelPastStart = scatterStartTop - galleryRect.top;

  if (travelPastStart <= 0) {
    return 0;
  }

  const plateauUntil = fullScatterAt + (window.innerHeight * animationConfig.stackScatterPlateauViewports);
  const restackAt = fullScatterAt + (window.innerHeight * animationConfig.stackRestackViewports);

  if (travelPastStart <= fullScatterAt) {
    return smoothStep(travelPastStart / fullScatterAt);
  }

  if (travelPastStart <= plateauUntil) {
    return 1;
  }

  return 1 - smoothStep((travelPastStart - plateauUntil) / (restackAt - plateauUntil));
}

function buildStackTargets(focusTrigger = null) {
  stackTargets = createScatterTargets(stackLayoutSeed);

  if (!focusTrigger || !stackGallery) {
    return;
  }

  const galleryRect = stackGallery.getBoundingClientRect();
  const triggerRect = focusTrigger.getBoundingClientRect();
  const popupWidth = Math.min(420, Math.max(window.innerWidth * 0.28, 280));
  const popupHeight = 220;
  const gap = 44;
  const spaceRight = galleryRect.right - triggerRect.right;
  const spaceLeft = triggerRect.left - galleryRect.left;
  const placeRight = spaceRight >= spaceLeft;
  const visibleTop = clamp(-galleryRect.top + 18, 18, galleryRect.height - popupHeight - 18);
  const visibleBottom = clamp(-galleryRect.top + window.innerHeight - popupHeight - 18, visibleTop, galleryRect.height - popupHeight - 18);

  const popupLeft = placeRight
    ? Math.min(triggerRect.right - galleryRect.left + gap, galleryRect.width - popupWidth - 18)
    : Math.max(triggerRect.left - galleryRect.left - popupWidth - gap, 18);
  const popupTop = clamp(
    triggerRect.top - galleryRect.top - 18,
    visibleTop,
    visibleBottom
  );
  stackModalPosition = { left: popupLeft, top: popupTop };

  const reserve = {
    left: popupLeft - 84,
    right: popupLeft + popupWidth + 84,
    top: popupTop - 72,
    bottom: popupTop + popupHeight + 72
  };
  const reserveCenterX = (reserve.left + reserve.right) / 2;
  const reserveCenterY = (reserve.top + reserve.bottom) / 2;

  stackTargets = stackTargets.map((target, index) => {
    const card = stackCards[index];

    if (!card) {
      return target;
    }

    const cardWidth = card.offsetWidth * 0.72;
    const cardHeight = card.offsetHeight * 0.72;
    const centerX = galleryRect.width * 0.5 + target.x;
    const centerY = galleryRect.height * 0.5 + target.y;
    const overlapsX = centerX + cardWidth > reserve.left && centerX - cardWidth < reserve.right;
    const overlapsY = centerY + cardHeight > reserve.top && centerY - cardHeight < reserve.bottom;

    if (!overlapsX || !overlapsY) {
      return card.contains(focusTrigger)
        ? {
            x: target.x * 0.82,
            y: target.y * 0.82,
            rotate: target.rotate * 0.45
          }
        : target;
    }

    const exitLeft = reserve.left - cardWidth - (galleryRect.width * 0.5);
    const exitRight = reserve.right + cardWidth - (galleryRect.width * 0.5);
    const exitTop = reserve.top - cardHeight - (galleryRect.height * 0.5);
    const exitBottom = reserve.bottom + cardHeight - (galleryRect.height * 0.5);
    const candidateX = centerX < reserveCenterX ? exitLeft : exitRight;
    const candidateY = centerY < reserveCenterY ? exitTop : exitBottom;
    const moveX = Math.abs(candidateX - target.x);
    const moveY = Math.abs(candidateY - target.y);

    if (moveX <= moveY) {
      target.x = candidateX;
    } else {
      target.y = candidateY;
    }

    target.rotate += target.x < 0 ? -5 : 5;
    return {
      x: target.x,
      y: target.y,
      rotate: card.contains(focusTrigger) ? target.rotate * 0.55 : target.rotate
    };
  });
}

function positionStackModal(trigger) {
  if (!stackModal || !stackModalTitle || !stackModalDescription || !stackGallery) {
    return;
  }

  if (stackModalPosition) {
    const modalCard = stackModalDescription.parentElement;
    modalCard.style.left = `${stackModalPosition.left}px`;
    modalCard.style.top = `${stackModalPosition.top}px`;
    return;
  }

  const triggerRect = trigger.getBoundingClientRect();
  const galleryRect = stackGallery.getBoundingClientRect();
  const modalCard = stackModalDescription.parentElement;
  const modalRect = modalCard.getBoundingClientRect();
  const gap = 20;
  const viewportWidth = galleryRect.width;
  const viewportHeight = galleryRect.height;
  const localTrigger = {
    left: triggerRect.left - galleryRect.left,
    right: triggerRect.right - galleryRect.left,
    top: triggerRect.top - galleryRect.top,
    bottom: triggerRect.bottom - galleryRect.top
  };
  const spaces = [
    {
      left: localTrigger.right + gap,
      top: clamp(localTrigger.top, 16, viewportHeight - modalRect.height - 16),
      width: viewportWidth - localTrigger.right - gap - 16,
      height: viewportHeight - 32
    },
    {
      left: 16,
      top: clamp(localTrigger.top, 16, viewportHeight - modalRect.height - 16),
      width: localTrigger.left - gap - 16,
      height: viewportHeight - 32
    },
    {
      left: clamp(localTrigger.left, 16, viewportWidth - modalRect.width - 16),
      top: localTrigger.bottom + gap,
      width: viewportWidth - 32,
      height: viewportHeight - localTrigger.bottom - gap - 16
    },
    {
      left: clamp(localTrigger.left, 16, viewportWidth - modalRect.width - 16),
      top: 16,
      width: viewportWidth - 32,
      height: localTrigger.top - gap - 16
    }
  ];

  const bestSpace = spaces
    .filter((space) => space.width > 140 && space.height > 80)
    .sort((a, b) => (b.width * b.height) - (a.width * a.height))[0];

  let left = 16;
  let top = 16;

  if (bestSpace) {
    left = bestSpace.left;
    top = bestSpace.top;
  } else {
    left = clamp(localTrigger.right + gap, 16, viewportWidth - modalRect.width - 16);
    top = clamp(localTrigger.top, 16, viewportHeight - modalRect.height - 16);
  }

  modalCard.style.left = `${left}px`;
  modalCard.style.top = `${top}px`;
}

function openStackModal(trigger) {
  if (!stackModal || !stackModalTitle || !stackModalDescription) {
    return;
  }

  activeStackTrigger = trigger;
  preFocusStackTargets = stackTargets.map((target) => ({ ...target }));
  stackScatterAmount = 1;
  stackModalTitle.textContent = trigger.dataset.title || "";
  stackModalDescription.textContent = trigger.dataset.description || "";
  buildStackTargets(trigger);
  applyStackTargets();
  stackModal.classList.add("is-open");
  stackModal.setAttribute("aria-hidden", "false");
  window.requestAnimationFrame(() => positionStackModal(trigger));
}

function closeStackModal() {
  if (!stackModal) {
    return;
  }

  activeStackTrigger = null;
  stackModalPosition = null;
  stackModal.classList.remove("is-open");
  stackModal.setAttribute("aria-hidden", "true");
  if (preFocusStackTargets) {
    stackTargets = preFocusStackTargets;
    preFocusStackTargets = null;
  } else {
    buildStackTargets();
  }
  applyStackTargets();
}

function applyStackTargets() {
  const scatterAmount = activeStackTrigger ? 1 : stackScatterAmount;
  const easedScatter = smoothStep(scatterAmount);

  stackCards.forEach((card, index) => {
    const stacked = getStackedTarget(index);
    const scattered = stackTargets[index] || stacked;
    const x = stacked.x + ((scattered.x - stacked.x) * easedScatter);
    const y = stacked.y + ((scattered.y - stacked.y) * easedScatter);
    const rotate = stacked.rotate + ((scattered.rotate - stacked.rotate) * easedScatter);
    card.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${rotate}deg) scale(0.82)`;
  });
}

function createButterPainter() {
  if (!butterCanvas) {
    return null;
  }

  const context = butterCanvas.getContext("2d");
  const butterTexture = new Image();
  butterTexture.src = "BUTTER.png";

  const state = {
    active: false,
    drawing: false,
    pointerId: null,
    pointerX: window.innerWidth * 0.5,
    pointerY: window.innerHeight * 0.5,
    lastX: 0,
    lastY: 0,
    spacingLeft: 0,
    dpr: Math.max(window.devicePixelRatio || 1, 1),
    width: 0,
    height: 0
  };

  function resizeCanvas() {
    const previous = document.createElement("canvas");
    previous.width = butterCanvas.width;
    previous.height = butterCanvas.height;
    const previousContext = previous.getContext("2d");

    if (butterCanvas.width && butterCanvas.height) {
      previousContext.drawImage(butterCanvas, 0, 0);
    }

    const width = Math.max(
      document.documentElement.scrollWidth,
      document.documentElement.clientWidth,
      window.innerWidth
    );
    const height = Math.max(
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight,
      window.innerHeight
    );

    state.dpr = Math.max(window.devicePixelRatio || 1, 1);
    state.width = width;
    state.height = height;

    butterCanvas.width = Math.round(width * state.dpr);
    butterCanvas.height = Math.round(height * state.dpr);
    butterCanvas.style.width = `${width}px`;
    butterCanvas.style.height = `${height}px`;
    context.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
    context.imageSmoothingEnabled = true;

    if (previous.width && previous.height) {
      context.drawImage(
        previous,
        0,
        0,
        previous.width,
        previous.height,
        0,
        0,
        width,
        height
      );
    }
  }

  function stamp(x, y, angleHint = 0) {
    if (!butterTexture.complete) {
      return;
    }

    const scale = randomBetween(0.84, 1.18);
    const width = randomBetween(92, 132) * scale;
    const height = width * 0.56;
    const rotation = randomBetween(-0.18, 0.18);
    const opacity = randomBetween(0.78, 0.98);
    const jitterX = randomBetween(-5, 5);
    const jitterY = randomBetween(-5, 5);

    context.save();
    context.globalAlpha = opacity;
    context.translate(x + jitterX, y + jitterY);
    context.rotate(rotation);
    context.drawImage(butterTexture, -width / 2, -height / 2, width, height);
    context.restore();
  }

  function drawSegment(fromX, fromY, toX, toY) {
    const dx = toX - fromX;
    const dy = toY - fromY;
    const distance = Math.hypot(dx, dy);

    if (distance === 0) {
      stamp(toX, toY);
      return;
    }

    let traveled = state.spacingLeft;

    while (traveled <= distance) {
      const progress = traveled / distance;
      const x = fromX + dx * progress;
      const y = fromY + dy * progress;
      stamp(x, y);
      traveled += randomBetween(12, 22);
    }

    state.spacingLeft = traveled - distance;
  }

  function syncToastImage() {
    if (!heroToast) {
      return;
    }

    const withKnife = heroToast.dataset.toastWithKnife;
    const withoutKnife = heroToast.dataset.toastWithoutKnife;
    heroToast.src = state.active ? withoutKnife : withKnife;
  }

  function setActive(nextState) {
    state.active = nextState;
    syncToastImage();

    if (!nextState) {
      state.drawing = false;
      state.pointerId = null;
    }
  }

  function pointerDown(event) {
    if (!state.active) {
      return;
    }

    state.drawing = true;
    state.pointerId = event.pointerId;
    state.lastX = event.pageX;
    state.lastY = event.pageY;
    state.spacingLeft = 0;
    stamp(state.lastX, state.lastY, 0);
  }

  function pointerMove(event) {
    state.pointerX = event.clientX;
    state.pointerY = event.clientY;

    if (!state.active || !state.drawing || state.pointerId !== event.pointerId) {
      return;
    }

    drawSegment(state.lastX, state.lastY, event.pageX, event.pageY);
    state.lastX = event.pageX;
    state.lastY = event.pageY;
  }

  function pointerUp(event) {
    if (!state.drawing) {
      return;
    }

    if (event.pointerId !== undefined && state.pointerId !== event.pointerId) {
      return;
    }

    state.drawing = false;
    state.pointerId = null;
    state.spacingLeft = 0;
  }

  heroToast?.addEventListener("dblclick", (event) => {
    event.preventDefault();
    event.stopPropagation();
    state.pointerX = event.clientX || state.pointerX;
    state.pointerY = event.clientY || state.pointerY;
    setActive(!state.active);
  });

  window.addEventListener("dblclick", (event) => {
    if (!state.active) {
      return;
    }

    if (event.target.closest(".hero-toast")) {
      return;
    }

    setActive(false);
  });

  butterTexture.addEventListener("load", resizeCanvas);
  window.addEventListener("pointerdown", pointerDown);
  window.addEventListener("pointermove", pointerMove);
  window.addEventListener("pointerup", pointerUp);
  window.addEventListener("pointercancel", pointerUp);
  window.addEventListener("blur", () => pointerUp({ pointerId: state.pointerId }));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setActive(false);
    }
  });

  resizeCanvas();
  setActive(false);

  return {
    resizeCanvas
  };
}

function setSceneVariables() {
  const heroProgress = clamp(window.scrollY / Math.max(window.innerHeight * 0.9, 1), 0, 1);
  root.style.setProperty("--hero-shift", `${heroProgress * 110}px`);
  root.style.setProperty("--hero-opacity", `${clamp(1 - heroProgress * 1.35, 0, 1)}`);
  const bolachaDistance = window.innerHeight * 1.6;
  const bolachaProgress = clamp(window.scrollY / Math.max(bolachaDistance, 1), 0, 1);
  root.style.setProperty("--bolacha-rotate", `${bolachaProgress * 360}deg`);

  if (titlesSection) {
    const titlesRect = titlesSection.getBoundingClientRect();
    const titlesProgress = clamp((window.innerHeight - titlesRect.top) / Math.max(window.innerHeight * 1.05, 1), 0, 1);
    root.style.setProperty("--titles-inset-top", `${(1 - titlesProgress) * 100}%`);
    root.style.setProperty("--titles-opacity", `${titlesProgress}`);
  }

  const bottleBlock = document.querySelector(".bottle-block");

  if (reduceMotion.matches) {
    stackScatterAmount = 0;
    applyStackTargets();
    bottleFrames.forEach((frame, index) => {
      frame.classList.toggle("is-active", index === 0);
    });
    return;
  }

  stackScatterAmount = getStackScatterAmount();
  applyStackTargets();

  if (bottleBlock && bottleFrames.length) {
    const bottleProgress = progressWithinElement(bottleBlock, animationConfig.bottleScrollMultiplier);
    const activeIndex = bottleProgress <= 0
      ? 0
      : Math.min(Math.ceil(bottleProgress * (bottleFrames.length - 1)), bottleFrames.length - 1);
    bottleFrames.forEach((frame, index) => {
      frame.classList.toggle("is-active", index === activeIndex);
    });
  }
}

function syncPersonToggleState() {
  nameToggles.forEach((toggle) => {
    const person = toggle.dataset.person;
    const isVisible = person === activePerson;
    toggle.setAttribute("aria-pressed", String(isVisible));
  });

  if (!personPopupOverlay || !personPopupImage) {
    return;
  }

  if (!activePerson || !personPopupSources[activePerson]) {
    personPopupOverlay.hidden = true;
    personPopupImage.src = "";
    personPopupImage.alt = "";
    return;
  }

  personPopupOverlay.hidden = false;
  personPopupImage.src = personPopupSources[activePerson].src;
  personPopupImage.alt = personPopupSources[activePerson].alt;
}

function initPersonToggles() {
  if (!nameToggles.length) {
    return;
  }

  nameToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const person = toggle.dataset.person;

      if (!person || !personPopupSources[person]) {
        return;
      }

      activePerson = activePerson === person ? null : person;

      syncPersonToggleState();
    });
  });

  personPopupOverlay?.addEventListener("click", () => {
    activePerson = null;
    syncPersonToggleState();
  });

  syncPersonToggleState();
}

function syncShiftsCircle() {
  shiftsCircle?.classList.toggle("is-visible", shiftsCirclePinned);
}

function initShiftsCircle() {
  if (!shiftsNote || !shiftsCircle) {
    return;
  }

  const shiftLines = [...shiftsNote.querySelectorAll("p")];

  shiftLines.forEach((line) => {
    line.addEventListener("pointerenter", () => {
      shiftsCircle.classList.add("is-visible");
    });

    line.addEventListener("pointerleave", () => {
      if (!shiftsCirclePinned) {
        shiftsCircle.classList.remove("is-visible");
      }
    });

    line.addEventListener("click", () => {
      shiftsCirclePinned = !shiftsCirclePinned;
      syncShiftsCircle();
    });
  });

  shiftsNote.addEventListener("pointerleave", () => {
    if (!shiftsCirclePinned) {
      shiftsCircle.classList.remove("is-visible");
    }
  });

  syncShiftsCircle();
}

function closeProjectPopup() {
  if (!projectPopupOverlay || !projectPopupGallery) {
    return;
  }

  projectPopupOverlay.hidden = true;
  projectPopupGallery.innerHTML = "";
  projectPopupGallery.classList.remove("has-pdfs");
  body.classList.remove("project-popup-open");
}

function openProjectPopup(project) {
  if (!projectPopupOverlay || !projectPopupGallery) {
    return;
  }

  const sources = projectPopupSources[project];

  if (!sources?.length) {
    return;
  }

  projectPopupGallery.innerHTML = "";
  projectPopupGallery.classList.toggle(
    "has-pdfs",
    sources.some((src) => pdfExtensions.has(src.split(".").pop()?.toLowerCase() || ""))
  );

  sources.forEach((src, index) => {
    const extension = src.split(".").pop()?.toLowerCase() || "";

    if (pdfExtensions.has(extension)) {
      const frame = document.createElement("iframe");
      frame.src = src;
      frame.className = "project-popup-media project-popup-pdf is-landscape";
      frame.title = `${project} pdf ${index + 1}`;
      frame.loading = "lazy";
      projectPopupGallery.appendChild(frame);
      return;
    }

    if (videoExtensions.has(extension)) {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.className = "project-popup-media";
      video.setAttribute("aria-label", `${project} video ${index + 1}`);
      video.addEventListener("loadedmetadata", () => {
        if (video.videoWidth > video.videoHeight) {
          video.classList.add("is-landscape");
        }
      });
      projectPopupGallery.appendChild(video);
      return;
    }

    const image = document.createElement("img");
    image.src = src;
    image.alt = `${project} image ${index + 1}`;
    image.className = "project-popup-media";
    image.addEventListener("load", () => {
      if (image.naturalWidth > image.naturalHeight) {
        image.classList.add("is-landscape");
      }
    });
    projectPopupGallery.appendChild(image);
  });

  projectPopupOverlay.hidden = false;
  body.classList.add("project-popup-open");
}

function initProjectPopups() {
  if (!projectEntryButtons.length) {
    return;
  }

  projectEntryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const project = button.dataset.project;

      if (!project) {
        return;
      }

      openProjectPopup(project);
    });
  });

  projectPopupOverlay?.addEventListener("click", (event) => {
    if (event.target === projectPopupOverlay) {
      closeProjectPopup();
    }
  });
}

function initFloaters() {
  floaters.forEach((floater) => {
    const stopDrag = () => {
      if (!dragState || dragState.floater !== floater) {
        return;
      }

      floater.classList.remove("is-dragging");
      dragState = null;
    };

    floater.addEventListener("pointerdown", (event) => {
      event.preventDefault();
      const rect = floater.getBoundingClientRect();
      dragState = {
        floater,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        rectLeft: rect.left,
        rectTop: rect.top
      };
      floater.setPointerCapture(event.pointerId);
      floater.classList.add("is-dragging");
    });

    floater.addEventListener("pointermove", (event) => {
      if (!dragState || dragState.floater !== floater || dragState.pointerId !== event.pointerId) {
        return;
      }

      if (event.buttons === 0) {
        stopDrag();
        return;
      }

      const dx = event.clientX - dragState.startX;
      const dy = event.clientY - dragState.startY;
      const parent = floater.offsetParent || floater.parentElement;
      const parentRect = parent.getBoundingClientRect();
      const left = dragState.rectLeft - parentRect.left + dx;
      const top = dragState.rectTop - parentRect.top + dy;

      floater.style.left = `${left}px`;
      floater.style.top = `${top}px`;
      floater.style.right = "auto";
      floater.style.bottom = "auto";
      floater.style.transform = "none";
    });

    floater.addEventListener("pointerup", stopDrag);
    floater.addEventListener("pointercancel", stopDrag);
    floater.addEventListener("lostpointercapture", stopDrag);
    window.addEventListener("pointerup", stopDrag);
    window.addEventListener("pointercancel", stopDrag);
    window.addEventListener("blur", stopDrag);
  });
}

function initStackModal() {
  stackTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      if (activeStackTrigger === trigger) {
        closeStackModal();
        return;
      }

      if (stackScatterAmount < 0.55) {
        return;
      }

      openStackModal(trigger);
    });
  });

  stackModalClose?.addEventListener("click", closeStackModal);
  stackModalBackdrop?.addEventListener("click", closeStackModal);
  stackModalDescription?.parentElement?.addEventListener("click", closeStackModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeStackModal();
    }
  });

  window.addEventListener("resize", () => {
    buildStackTargets(activeStackTrigger);
    applyStackTargets();
    if (activeStackTrigger) {
      positionStackModal(activeStackTrigger);
    }
  });

  window.addEventListener("scroll", () => {
    if (activeStackTrigger) {
      positionStackModal(activeStackTrigger);
    }
  }, { passive: true });
}

function onScroll() {
  if (reduceMotion.matches) {
    return;
  }

  if (!ticking) {
    window.requestAnimationFrame(() => {
      setSceneVariables();
      ticking = false;
    });
    ticking = true;
  }
}

function init() {
  buildStackTargets();
  applyStackTargets();
  initPersonToggles();
  initShiftsCircle();
  initProjectPopups();
  initFloaters();
  initStackModal();
  butterPainter = createButterPainter();
  setSceneVariables();

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    buildStackTargets();
    butterPainter?.resizeCanvas();
    setSceneVariables();
  });
  reduceMotion.addEventListener("change", setSceneVariables);
}

init();
