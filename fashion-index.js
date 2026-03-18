// Fade-in on scroll
const fshFadeEls = document.querySelectorAll(".hor-fade");

const fshObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fshFadeEls.forEach(el => fshObs.observe(el));

// Sidebar toggle
const fshToggle = document.querySelector(".hor-sidebar-toggle");
const fshSidebar = document.querySelector(".hor-sidebar");

if (fshToggle && fshSidebar) {
  fshToggle.addEventListener("click", () => {
    fshSidebar.classList.toggle("open");
  });
}
