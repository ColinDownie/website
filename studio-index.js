// Fade-in on scroll
const stiFadeEls = document.querySelectorAll(".hor-fade");

const stiObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

stiFadeEls.forEach(el => stiObs.observe(el));

// Sidebar toggle
const stiToggle = document.querySelector(".hor-sidebar-toggle");
const stiSidebar = document.querySelector(".hor-sidebar");

if (stiToggle && stiSidebar) {
  stiToggle.addEventListener("click", () => {
    stiSidebar.classList.toggle("open");
  });
}
