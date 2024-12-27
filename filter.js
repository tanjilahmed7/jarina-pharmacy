// SEARCH BOX
document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.getElementById('filterButton');
    const searchBox = document.getElementById('searchBox');
  
    filterButton.addEventListener('click', (event) => {
      event.stopPropagation(); 
      searchBox.classList.toggle('hidden'); 
    });
  
    document.addEventListener('click', (event) => {
      if (!searchBox.contains(event.target) && event.target !== filterButton) {
        searchBox.classList.add('hidden'); 
      }
    });
  });