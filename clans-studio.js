// Fade-in on scroll
const clsFadeEls = document.querySelectorAll(".hor-fade");

const clsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

clsFadeEls.forEach(el => clsObs.observe(el));

// Sidebar toggle
const clsToggle = document.querySelector(".hor-sidebar-toggle");
const clsSidebar = document.querySelector(".hor-sidebar");

if (clsToggle && clsSidebar) {
  clsToggle.addEventListener("click", () => {
    clsSidebar.classList.toggle("open");
  });
}
