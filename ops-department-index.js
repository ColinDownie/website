// Fade-in on scroll
const deptIndexFadeEls = document.querySelectorAll(".hor-fade");

const deptIndexObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

deptIndexFadeEls.forEach(el => deptIndexObs.observe(el));

// Sidebar toggle
document.querySelector(".hor-sidebar-toggle").addEventListener("click", () => {
  document.querySelector(".hor-sidebar").classList.toggle("open");
});
