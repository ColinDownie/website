// Fade-in on scroll
const lfwFadeEls = document.querySelectorAll(".hor-fade");

const lfwObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

lfwFadeEls.forEach(el => lfwObs.observe(el));

// Sidebar toggle
const lfwToggle = document.querySelector(".hor-sidebar-toggle");
const lfwSidebar = document.querySelector(".hor-sidebar");

if (lfwToggle && lfwSidebar) {
  lfwToggle.addEventListener("click", () => {
    lfwSidebar.classList.toggle("open");
  });
}
