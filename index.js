
const mySwiperButton = new Swiper(".mySwiper", {
    loop: true,
  });
  
  document.querySelector(".custom-prev").addEventListener("click", () => {
    mySwiperButton.slidePrev();
  });
  
  document.querySelector(".custom-next").addEventListener("click", () => {
    mySwiperButton.slideNext();
  });

  var swiper = new Swiper('.mySwiper2', {
    slidesPerView: 5, 
    spaceBetween: 20, 
    loop: true, 
    navigation: {
      nextEl: '.custom-next-one',
      prevEl: '.custom-prev-one',
    },
  });
  