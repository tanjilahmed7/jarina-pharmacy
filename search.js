



 


document.addEventListener("DOMContentLoaded", () => {
  
  let suggestedMedicines = [
    { title: "Amiloride HCl", subtitle: "Generic for Midamor" },
    { title: "Amiloride-Hydrochlorothiazide", subtitle: "Generic for Moduretic" },
    { title: "Amiloride HCl", subtitle: "Generic for Midamor" },
    { title: "Amiloride-Hydrochlorothiazide", subtitle: "Generic for Moduretic" },
    { title: "Amiloride HCl", subtitle: "Generic for Midamor" },
    { title: "Amiloride-Hydrochlorothiazide", subtitle: "Generic for Moduretic" },
    { title: "Amiloride HCl", subtitle: "Generic for Midamor" },
    { title: "Amiloride-Hydrochlorothiazide", subtitle: "Generic for Moduretic" },
  ];

  const searchInput = document.getElementById("medicine-search-box");
  const resultBox = document.querySelector(".result");

  if (!searchInput || !resultBox) {
    console.error("Search input or result container not found.");
    return;
  }

  searchInput.onkeyup = () => {
    const input = searchInput.value.trim();
    const result = input.length
      ? suggestedMedicines.filter(
          (item) =>
            item.title.toLowerCase().includes(input.toLowerCase()) ||
            item.subtitle.toLowerCase().includes(input.toLowerCase())
        )
      : [];

    displaySearchResult(result);
  };

  function displaySearchResult(result) {
    resultBox.innerHTML = ""; 
    if (!result.length) {
      resultBox.innerHTML =
        '<div class="py-2 text-center text-gray-500">No results found</div>';
      return;
    }

    const resultItems = result.map(
      (res) => `
      <div class="py-[6px] bg-[#FFFFFF] cursor-pointer hover:bg-[#F5F7FA] h-[62px] flex gap-[2px] flex-col rounded-lg">
        <h1 class="font-manrope font-bold text-base text-[#011575] leading-[25px] pl-6 pt-[6px]">
          ${res.title}
        </h1>
        <p class="text-[#334C66] text-sm font-manrope font-medium leading-[22px] pl-6">
          ${res.subtitle}
        </p>
      </div>
    `
    );

    resultBox.innerHTML = resultItems.join("");
  }
});
