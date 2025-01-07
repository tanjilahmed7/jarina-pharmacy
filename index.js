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
  const dropdown = document.getElementById("helpDropdown");

  if (dropdown.classList.contains("hidden")) {
    dropdown.classList.remove("hidden");
  } else {
    dropdown.classList.add("hidden");
  }
  document.addEventListener("click", function handleClickOutside(event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.add("hidden");
      document.removeEventListener("click", handleClickOutside);
    }
  });
}
// ACTIVE NAVBAR 
const navLinks = document.querySelectorAll("#nav-list li a");
const currentPath = window.location.pathname; 

navLinks.forEach((link) => {
  const linkPath = new URL(link.href, window.location.origin).pathname;

  if (linkPath === currentPath) {
    link.parentElement.classList.add("active");
  }
});




function toggleAccordionContent() {
  const content = document.getElementById("accordion-content");
  content.classList.toggle("hidden");
}