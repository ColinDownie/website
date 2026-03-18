// Fade-in on scroll
const rcsFadeEls = document.querySelectorAll(".hor-fade");

const rcsObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

rcsFadeEls.forEach(el => rcsObs.observe(el));

// Sidebar toggle
const rcsToggle = document.querySelector(".hor-sidebar-toggle");
const rcsSidebar = document.querySelector(".hor-sidebar");

if (rcsToggle && rcsSidebar) {
  rcsToggle.addEventListener("click", () => {
    rcsSidebar.classList.toggle("open");
  });
}
