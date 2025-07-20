const tagline = document.getElementById("tagline");

const phraseArray = [
  "请保持",
  "心脏跳动，",
  "小丑猫",
  "等着与你共鸣。"
];

let phraseIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeWriter() {
  const currentPhrase = phraseArray[phraseIndex];
  if (isTyping) {
    if (charIndex < currentPhrase.length) {
      tagline.innerHTML += currentPhrase[charIndex];
      charIndex++;
      setTimeout(typeWriter, 200);
    } else {
      isTyping = false;
      setTimeout(typeWriter, 100);
    }
  } else {
    phraseIndex++;
    if (phraseIndex >= phraseArray.length) {
      setTimeout(() => {
        tagline.innerHTML = "";
        phraseIndex = 0;
        charIndex = 0;
        isTyping = true;
        typeWriter();
      }, 1600); // 无语音播放，仅等待后重播
    } else {
      charIndex = 0;
      isTyping = true;
      setTimeout(typeWriter, 300);
    }
  }
}

function initSwiper() {
  new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

// ========== 与你共鸣按钮语音播放逻辑 ==========
const resonanceButton = document.getElementById("resonance-button");
const resonanceAudio = document.getElementById("tagline-audio");
let isAudioPlaying = false;

function triggerResonanceAudio() {
  if (!isAudioPlaying && resonanceAudio) {
    isAudioPlaying = true;
    resonanceAudio.currentTime = 0;
    resonanceAudio.play().catch(e => console.warn("Playback error:", e));
    resonanceButton.classList.add("auto-hover");
  }
}

resonanceAudio?.addEventListener("ended", () => {
  isAudioPlaying = false;
  resonanceButton.classList.remove("auto-hover");
});

resonanceButton?.addEventListener("mouseenter", triggerResonanceAudio);
resonanceButton?.addEventListener("click", triggerResonanceAudio);

// 自动轮播按钮 hover 效果
function autoHoverFooterButtons(interval = 1600) {
  const buttons = Array.from(document.querySelectorAll('.footer-button'));
  let lastButton = null;

  function cycleHover() {
    if (isAudioPlaying) {
      // 避免打断语音播放
      setTimeout(cycleHover, interval);
      return;
    }

    if (lastButton) lastButton.classList.remove('auto-hover');
    const candidates = buttons.filter(btn => btn !== lastButton);
    const nextButton = candidates[Math.floor(Math.random() * candidates.length)];
    nextButton.classList.add('auto-hover');
    lastButton = nextButton;

    if (nextButton.id === "resonance-button") {
      triggerResonanceAudio();
    }

    setTimeout(cycleHover, interval);
  }

  cycleHover();
}

// 页面加载后初始化逻辑
window.addEventListener("load", () => {
  typeWriter();

  const images = document.querySelectorAll(".swiper-slide img");
  let loaded = 0;

  function checkAndInit() {
    loaded++;
    if (loaded === images.length) {
      initSwiper();
    }
  }
  images.forEach((img) => {
    if (img.complete) {
      checkAndInit();
    } else {
      img.onload = checkAndInit;
      img.onerror = checkAndInit;
    }
  });

  if (images.length === 0) {
    initSwiper();
  }

  autoHoverFooterButtons(1600);
});