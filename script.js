function showSection(id) {
  const sections = document.querySelectorAll('section');
  sections.forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Attempt to block screenshots (basic warning only)
function detectDevTools() {
  const threshold = 160;
  setInterval(() => {
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
      alert("Screenshotting or DevTools is not allowed!");
    }
  }, 1000);
}

function checkKeys(e) {
  if (e.key === "PrintScreen") {
    alert("Screenshot blocked.");
    navigator.clipboard.writeText('');
  }
}

// Run detection
detectDevTools();
