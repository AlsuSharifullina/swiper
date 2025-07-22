let swiper = new Swiper(".gallery-swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".gallery__pagination",
    // type: "fraction",
    clickable: true,
  },
  navigation: {
    nextEl: ".gallery__brn-next",
    prevEl: ".gallery__brn-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
  },
});
