// Fade-in on scroll
const rcpFadeEls = document.querySelectorAll(".hor-fade");

const rcpObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

rcpFadeEls.forEach(el => rcpObs.observe(el));

// Sidebar toggle
const rcpToggle = document.querySelector(".hor-sidebar-toggle");
const rcpSidebar = document.querySelector(".hor-sidebar");

if (rcpToggle && rcpSidebar) {
  rcpToggle.addEventListener("click", () => {
    rcpSidebar.classList.toggle("open");
  });
}
