let services = new Swiper(".servicesSwiper", {
  spaceBetween: 30,
  slidesPerView: 3,
    loop: true,

     autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  navigation: {
    nextEl: ".control_next",
    prevEl: ".control_prev",
  },
});


const duration = 5000; // 5 saniyə


const circle = document.querySelector(".progress circle");

function startProgress() {
  let startTime = null;

  function animate(time) {
    if (!startTime) startTime = time;

    const progress = time - startTime;
    const percent = progress / duration;

    const offset = 220 * (1 - percent);
    circle.style.strokeDashoffset = offset;

    if (progress < duration) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// restart on slide change
services.on("slideChange", () => {
  circle.style.strokeDashoffset = 220;
  startProgress();
});

// first run
startProgress();