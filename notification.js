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


