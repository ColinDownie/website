// Fade-in on scroll
const arFadeEls = document.querySelectorAll(".hor-fade");

const arObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

arFadeEls.forEach(el => arObs.observe(el));

// Sidebar toggle
document.querySelector(".hor-sidebar-toggle").addEventListener("click", () => {
  document.querySelector(".hor-sidebar").classList.toggle("open");
});
