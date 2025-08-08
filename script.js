function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Screenshot block
document.addEventListener("keydown", function (e) {
  if (e.key === "PrintScreen") {
    e.preventDefault();
    alert("Screenshot is disabled.");
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText('');
  }
});
