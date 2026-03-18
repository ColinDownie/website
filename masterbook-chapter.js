// Fade-in on scroll
const mbcFadeEls = document.querySelectorAll(".hor-fade");

const mbcObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

mbcFadeEls.forEach(el => mbcObs.observe(el));

// Sidebar toggle
const mbcToggle = document.querySelector(".mbc-sidebar-toggle");
const mbcSidebar = document.querySelector(".mbc-sidebar");

if (mbcToggle && mbcSidebar) {
  mbcToggle.addEventListener("click", () => {
    mbcSidebar.classList.toggle("open");
  });
}
