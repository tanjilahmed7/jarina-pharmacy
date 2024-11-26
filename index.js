// SLIDER ONE
var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".custom-next-one",
    prevEl: ".custom-prev-one",
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
var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".custom2-next-one",
    prevEl: ".custom2-prev-one",
  },
});
// SLIDER THREE
var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 4,
  spaceBetween: 16,
  loop: true,
  navigation: {
    nextEl: ".custom3-next-one",
    prevEl: ".custom3-prev-one",
  },
});

// TAB CONTENT 
const tabButton = document.querySelectorAll(".tab_btn");
const tabContent = document.querySelectorAll(".content");

tabButton.forEach((tab, idx) => {
  tab.addEventListener("click", () => {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
      btn.classList.replace("bg-[#FFE680]", "bg-[#E6E6E6]");
      btn.classList.replace("font-bold", "font-medium");
    });

    tab.classList.add("active");
    tab.classList.replace("bg-[#E6E6E6]", "bg-[#FFE680]");
    tab.classList.replace("font-medium", "font-bold");

    tabContent.forEach((content) => {
      content.classList.remove("active");
      content.classList.add("hidden");
    });

    tabContent[idx].classList.add("active");
    tabContent[idx].classList.remove("hidden");
  });
});
