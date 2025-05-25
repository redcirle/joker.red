const tagline = document.getElementById("tagline");

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
    setTimeout(typeWriter, 200);
  } else {
    setTimeout(() => {
      tagline.innerHTML = "";
      index = 0;
      typeWriter();
    }, 2000);
  }
}

window.onload = () => {
  typeWriter();

  const swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 150,
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
};
function toggleQR() {
  const popup = document.getElementById("qr-popup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}