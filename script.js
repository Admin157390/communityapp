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
/* =========================
   🎆 Diwali Fireworks Script
   ========================= */
const today = new Date();
const isDiwali = (today.getDate() === 30 && today.getMonth() === 9 && today.getFullYear() === 2025); 
// 30 Oct 2025 → month is 9 because JS months are 0-indexed

if (isDiwali) {
  const overlay = document.getElementById("diwali-overlay");
  if (overlay) overlay.classList.remove("hidden");

  const canvas = document.getElementById("fireworks");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const particles = [];
    function random(min, max) { return Math.random() * (max - min) + min; }

    class Particle {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.color = color;
        this.speedX = random(-5, 5);
        this.speedY = random(-7, -2);
        this.alpha = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += 0.1;
        this.alpha -= 0.02;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function createFirework() {
      const x = random(100, canvas.width - 100);
      const y = random(100, canvas.height / 2);
      const colors = ["red", "gold", "orange", "white", "purple", "blue"];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle(x, y, colors[Math.floor(Math.random() * colors.length)]));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.alpha <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(animate);
    }

    setInterval(createFirework, 600);
    animate();

    // Auto remove overlay after show
    setTimeout(() => {
      if (overlay) overlay.remove();
    }, 6000);
  }
} else {
  // Hide overlay on non-Diwali days
  const overlay = document.getElementById("diwali-overlay");
  if (overlay) overlay.classList.add("hidden");
      }
