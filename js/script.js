// Слайдер
new Swiper('.slider', {
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 0,
  effect: 'fade',
  loop: true,
  wrapperClass: 'slider__list',
  slideClass: 'slider__item',
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletClass: 'paginator__item',
    bulletActiveClass: 'paginator__item--active',
    clickable: true,
  },
});

