function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function notAvailable() {
  alert("❌ This subject is not available yet.");
}

// Screenshot prevention (best effort)
document.addEventListener("keydown", function (e) {
  if (e.key === "PrintScreen") {
    alert("❌ Screenshot is disabled for this app.");
    e.preventDefault();
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key === "PrintScreen") {
    navigator.clipboard.writeText("");
  }
});
