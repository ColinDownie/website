/* GLOBAL FONTS */
document.write(`
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
`);
/* PRELOADER */
document.write(`
  <div id="preloader">
    <div class="crest-pulse"></div>
  </div>
`);

/* Inject Header */
document.write(`
  <nav class="ross-nav">
    <div class="ross-nav-logo">
      <a href="index.html">ROSS HOUSE</a>
    </div>

    <ul class="ross-nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="site-map.html">Site Map</a></li>
      <li><a href="contact.html">Contact</a></li>

      <li class="dropdown">
        <a href="#">Divisions</a>
        <div class="dropdown-menu">
          <a href="visual.html">Visual Concepts</a>
          <a href="media.html">Media Concepts</a>
          <a href="marketing.html">Marketing Concepts</a>
          <a href="design.html">Design Concepts</a>
          <a href="clothing.html">Clothing Concepts</a>
          <a href="game.html">Game Concepts</a>
          <a href="story.html">Story Concepts</a>
          <a href="sound.html">Sound & Music</a>
          <a href="experience.html">Experience Concepts</a>
          <a href="future.html">Innovation & Futureform</a>
          <a href="mentoring.html">Mentoring</a>
          <a href="collab.html">Collaboration</a>
          <a href="education.html">Education Concepts</a>
          <a href="wellbeing.html">Wellbeing Concepts</a>
          <a href="vector.html">VECTOR</a>
          <a href="astra.html">ASTRA</a>
          <a href="nova.html">NOVA</a>
          <a href="guardian.html">Guardian Quadrant</a>
        </div>
      </li>
    </ul>
  </nav>
`);

/* Inject Footer */
document.write(`
  <footer class="ross-footer">
    <div class="footer-inner">

      <div class="footer-column">
        <h4>Ross House</h4>
        <p>A creative dynasty of lineage, mythology, and emotionally intelligent design.</p>
      </div>

      <div class="footer-column">
        <h4>Navigation</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="site-map.html">Site Map</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Divisions</h4>
        <ul>
          <li><a href="visual.html">Visual</a></li>
          <li><a href="media.html">Media</a></li>
          <li><a href="story.html">Story</a></li>
          <li><a href="sound.html">Sound</a></li>
          <li><a href="future.html">Futureform</a></li>
          <li><a href="guardian.html">Guardian</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Contact</h4>
        <p>Ross Consultancy</p>
        <p>30 Darley Street<br>Manchester, M32 8LJ</p>
        <p><a href="mailto:therossconsultancy@gmail.com">therossconsultancy@gmail.com</a></p>
      </div>

    </div>

    <div class="footer-bottom">
      <p>© Ross House — A Creative Dynasty</p>
    </div>
  </footer>
    </footer>
`);
/* PRELOADER LOGIC */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 600);
});

