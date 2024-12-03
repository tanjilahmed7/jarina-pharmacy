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
  breakpoints: {
    0: {
      slidesPerView: 1.5, 
      spaceBetween: 16,  
    },
    375: {
      slidesPerView: 1.5, 
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
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



function toggleFunc() {
  const nav = document.querySelector(".myNav");
  const openButton = document.getElementById("openMenuButton");
  const closeButton = document.getElementById("closeMenuButton");

  if (nav.style.width === "100%") {
    nav.style.width = "0";
    openButton.classList.remove("hidden");
    closeButton.classList.add("hidden");
  } else {
    nav.style.width = "100%";
    openButton.classList.add("hidden");
    closeButton.classList.remove("hidden");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const firstModal = document.getElementById("my_modal_3");
  const secondModal = document.getElementById("my_modal_2");
  const thirdModal = document.getElementById("my_modal_4");
  const loginLink = document.getElementById("loginAcc");
  const createLink = document.getElementById("createAcc");
  const forgetLink = document.getElementById("forgetPass")
  const back = document.getElementById("back");

  if (firstModal && secondModal && loginLink && createLink && forgetLink) {
    loginLink.addEventListener("click", () => {
      firstModal.close();
      secondModal.showModal(); 
    });

    createLink.addEventListener("click", () => {
      secondModal.close(); 
      firstModal.showModal();
    });
    forgetLink.addEventListener("click", ()=> {
      firstModal.close();
      secondModal.close();
      thirdModal.showModal();
    })
    back.addEventListener("click", () => {
      firstModal.close();
      thirdModal.close();
      secondModal.showModal();
    })
  } else {
    console.error(
      "Modal not found"
    );
  }
});
