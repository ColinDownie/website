// Fade-in on scroll
const rcFadeEls = document.querySelectorAll(".hor-fade");

const rcObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

rcFadeEls.forEach(el => rcObs.observe(el));

// Sidebar toggle
const rcToggle = document.querySelector(".hor-sidebar-toggle");
const rcSidebar = document.querySelector(".hor-sidebar");

if (rcToggle && rcSidebar) {
  rcToggle.addEventListener("click", () => {
    rcSidebar.classList.toggle("open");
  });
}
