document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("ross-intro");
  const translation = document.getElementById("intro-translation");
  const enterButton = document.getElementById("enter-button");
  const mainInterface = document.getElementById("main-interface");

  // PHASE 1 — show translation after runes stream
  setTimeout(() => {
    translation.style.opacity = 1;
    translation.textContent = "ROSS INTERFACE CONNECTION ESTABLISHED";
  }, 3500);

  // PHASE 2 — switch to LOADING…
  setTimeout(() => {
    translation.textContent = "LOADING…";
  }, 5500);

  // PHASE 3 — ready + enable ENTER
  setTimeout(() => {
    translation.textContent = "READY";
    enterButton.classList.add("enabled");
    enterButton.disabled = false;
  }, 8000);

  // ENTER → fade out intro, fade in interface
  enterButton.addEventListener("click", () => {
    if (!enterButton.classList.contains("enabled")) return;

    intro.classList.add("fade-out");

    setTimeout(() => {
      intro.style.display = "none";
      mainInterface.classList.add("active");
    }, 1400);
  });
});
