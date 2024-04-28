function initSwiperMain() {
  const swiper = new Swiper('.swiper-main', {
    speed: 400,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.main-pagination',
      dynamicBullets: true,
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 10,
          depth: 400,
          scale: 0.8,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        slideToClickedSlide: false,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          scale: 1,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

function initSwiperFinances() {
  const swiper = new Swiper('.swiper-finances', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.finances-pagination',
      type: 'progressbar',
    },
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperMain()
  initSwiperFinances()
})
