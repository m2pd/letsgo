window.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.section-tourist .swiper-container', {
    slidesPerView: 6,
    slidesPerColumn: 2,
    //slidesPerColumnFill: "row",
    slidesPerGroup: 6,
    spaceBetween: 30,
    pagination: {
      el: '.section-tourist .swiper-container .swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.section-feature-guideline .swiper-container', {
    slidesPerView: 6,
    spaceBetween: 25,
    pagination: {
      el: '.section-feature-guideline  .swiper-container .swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.section-feature-guideline-3 .swiper-container', {
    slidesPerView: 6,
    slidesPerColumn: 2,
    spaceBetween: 25,
    pagination: {
      el: '.section-feature-guideline-3  .swiper-container .swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.section-feature-guideline-4 .swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 25,
    pagination: {
      el: '.section-feature-guideline-4  .swiper-container .swiper-pagination',
      clickable: true,
    },
  });

  var swiperItem = new Swiper('.swiper-feature', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-feature .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-feature .swiper-button-next',
      prevEl: '.swiper-feature .swiper-button-prev',
    },
  });
});
