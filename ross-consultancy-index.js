// Fade-in on scroll
const rciFadeEls = document.querySelectorAll(".hor-fade");

const rciObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

rciFadeEls.forEach(el => rciObs.observe(el));

// Sidebar toggle
const rciToggle = document.querySelector(".hor-sidebar-toggle");
const rciSidebar = document.querySelector(".hor-sidebar");

if (rciToggle && rciSidebar) {
  rciToggle.addEventListener("click", () => {
    rciSidebar.classList.toggle("open");
  });
}
