// Fade-in on scroll
const deptFadeEls = document.querySelectorAll(".hor-fade");

const deptObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

deptFadeEls.forEach(el => deptObs.observe(el));
