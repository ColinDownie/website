// Fade-in on scroll
const lemFadeEls = document.querySelectorAll(".hor-fade");

const lemObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

lemFadeEls.forEach(el => lemObs.observe(el));

// Sidebar toggle
const lemToggle = document.querySelector(".hor-sidebar-toggle");
const lemSidebar = document.querySelector(".hor-sidebar");

if (lemToggle && lemSidebar) {
  lemToggle.addEventListener("click", () => {
    lemSidebar.classList.toggle("open");
  });
}
