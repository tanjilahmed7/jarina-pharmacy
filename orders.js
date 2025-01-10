function statusDropdown(event) {
    event.stopPropagation();
    const dropdown = document.getElementById("orderDropdown");
  
    if (dropdown.classList.contains("hidden")) {
      dropdown.classList.remove("hidden");
    } else {
      dropdown.classList.add("hidden");
    }
    document.addEventListener("click", function handleClickOutside(event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.add("hidden");
        document.removeEventListener("click", handleClickOutside);
      }
    });
  }


// Email 

const ordersemailLinks = document.querySelectorAll(".email-link");
ordersemailLinks.forEach((emailLink) => {
  emailLink.addEventListener("click", (event) => {
    const email = event.target.textContent.trim(); 
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink, "_blank");
  });
});

