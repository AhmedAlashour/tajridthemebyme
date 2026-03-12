/* ================================================================
   COFFEE THEME JS — Salla SDK Integrated
   Import in app.js:  import './coffee-theme';
   ================================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── 1. Video Mute Toggle ── */
  var muteBtn = document.getElementById('muteBtn');
  var heroVideo = document.getElementById('heroVideo');
  var muteIcon = document.getElementById('muteIcon');
  if (muteBtn && heroVideo) {
    muteBtn.addEventListener('click', function () {
      heroVideo.muted = !heroVideo.muted;
      muteIcon.innerHTML = heroVideo.muted
        ? '<path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>'
        : '<path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 010 14.14"/><path d="M15.54 8.46a5 5 0 010 7.07"/>';
    });
  }

  /* ── 2. Scroll Animations ── */
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('cof-anim'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.cof-prod,.cof-tool,.cof-cat,.cof-test,.cof-feat__item,.cof-sec__head,.cof-sub__content,.cof-news__inner')
      .forEach(function (el) { obs.observe(el); });
  }

  /* ── 3. Header Transparent → Solid on Scroll ── */
  var hdr = document.querySelector('header');
  if (hdr) {
    var onScroll = function () {
      hdr.classList.toggle('cof-hdr-solid', window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── 4. Newsletter — Salla SDK ── */
  var newsBtn = document.getElementById('newsletterBtn');
  var newsEmail = document.getElementById('newsletterEmail');
  var newsOk = document.getElementById('newsletterSuccess');
  if (newsBtn && newsEmail) {
    var submit = function () {
      var email = newsEmail.value.trim();
      if (!email || !email.includes('@')) return;
      newsBtn.textContent = '...';
      newsBtn.disabled = true;
      if (typeof salla !== 'undefined' && salla.newsletter) {
        salla.newsletter.subscribe({ email: email })
          .then(function () { done(); })
          .catch(function () { done(); });
      } else { setTimeout(done, 500); }
      function done() {
        newsEmail.value = '';
        if (newsOk) newsOk.style.display = 'block';
        newsBtn.textContent = String.fromCharCode(10003);
      }
    };
    newsBtn.addEventListener('click', submit);
    newsEmail.addEventListener('keypress', function (e) { if (e.key === 'Enter') submit(); });
  }

  /* ── 5. Smooth Scroll for Anchors ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(this.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

});
