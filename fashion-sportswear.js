// Fade-in on scroll
const fspFadeEls = document.querySelectorAll(".hor-fade");

const fspObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fspFadeEls.forEach(el => fspObs.observe(el));

// Sidebar toggle
const fspToggle = document.querySelector(".hor-sidebar-toggle");
const fspSidebar = document.querySelector(".hor-sidebar");

if (fspToggle && fspSidebar) {
  fspToggle.addEventListener("click", () => {
    fspSidebar.classList.toggle("open");
  });
}
