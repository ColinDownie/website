// Fade-in on scroll
const fgaFadeEls = document.querySelectorAll(".hor-fade");

const fgaObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fgaFadeEls.forEach(el => fgaObs.observe(el));

// Sidebar toggle
const fgaToggle = document.querySelector(".hor-sidebar-toggle");
const fgaSidebar = document.querySelector(".hor-sidebar");

if (fgaToggle && fgaSidebar) {
  fgaToggle.addEventListener("click", () => {
    fgaSidebar.classList.toggle("open");
  });
}
