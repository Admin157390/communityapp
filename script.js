// 🔹 Function to show and hide sections
function showSection(sectionId) {
  // Remove "active" from all sections
  document.querySelectorAll("section").forEach(sec => {
    sec.classList.remove("active");
  });

  // Add "active" to selected section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add("active");
  }
}

// 🔹 Music Control
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("diwali-music");
  const btn = document.getElementById("music-btn");

  if (!audio) return;

  audio.volume = 0.7;

  // Try autoplay
  audio.play().catch(() => {
    console.log("Autoplay blocked - waiting for tap");
  });

  // Enable after first user interaction
  function startMusic() {
    if (audio.paused) {
      audio.play().catch(err => console.log("Music start error:", err));
    }
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
  }

  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic);

  // 🎵Button toggle
  if (btn) {
    btn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play().then(() => {
          btn.textContent = "🔇 Stop Music";
        }).catch(err => console.log(err));
      } else {
        audio.pause();
        btn.textContent = "🔊 Play Music";
      }
    });
  }
});
