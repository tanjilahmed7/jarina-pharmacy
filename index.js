
const mySwiperButton = new Swiper(".mySwiper", {
    loop: true,
  });
  
  document.querySelector(".custom-prev").addEventListener("click", () => {
    mySwiperButton.slidePrev();
  });
  
  document.querySelector(".custom-next").addEventListener("click", () => {
    mySwiperButton.slideNext();
  });
// SLIDER ONE 
  var swiper = new Swiper('.mySwiper1', {
    slidesPerView: 5, 
    spaceBetween: 20, 
    loop: true, 
    navigation: {
      nextEl: '.custom-next-one',
      prevEl: '.custom-prev-one',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
  // SLIDER THREE 
  var swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 4, 
    spaceBetween: 16, 
    loop: true, 
    navigation: {
      nextEl: '.custom-next-one',
      prevEl: '.custom-prev-one',
    },
  });