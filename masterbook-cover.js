// Reveal opening spread
const enterBtn = document.querySelector(".mbc-enter");
const opening = document.querySelector(".mbc-opening");

enterBtn.addEventListener("click", () => {
  opening.style.display = "block";
  window.scrollTo({ top: opening.offsetTop, behavior: "smooth" });
});

// Fade-in on scroll
const fadeEls = document.querySelectorAll(".hor-fade");

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeEls.forEach(el => obs.observe(el));
