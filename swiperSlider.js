// SLIDER ONE
const swiper = new Swiper(".mySwiper1", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".custom-next-one",
      prevEl: ".custom-prev-one",
    },
    breakpoints: {
      0: {
        slidesPerView: 5,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  const swiper7 = new Swiper(".mySwiper7", {
    slidesPerView: 2,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".custom-next-one7",
      prevEl: ".custom-prev-one7",
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
    },
  });
  const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".custom2-next-one",
      prevEl: ".custom2-prev-one",
    },
  });
  // SLIDER THREE
  const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 16,
    loop: true,
    navigation: {
      nextEl: ".custom1-next-one1",
      prevEl: ".custom1-prev-one1",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      375: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      700: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 16,
      },
    },
  });