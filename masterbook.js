// Fade-in on scroll
const mbFadeEls = document.querySelectorAll(".hor-fade");

const mbObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

mbFadeEls.forEach(el => mbObs.observe(el));

// Sidebar toggle
const mbToggle = document.querySelector(".mb-sidebar-toggle");
const mbSidebar = document.querySelector(".mb-sidebar");

if (mbToggle && mbSidebar) {
  mbToggle.addEventListener("click", () => {
    mbSidebar.classList.toggle("open");
  });
}
