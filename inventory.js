// Inventory Action 

document.addEventListener("DOMContentLoaded", () => {
  const actionButton = document.getElementById("actionBtn");
  const actionBox = document.getElementById("actionDiv");

  actionButton.addEventListener("click", (event) => {
    event.stopPropagation();
    actionBox.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (!actionBox.contains(event.target) && event.target !== actionButton) {
      actionBox.classList.add("hidden");
    }
  });
});