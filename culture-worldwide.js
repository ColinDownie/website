// Fade-in on scroll
const cwFadeEls = document.querySelectorAll(".hor-fade");

const cwObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

cwFadeEls.forEach(el => cwObs.observe(el));

// Sidebar toggle
const cwToggle = document.querySelector(".hor-sidebar-toggle");
const cwSidebar = document.querySelector(".hor-sidebar");

if (cwToggle && cwSidebar) {
  cwToggle.addEventListener("click", () => {
    cwSidebar.classList.toggle("open");
  });
}
