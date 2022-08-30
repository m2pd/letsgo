window.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.section-tourist .swiper-container', {
    slidesPerView: 6,
    slidesPerColumn: 2,
    //slidesPerColumnFill: "row",
    slidesPerGroup: 6,
    spaceBetween: 25,
    resistanceRatio: 0,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        slidesPerColumn: 2,
        spaceBetween: 25,
      },
    },
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

    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
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

    breakpoints: {
      480: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
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

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 25,
      },
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

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
    },
  });
});
