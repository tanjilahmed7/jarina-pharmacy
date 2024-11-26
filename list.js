console.log('riji')
let suggestedMedicines = [
    { title: "Amiloride HCl", subtitle: "Generic for Midamor" },
    { title: "Amiloride-Hydrochlorothiazide", subtitle: "Generic for Moduretic" },
    { title: "Amiloride HCl", subtitle: "Generic for Midamor" },
    { title: "Amiloride-Hydrochlorothiazide", subtitle: "Generic for Moduretic" },
  ];
  
  const searchInput = document.getElementById("medicine-search-box");
  
  searchInput.onkeyup = () => {
    let input = searchInput.value.trim();
    let result = [];
  
    if (input.length) {
      result = suggestedMedicines.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
      );
    }
  
    console.log(result); 
  };
  








