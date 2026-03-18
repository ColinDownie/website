// Fade-in on scroll
const fhhFadeEls = document.querySelectorAll(".hor-fade");

const fhhObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fhhFadeEls.forEach(el => fhhObs.observe(el));

// Sidebar toggle
const fhhToggle = document.querySelector(".hor-sidebar-toggle");
const fhhSidebar = document.querySelector(".hor-sidebar");

if (fhhToggle && fhhSidebar) {
  fhhToggle.addEventListener("click", () => {
    fhhSidebar.classList.toggle("open");
  });
}
