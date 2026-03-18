// Fade-in on scroll
const lfoFadeEls = document.querySelectorAll(".hor-fade");

const lfoObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

lfoFadeEls.forEach(el => lfoObs.observe(el));

// Sidebar toggle
const lfoToggle = document.querySelector(".hor-sidebar-toggle");
const lfoSidebar = document.querySelector(".hor-sidebar");

if (lfoToggle && lfoSidebar) {
  lfoToggle.addEventListener("click", () => {
    lfoSidebar.classList.toggle("open");
  });
}
