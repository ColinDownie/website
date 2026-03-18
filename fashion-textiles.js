// Fade-in on scroll
const ftaFadeEls = document.querySelectorAll(".hor-fade");

const ftaObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

ftaFadeEls.forEach(el => ftaObs.observe(el));

// Sidebar toggle
const ftaToggle = document.querySelector(".hor-sidebar-toggle");
const ftaSidebar = document.querySelector(".hor-sidebar");

if (ftaToggle && ftaSidebar) {
  ftaToggle.addEventListener("click", () => {
    ftaSidebar.classList.toggle("open");
  });
}
