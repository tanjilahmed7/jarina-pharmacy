// DASHBOARD MENU
function dashboardFuncMenu() {
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