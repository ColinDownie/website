// Fade-in on scroll
const fgfFadeEls = document.querySelectorAll(".hor-fade");

const fgfObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fgfFadeEls.forEach(el => fgfObs.observe(el));

// Sidebar toggle
const fgfToggle = document.querySelector(".hor-sidebar-toggle");
const fgfSidebar = document.querySelector(".hor-sidebar");

if (fgfToggle && fgfSidebar) {
  fgfToggle.addEventListener("click", () => {
    fgfSidebar.classList.toggle("open");
  });
}
