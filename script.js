const text = "中国未赢够，Red Circle Joker 未赢够";
const tagline = document.getElementById("tagline");
let index = 0;
function typeWriter() {
  if (index < text.length) {
    tagline.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 120);
  } else {
    setTimeout(() => {
      tagline.innerHTML = "";
      index = 0;
      typeWriter();
    }, 2000);
  }
}
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
window.onload = typeWriter;