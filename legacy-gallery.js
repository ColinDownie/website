// Fade-in on scroll
const sgFadeEls = document.querySelectorAll(".hor-fade");

const sgObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

sgFadeEls.forEach(el => sgObs.observe(el));

// Sidebar toggle
const sgToggle = document.querySelector(".hor-sidebar-toggle");
const sgSidebar = document.querySelector(".hor-sidebar");

if (sgToggle && sgSidebar) {
  sgToggle.addEventListener("click", () => {
    sgSidebar.classList.toggle("open");
  });
}
