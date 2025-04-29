const tagline = document.getElementById("tagline");

// 构造逐字符数组（含红色标记）
const charArray = [
  "中", "国", "未", "赢", "够", "，", " ",
  "R", "e", "d", " ",
  "<span style='color:#FF2D55;'>", "C", "i", "r", "c", "l", "e", "</span>", " ",
  "J", "o", "k", "e", "r", " ",
  "未", "赢", "够"
];

let index = 0;

function typeWriter() {
  if (index < charArray.length) {
    tagline.innerHTML += charArray[index];
    index++;
    setTimeout(typeWriter, 200);  // 控制打字速度（ms）
  } else {
    setTimeout(() => {
      tagline.innerHTML = "";
      index = 0;
      typeWriter();  // 循环播放
    }, 2000); // 停留 2 秒后重播
  }
}

window.onload = typeWriter;

// Swiper初始化：Coverflow效果
const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// 执行打字机效果
window.onload = typeWriter;