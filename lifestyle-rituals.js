// Fade-in on scroll
const lfrFadeEls = document.querySelectorAll(".hor-fade");

const lfrObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

lfrFadeEls.forEach(el => lfrObs.observe(el));

// Sidebar toggle
const lfrToggle = document.querySelector(".hor-sidebar-toggle");
const lfrSidebar = document.querySelector(".hor-sidebar");

if (lfrToggle && lfrSidebar) {
  lfrToggle.addEventListener("click", () => {
    lfrSidebar.classList.toggle("open");
  });
}
