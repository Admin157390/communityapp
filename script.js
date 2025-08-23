// Toggle the hamburger menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Handle menu navigation
function showSection(section) {
  // Special case: if user clicks Members Information → open Google Drive link
  if (section === 'members') {
    window.open("https://drive.google.com/file/d/19_w8BPlMK5eQrgBAMMuT2ar_QJzqYb3G/view?usp=drivesdk", "_blank");
    return;
  }

  // Hide all sections
  const sections = document.querySelectorAll("main section");
  sections.forEach(sec => sec.style.display = "none");

  // Show selected section
  const selected = document.getElementById(section);
  if (selected) {
    selected.style.display = "block";
  }

  // Close menu after click
  document.getElementById("menu").classList.remove("active");
}
