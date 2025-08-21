// Toggle sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Toggle Members submenu with animation
const submenuToggle = document.querySelector(".submenu-toggle");
const submenu = document.querySelector(".submenu");

submenuToggle.addEventListener("click", () => {
  submenu.classList.toggle("open");
});
