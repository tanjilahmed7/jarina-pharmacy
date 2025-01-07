// function toggleDropdown() {
//   const dropdownList = document.getElementById("dropdownList");
//   dropdownList.classList.toggle("hidden");
// }

// function selectOption(value) {
//   const selectElement = document.getElementById("countrySelect");
//   const selectedOption = document.getElementById("selectedOption");
//   const dropdownList = document.getElementById("dropdownList");

//   selectedOption.textContent = value.charAt(0).toUpperCase() + value.slice(1);

//   dropdownList.classList.add("hidden");

//   selectElement.value = value;
// }

// document.addEventListener("click", function (event) {
//   const dropdownList = document.getElementById("dropdownList");
//   const customDropdown = document.getElementById("customDropdown");
//   const customArrow = document.getElementById("customArrow");

//   if (
//     !customDropdown.contains(event.target) &&
//     !customArrow.contains(event.target)
//   ) {
//     dropdownList.classList.add("hidden");
//   }
// });


document.addEventListener("click", function (event) {
    // Toggle dropdown when clicking the arrow
    if (event.target.matches(".dropdown-arrow")) {
      const dropdownList = event.target.closest(".dropdown-container").querySelector(".dropdown-list");
      dropdownList.classList.toggle("hidden");
    } 
    // Select an option
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
    // Close dropdown when clicking outside
    else {
      document.querySelectorAll(".dropdown-list").forEach((dropdown) => {
        dropdown.classList.add("hidden");
      });
    }
  });
  