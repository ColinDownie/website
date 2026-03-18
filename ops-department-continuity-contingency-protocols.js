// Fade-in on scroll
const conFadeEls = document.querySelectorAll(".hor-fade");

const conObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

conFadeEls.forEach(el => conObs.observe(el));

// Sidebar toggle
document.querySelector(".hor-sidebar-toggle").addEventListener("click", () => {
  document.querySelector(".hor-sidebar").classList.toggle("open");
});
