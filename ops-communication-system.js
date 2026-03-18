// Fade-in on scroll
const commFadeEls = document.querySelectorAll(".hor-fade");

const commObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

commFadeEls.forEach(el => commObs.observe(el));

// Sidebar toggle
document.querySelector(".hor-sidebar-toggle").addEventListener("click", () => {
  document.querySelector(".hor-sidebar").classList.toggle("open");
});
