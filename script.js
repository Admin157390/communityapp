// Sidebar toggle
function openSidebar() {
  document.getElementById("sidebar").classList.add("active");
}
function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
}

// Show sections
function showSection(sectionId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  const selected = document.getElementById(sectionId);
  if (selected) selected.classList.add("active");
}
