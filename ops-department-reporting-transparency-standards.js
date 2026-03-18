// Fade-in on scroll
const rtFadeEls = document.querySelectorAll(".hor-fade");

const rtObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

rtFadeEls.forEach(el => rtObs.observe(el));

// Sidebar toggle
document.querySelector(".hor-sidebar-toggle").addEventListener("click", () => {
  document.querySelector(".hor-sidebar").classList.toggle("open");
});
