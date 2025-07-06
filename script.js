const tagline = document.getElementById("tagline");

const charArray = ["请", "保", "持", "心", "脏", "跳", "动", "，", "小", "丑", "猫", "等", "着", "与", "你", "共","鸣", "。"];

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

  const images = document.querySelectorAll(".swiper-slide img");
  let loadedCount = 0;

  images.forEach((img) => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          initSwiper();
        }
      };
    }
  });

  // 如果所有图片都已经加载
  if (loadedCount === images.length) {
    initSwiper();
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
};
function confirmAndGoXHS() {
  const confirmed = confirm("是否前往小红书主页？");
  if (confirmed) {
    window.open("https://www.xiaohongshu.com", "_blank");
  }
}
function toggleQR() {
  const popup = document.getElementById("qr-popup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}
function toggleWeChatPublicQR() {
  const popup = document.getElementById("wechat-public-qr-popup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}
function confirmAndMail() {
  const confirmed = confirm("是否跳转到邮件应用？");
  if (confirmed) {
    window.location.href = "mailto:hello@joker.red";
  }
}
function toggleSecondQR() {
  const popup = document.getElementById("second-qr-popup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}