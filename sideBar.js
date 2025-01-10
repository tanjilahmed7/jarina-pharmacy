const sidebarLinks = document.querySelectorAll("#side-bar li a");
const currentPathSidebar = window.location.pathname; 

sidebarLinks.forEach((link) => {
  const linkPath = new URL(link.href, window.location.origin).pathname;

  if (linkPath === currentPathSidebar) {
    link.parentElement.classList.add("activeSidebar");
  }
});