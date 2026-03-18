// Fade-in on scroll
const lfhFadeEls = document.querySelectorAll(".hor-fade");

const lfhObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

lfhFadeEls.forEach(el => lfhObs.observe(el));

// Sidebar toggle
const lfhToggle = document.querySelector(".hor-sidebar-toggle");
const lfhSidebar = document.querySelector(".hor-sidebar");

if (lfhToggle && lfhSidebar) {
  lfhToggle.addEventListener("click", () => {
    lfhSidebar.classList.toggle("open");
  });
}
