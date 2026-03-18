// Fade-in on scroll
const rhmFadeEls = document.querySelectorAll(".hor-fade");

const rhmObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

rhmFadeEls.forEach(el => rhmObs.observe(el));

// Sidebar toggle
const rhmToggle = document.querySelector(".hor-sidebar-toggle");
const rhmSidebar = document.querySelector(".hor-sidebar");

if (rhmToggle && rhmSidebar) {
  rhmToggle.addEventListener("click", () => {
    rhmSidebar.classList.toggle("open");
  });
}
