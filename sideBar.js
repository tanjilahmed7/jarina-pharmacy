const navLinks = document.querySelectorAll("#side-bar li a");
const currentPath = window.location.pathname; 

navLinks.forEach((link) => {
  const linkPath = new URL(link.href, window.location.origin).pathname;

  if (linkPath === currentPath) {
    link.parentElement.classList.add("activeSidebar");
  }
});