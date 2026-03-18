// Fade-in on scroll
const lfsFadeEls = document.querySelectorAll(".hor-fade");

const lfsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

lfsFadeEls.forEach(el => lfsObs.observe(el));

// Sidebar toggle
const lfsToggle = document.querySelector(".hor-sidebar-toggle");
const lfsSidebar = document.querySelector(".hor-sidebar");

if (lfsToggle && lfsSidebar) {
  lfsToggle.addEventListener("click", () => {
    lfsSidebar.classList.toggle("open");
  });
}
