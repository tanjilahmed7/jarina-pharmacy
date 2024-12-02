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
  
  searchInput.onkeyup = () => {
    let result = [];
    let input = searchInput.value.trim();
    if (input.length) {
      result = suggestedMedicines.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())|| 
      item.subtitle.toLowerCase().includes(input.toLowerCase())
      );
      console.log(result);
    }
  
    displaySearchResult(result);
  };
  
  
function displaySearchResult(result) {
    resultBox.innerHTML = "";
    const resultItems = result.map((res) => {
      return `
        <div class="py-[6px] bg-[#FFFFFF] cursor-pointer hover:bg-[#F5F7FA] h-[62px] flex gap-[2px] flex-col rounded-lg">
          <h1 class="font-manrope font-bold text-base text-[#011575] leading-[25px] pl-6 pt-[6px]">
            ${res.title}
          </h1>
          <p class="text-[#334C66] text-sm font-manrope font-medium leading-[22px] pl-6 ">
            ${res.subtitle}
          </p>
        </div>
      `;
    });

    resultBox.innerHTML = resultItems.join(""); 
  
   
  }