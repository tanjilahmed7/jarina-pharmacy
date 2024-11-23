const mySwiperButton = new Swiper(".mySwiper", {
    loop: true,
    navigation: false, // Disable default navigation buttons
  });
  
  // Add event listeners for custom buttons
  document.querySelector(".custom-prev").addEventListener("click", () => {
    mySwiperButton.slidePrev();
  });
  
  document.querySelector(".custom-next").addEventListener("click", () => {
    mySwiperButton.slideNext();
  });