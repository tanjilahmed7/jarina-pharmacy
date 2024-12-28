document.addEventListener("DOMContentLoaded", () => {
    const filterButton = document.getElementById("notiButton");
    const searchBox = document.getElementById("notiBox");
  
    filterButton.addEventListener("click", (event) => {
      event.stopPropagation();
      searchBox.classList.toggle("hidden");
    });
  
    document.addEventListener("click", (event) => {
      if (!searchBox.contains(event.target) && event.target !== filterButton) {
        searchBox.classList.add("hidden");
      }
    });
  });

  // // Inventory Dropdown 

// ACTIVE SIDE BAR 
const navLinks = document.querySelectorAll("ul > li > a");

const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  if (link.getAttribute("href") === `.${currentPath}`) {
    link.parentElement.classList.add("bg-[#1955B2]");
  } else {
    link.parentElement.classList.remove("bg-[#1955B2]");
  }
});