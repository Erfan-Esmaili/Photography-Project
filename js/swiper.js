 const swiper = new Swiper('.swiper', {
      effect: 'fade',
      fadeEffect: { crossFade: true },
      loop: true,
      autoplay: {
        delay: 2000, // هر 2 ثانیه
        disableOnInteraction: false,
      },
      speed: 1700, // سرعت تغییر
    });