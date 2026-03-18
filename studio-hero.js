// Fade-in on scroll
const sthFadeEls = document.querySelectorAll(".hor-fade");

const sthObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sthFadeEls.forEach(el => sthObs.observe(el));

// Sidebar toggle
const sthToggle = document.querySelector(".hor-sidebar-toggle");
const sthSidebar = document.querySelector(".hor-sidebar");

if (sthToggle && sthSidebar) {
  sthToggle.addEventListener("click", () => {
    sthSidebar.classList.toggle("open");
  });
}
