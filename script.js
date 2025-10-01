// Show/Hide sections without changing any content
function showSection(sectionId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

// Keep the first visible section (Community already has class="active" in HTML)
document.addEventListener("DOMContentLoaded", () => {
  const active = document.querySelector("section.active") || document.querySelector("section");
  if (active) active.classList.add("active");
});
