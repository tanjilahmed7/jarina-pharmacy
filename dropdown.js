document.addEventListener("click", function (event) {
    if (event.target.matches(".dropdown-arrow")) {
      const dropdownList = event.target.closest(".dropdown-container").querySelector(".dropdown-list");
      dropdownList.classList.toggle("hidden");
    } 
    else if (event.target.matches(".dropdown-option")) {
      const dropdownContainer = event.target.closest(".dropdown-container");
      const selectedOption = dropdownContainer.querySelector(".selected-option");
      const dropdownList = dropdownContainer.querySelector(".dropdown-list");
      const hiddenSelect = dropdownContainer.querySelector("select");
  
      const value = event.target.getAttribute("data-value");
      selectedOption.textContent = value.charAt(0).toUpperCase() + value.slice(1);
      dropdownList.classList.add("hidden");
      hiddenSelect.value = value;
    } 
    else {
      document.querySelectorAll(".dropdown-list").forEach((dropdown) => {
        dropdown.classList.add("hidden");
      });
    }
  });
  