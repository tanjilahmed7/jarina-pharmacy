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




// MENU
function toggleFuncMenu() {
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


function toggleDropdown(event) {
  event.stopPropagation(); 
  const dropdown = document.getElementById('helpDropdown');

  if (dropdown.classList.contains('hidden')) {
    dropdown.classList.remove('hidden');
  } else {
    dropdown.classList.add('hidden');
  }
  document.addEventListener('click', function handleClickOutside(event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.add('hidden');
      document.removeEventListener('click', handleClickOutside);
    }
  });
}










