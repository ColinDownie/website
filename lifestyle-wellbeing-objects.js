// Fade-in on scroll
const lwboFadeEls = document.querySelectorAll(".hor-fade");

const lwboObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

lwboFadeEls.forEach(el => lwboObs.observe(el));

// Sidebar toggle
const lwboToggle = document.querySelector(".hor-sidebar-toggle");
const lwboSidebar = document.querySelector(".hor-sidebar");

if (lwboToggle && lwboSidebar) {
  lwboToggle.addEventListener("click", () => {
    lwboSidebar.classList.toggle("open");
  });
}
