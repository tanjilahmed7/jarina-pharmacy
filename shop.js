function toggleFuncMenuShop() {
  console.log("rijvi");
  const sidebar = document.getElementById("categorySidebar");
  const openButton = document.getElementById("openShopMenuButton");

  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
  } else {
    sidebar.classList.add("hidden");
  }
}

document.querySelectorAll(".shopFilter").forEach((filterContainer) => {
    const rangeInput = filterContainer.querySelectorAll(".range-input input");
    const priceInput = filterContainer.querySelectorAll(".price-input input");
    const range = filterContainer.querySelector(".slider-range .progress");
    const priceGap = 1000;
  
    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        const minPrice = parseInt(priceInput[0].value);
        const maxPrice = parseInt(priceInput[1].value);
  
        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.classList.contains("input-min")) {
            rangeInput[0].value = minPrice;
            range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
          }
        }
      });
    });
  
    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        const minVal = parseInt(rangeInput[0].value);
        const maxVal = parseInt(rangeInput[1].value);
  
        if (maxVal - minVal < priceGap) {
          if (e.target.classList.contains("range-min")) {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
          range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
      });
    });
  });
  
