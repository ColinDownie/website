// Fade-in on scroll
const rccFadeEls = document.querySelectorAll(".hor-fade");

const rccObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

rccFadeEls.forEach(el => rccObs.observe(el));

// Sidebar toggle
const rccToggle = document.querySelector(".hor-sidebar-toggle");
const rccSidebar = document.querySelector(".hor-sidebar");

if (rccToggle && rccSidebar) {
  rccToggle.addEventListener("click", () => {
    rccSidebar.classList.toggle("open");
  });
}
