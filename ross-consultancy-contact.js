// Fade-in on scroll
const rctFadeEls = document.querySelectorAll(".hor-fade");

const rctObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

rctFadeEls.forEach(el => rctObs.observe(el));

// Sidebar toggle
const rctToggle = document.querySelector(".hor-sidebar-toggle");
const rctSidebar = document.querySelector(".hor-sidebar");

if (rctToggle && rctSidebar) {
  rctToggle.addEventListener("click", () => {
    rctSidebar.classList.toggle("open");
  });
}

// Front-end only feedback for the button
const rctSubmit = document.querySelector(".rct-submit");
const rctFeedback = document.querySelector(".rct-feedback");

if (rctSubmit && rctFeedback) {
  rctSubmit.addEventListener("click", () => {
    rctFeedback.textContent =
      "Threshold marked. Wire this form to your preferred backend or email when you’re ready.";
  });
}
