
const mySwiperButton = new Swiper(".mySwiper", {
    loop: true,
  });
  
  document.querySelector(".custom-prev").addEventListener("click", () => {
    mySwiperButton.slidePrev();
  });
  
  document.querySelector(".custom-next").addEventListener("click", () => {
    mySwiperButton.slideNext();
  });