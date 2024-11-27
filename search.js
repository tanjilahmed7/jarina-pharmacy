let suggestedMedicines = [
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
  
    if (result.length > 0) {
      const resultItems = result.map((res) => {
        return `
          <div class="py-[6px] bg-[#FFFFFF] px-6  cursor-pointer hover:bg-[#F5F7FA] h-[62px] flex gap-[2px] flex-col rounded-lg">
            <h1 class="font-manrope font-bold text-base text-[#011575] leading-[25px] ">
              ${res.title}
            </h1>
            <p class="text-[#334C66] text-sm font-manrope font-medium leading-[22px]">
              ${res.subtitle}
            </p>
          </div>
        `;
      });
  
      resultBox.innerHTML = resultItems.join(""); 
    } else {
      resultBox.innerHTML = `
      <h1 class="text-sm text-[#011575] bg-[#FFFFFF] h-10 flex items-center px-6 rounded-lg font-manrope font-medium leading-[22px]">  Medications </h1> `;
    }
  }