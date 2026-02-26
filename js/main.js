/*!
 * TRAVRO — main.js
 * Editorial Cinematic Upgrade v3.0
 * GSAP + ScrollTrigger (loaded via CDN in HTML)
 *
 * Sections:
 *  1. Init & accessibility check
 *  2. Header pill scroll behavior
 *  3. Hero text stagger (GSAP)
 *  4. Editorial strip reveal
 *  5. Manifesto scroll reveal
 *  6. Generic [data-reveal] elements
 *  7. Sticky stacking product cards
 *  8. Mobile navigation
 *  9. Smooth scroll
 * 10. Email forms (Formspree)
 */

(function () {
  'use strict';

  /* --------------------------------------------------
     REPLACE THIS with your Formspree form ID
     Get one free at https://formspree.io
     -------------------------------------------------- */
  var FORM_ID = 'YOUR_FORMSPREE_ID';


  /* --------------------------------------------------
     1. INIT & ACCESSIBILITY CHECK
     -------------------------------------------------- */
  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  // Register GSAP ScrollTrigger plugin
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }


  /* --------------------------------------------------
     2. HEADER PILL — SCROLL STATE
     -------------------------------------------------- */
  var header = document.getElementById('header');

  function onScroll() {
    if (window.scrollY > 80) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load


  /* --------------------------------------------------
     3. HERO TEXT STAGGER
     Fade + translateY for eyebrow, heading lines, sub, form, badge
     -------------------------------------------------- */
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {

    // Set initial invisible state on all hero content children
    gsap.set([
      '.hero-eyebrow',
      '.hero-line',
      '.hero-sub',
      '.email-form',
      '.hero-badge',
    '.hero-secondary-cta'
    ], { opacity: 0, y: 28 });

    var heroTl = gsap.timeline({ delay: 0.25 });

    heroTl
      .to('.hero-eyebrow', {
        opacity: 1, y: 0,
        duration: 0.75,
        ease: 'power2.out'
      })
      .to('.hero-line', {
        opacity: 1, y: 0,
        duration: 0.85,
        stagger: 0.13,
        ease: 'power3.out'
      }, '-=0.45')
      .to('.hero-sub', {
        opacity: 1, y: 0,
        duration: 0.70,
        ease: 'power2.out'
      }, '-=0.45')
      .to('.email-form', {
        opacity: 1, y: 0,
        duration: 0.65,
        ease: 'power2.out'
      }, '-=0.40')
      .to('.hero-badge', {
        opacity: 1, y: 0,
        duration: 0.55,
        ease: 'power2.out'
      }, '-=0.35')
      .to('.hero-secondary-cta', {
        opacity: 0.85, y: 0,
        duration: 0.45,
        ease: 'power2.out'
      }, '-=0.25');
  }


  /* --------------------------------------------------
     4. EDITORIAL STRIP — CLIP-PATH WIPE IN
     Each item reveals left-to-right via clip-path inset
     -------------------------------------------------- */
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {

    var stripItems = document.querySelectorAll('.strip-item');
    if (stripItems.length) {
      gsap.set(stripItems, { clipPath: 'inset(0 100% 0 0)', opacity: 0 });

      ScrollTrigger.create({
        trigger: '.editorial-strip',
        start: 'top 85%',
        once: true,
        onEnter: function () {
          gsap.to(stripItems, {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 1.1,
            stagger: 0.09,
            ease: 'power4.out',
            onComplete: function () {
              stripItems.forEach(function (el) { el.style.clipPath = ''; });
            }
          });
        }
      });
    }
  }


  /* --------------------------------------------------
     5. MANIFESTO — CINEMATIC SCROLL REVEAL
     Kicker, large lines (split left/right), sub
     -------------------------------------------------- */
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {

    var manifesto = document.querySelector('.manifesto');

    if (manifesto) {
      gsap.set('.manifesto-kicker', { opacity: 0, y: 20 });
      gsap.set('.manifesto-large:not(.manifesto-large--offset)', { opacity: 0, x: -60 });
      gsap.set('.manifesto-large--offset', { opacity: 0, x: 60 });
      gsap.set('.manifesto-divider', { opacity: 0, scaleX: 0, transformOrigin: 'left center' });
      gsap.set('.manifesto-sub', { opacity: 0, y: 20 });

      var manifestoTl = gsap.timeline({
        scrollTrigger: {
          trigger: manifesto,
          start: 'top 65%',
          once: true
        }
      });

      manifestoTl
        .to('.manifesto-kicker', {
          opacity: 1, y: 0,
          duration: 0.6, ease: 'power2.out'
        })
        .to('.manifesto-large:not(.manifesto-large--offset)', {
          opacity: 1, x: 0,
          duration: 1.0, ease: 'power3.out'
        }, '-=0.2')
        .to('.manifesto-large--offset', {
          opacity: 0.38, x: 0,
          duration: 1.0, ease: 'power3.out'
        }, '-=0.8')
        .to('.manifesto-divider', {
          opacity: 1, scaleX: 1,
          duration: 0.8, ease: 'power2.inOut'
        }, '-=0.4')
        .to('.manifesto-sub', {
          opacity: 1, y: 0,
          duration: 0.7, ease: 'power2.out'
        }, '-=0.3');
    }
  }


  /* --------------------------------------------------
     6. GENERIC [data-reveal] SCROLL REVEALS
     Fade + translateY for any element with data-reveal attr
     -------------------------------------------------- */
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {

    var revealEls = document.querySelectorAll('[data-reveal]');

    revealEls.forEach(function (el) {
      gsap.set(el, { opacity: 0, y: 32 });

      ScrollTrigger.create({
        trigger: el,
        start: 'top 84%',
        once: true,
        onEnter: function () {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out'
          });
        }
      });
    });
  }


  /* --------------------------------------------------
     7. COMING SOON — PRODUCT CARD IMAGE WIPE
     Each card image reveals bottom-to-top via clip-path
     -------------------------------------------------- */
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {

    var cardImages = document.querySelectorAll('.product-card-media img');
    if (cardImages.length) {
      gsap.set(cardImages, { clipPath: 'inset(100% 0 0 0)' });

      ScrollTrigger.create({
        trigger: '.coming-soon-grid',
        start: 'top 80%',
        once: true,
        onEnter: function () {
          gsap.to(cardImages, {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.25,
            stagger: 0.12,
            ease: 'power4.out',
            onComplete: function () {
              cardImages.forEach(function (el) { el.style.clipPath = ''; });
            }
          });
        }
      });
    }
  }


  /* --------------------------------------------------
     8. STICKY STACKING PRODUCT CARDS
     Each card pins at top; previous card scales+fades as next enters
     -------------------------------------------------- */
  if (!prefersReducedMotion && typeof gsap !== 'undefined' && window.innerWidth > 768) {

    var stackCards = gsap.utils.toArray('.stack-card');

    stackCards.forEach(function (card, i) {

      // Pin each card at top of viewport
      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        pin: true,
        // Only add pin spacing for last card (to prevent extra scroll)
        pinSpacing: (i === stackCards.length - 1)
      });

      // When the NEXT card scrolls in, scale+fade the CURRENT one
      if (i < stackCards.length - 1) {
        var nextCard = stackCards[i + 1];

        ScrollTrigger.create({
          trigger: nextCard,
          start: 'top bottom',
          end: 'top top',
          scrub: 0.6,
          onUpdate: function (self) {
            var p = self.progress;
            gsap.set(card, {
              scale:   1 - (p * 0.05),
              opacity: 1 - (p * 0.38),
              filter:  'blur(' + (p * 7) + 'px)'
            });
          }
        });
      }
    });
  }


  /* --------------------------------------------------
     8. MOBILE NAVIGATION
     -------------------------------------------------- */
  var navToggle   = document.getElementById('nav-toggle');
  var mobileNav   = document.getElementById('mobile-nav');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openNav() {
    navToggle.classList.add('is-active');
    mobileNav.classList.add('is-open');
    mobileNav.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation menu');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    navToggle.classList.remove('is-active');
    mobileNav.classList.remove('is-open');
    mobileNav.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
    document.body.style.overflow = '';
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener('click', function () {
      if (mobileNav.classList.contains('is-open')) {
        closeNav();
      } else {
        openNav();
      }
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeNav();
        navToggle.focus();
      }
    });
  }


  /* --------------------------------------------------
     9. SMOOTH SCROLL FOR ANCHOR LINKS
     -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = anchor.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      closeNav();

      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
      });
    });
  });


  /* --------------------------------------------------
     10. EMAIL FORMS — FORMSPREE INTEGRATION
     -------------------------------------------------- */
  function setupForm(formId, successId) {
    var form    = document.getElementById(formId);
    var success = document.getElementById(successId);
    if (!form || !success) return;

    var errorEl = null;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Clear previous errors
      if (errorEl) { errorEl.remove(); errorEl = null; }
      var emailInput = form.querySelector('input[type="email"]');
      emailInput.style.borderColor = '';

      // Validate
      if (!emailRegex.test(emailInput.value.trim())) {
        errorEl = document.createElement('p');
        errorEl.textContent = 'Please enter a valid email address.';
        errorEl.style.cssText = 'font-size:0.75rem;color:rgba(245,242,238,0.75);margin-top:0.625rem;';
        form.insertAdjacentElement('afterend', errorEl);
        emailInput.style.borderColor = 'rgba(245, 242, 238, 0.55)';
        emailInput.setAttribute('aria-invalid', 'true');
        emailInput.focus();
        return;
      }

      emailInput.setAttribute('aria-invalid', 'false');

      // Loading state
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Sending\u2026';
      btn.disabled = true;

      // If no Formspree ID set, just show success (demo mode)
      if (FORM_ID === 'YOUR_FORMSPREE_ID') {
        setTimeout(function () {
          form.style.display = 'none';
          success.classList.add('is-visible');
        }, 600);
        return;
      }

      // Submit to Formspree
      fetch('https://formspree.io/f/' + FORM_ID, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            form.style.display = 'none';
            success.classList.add('is-visible');
          } else {
            throw new Error('Response not OK');
          }
        })
        .catch(function () {
          if (errorEl) errorEl.remove();
          errorEl = document.createElement('p');
          errorEl.textContent = 'Something went wrong. Please try again.';
          errorEl.style.cssText = 'font-size:0.75rem;color:rgba(245,242,238,0.75);margin-top:0.625rem;';
          form.insertAdjacentElement('afterend', errorEl);
          btn.textContent = originalText;
          btn.disabled = false;
        });
    });
  }

  setupForm('hero-form',   'hero-success');
  setupForm('footer-form', 'footer-success');


  /* --------------------------------------------------
     ACTIVE NAV — IntersectionObserver section tracking
     Highlights nav link for section currently in view
     -------------------------------------------------- */
  var navSections = document.querySelectorAll('section[id]');
  var navLinks    = document.querySelectorAll('.nav-link[href^="#"]');

  if (navSections.length && navLinks.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    navSections.forEach(function (section) { navObserver.observe(section); });
  }


  /* --------------------------------------------------
     CUSTOM CURSOR — copper dot (desktop / pointer: fine only)
     -------------------------------------------------- */
  var cursorDot = document.querySelector('.cursor-dot');

  if (cursorDot && window.matchMedia('(pointer: fine)').matches) {
    var cx = 0, cy = 0, raf = null;

    document.addEventListener('mousemove', function (e) {
      cx = e.clientX;
      cy = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(function () {
          cursorDot.style.left = cx + 'px';
          cursorDot.style.top  = cy + 'px';
          raf = null;
        });
      }
    });

    document.querySelectorAll('a, button, [role="button"]').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursorDot.classList.add('is-hovering'); });
      el.addEventListener('mouseleave', function () { cursorDot.classList.remove('is-hovering'); });
    });
  }


  /* --------------------------------------------------
     11. FAQ ACCORDION  (T1-C)
     Accessible accordion: aria-expanded + CSS max-height transition.
     Only one item open at a time.
     -------------------------------------------------- */
  var faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';
      var answerId   = btn.getAttribute('aria-controls');
      var answer     = document.getElementById(answerId);

      if (!answer) return;

      // Close all other items
      faqQuestions.forEach(function (otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          var otherId  = otherBtn.getAttribute('aria-controls');
          var otherAns = document.getElementById(otherId);
          if (otherAns) {
            otherAns.classList.remove('is-open');
            otherAns.setAttribute('aria-hidden', 'true');
          }
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', String(!isExpanded));
      answer.setAttribute('aria-hidden',  String(isExpanded));

      if (isExpanded) {
        answer.classList.remove('is-open');
      } else {
        answer.classList.add('is-open');
      }
    });
  });


  /* --------------------------------------------------
     12. THREE RULES — CLIP-PATH STAGGERED REVEAL  (T3-A)
     Each .rule card wipes left-to-right on scroll entry,
     staggered 0.14s. Rule numbers count up 0 → 01/02/03.
     -------------------------------------------------- */
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {

    var ruleCards = document.querySelectorAll('.rule');

    if (ruleCards.length) {
      gsap.set(ruleCards, { clipPath: 'inset(0 100% 0 0)', opacity: 0 });

      ScrollTrigger.create({
        trigger: '#rules',
        start: 'top 75%',
        once: true,
        onEnter: function () {
          gsap.to(ruleCards, {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            duration: 1.1,
            stagger: 0.14,
            ease: 'power4.out',
            onComplete: function () {
              ruleCards.forEach(function (el) { el.style.clipPath = ''; });
            }
          });

          // Animate rule number counters: 0 → 01, 02, 03
          ruleCards.forEach(function (card, i) {
            var numEl = card.querySelector('.rule-number');
            if (!numEl) return;

            var target  = i + 1;
            var counter = { val: 0 };
            setTimeout(function () {
              gsap.to(counter, {
                val: target,
                duration: 0.9,
                ease: 'power2.out',
                snap: { val: 1 },
                onUpdate: function () {
                  numEl.textContent = '0' + Math.round(counter.val);
                }
              });
            }, i * 140);
          });
        }
      });
    }
  }


  /* --------------------------------------------------
     13. PRICE COMPARISON BARS — SCALE REVEAL  (T1-A)
     CSS .is-animated class triggers scaleX(0→1) transition.
     Staggered by 150ms per row.
     -------------------------------------------------- */
  if (!prefersReducedMotion && typeof gsap !== 'undefined') {

    var compSection = document.querySelector('.comparison');
    var compBars    = document.querySelectorAll('.comparison-bar');

    if (compSection && compBars.length) {
      ScrollTrigger.create({
        trigger: compSection,
        start: 'top 70%',
        once: true,
        onEnter: function () {
          compBars.forEach(function (bar, i) {
            setTimeout(function () {
              bar.classList.add('is-animated');
            }, i * 150);
          });
        }
      });
    }
  }


  /* --------------------------------------------------
     14. PRODUCT "NOTIFY ME" FORMS  (T1-D)
     Per-card email form handlers — K07, LK001, K34.
     Reuses FORM_ID for Formspree; demo mode if not set.
     -------------------------------------------------- */
  var emailRegexNotify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  document.querySelectorAll('.product-notify-form').forEach(function (form) {
    // Use closest() to find successEl robustly — nextElementSibling would return .notify-note
    var successEl   = form.closest('.product-card-body').querySelector('.product-notify-success');
    var productName = form.getAttribute('data-product') || 'this product';

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var emailInput = form.querySelector('input[type="email"]');
      var btn        = form.querySelector('button[type="submit"]');

      // Validate
      if (!emailInput || !emailRegexNotify.test(emailInput.value.trim())) {
        emailInput.classList.add('input-invalid');
        emailInput.setAttribute('aria-invalid', 'true');
        emailInput.focus();
        setTimeout(function () {
          emailInput.classList.remove('input-invalid');
        }, 1800);
        return;
      }

      emailInput.setAttribute('aria-invalid', 'false');

      // Loading state
      var originalText = btn.textContent;
      btn.textContent  = '\u2026';
      btn.disabled     = true;

      // Success handler
      var doSuccess = function () {
        form.style.display = 'none';
        if (successEl && successEl.classList.contains('product-notify-success')) {
          successEl.textContent = "You\u2019re on the " + productName + " list.";
        }
      };

      // Demo mode (no Formspree ID)
      if (FORM_ID === 'YOUR_FORMSPREE_ID') {
        setTimeout(doSuccess, 500);
        return;
      }

      // Submit to Formspree
      var fd = new FormData(form);
      fd.append('product', productName);

      fetch('https://formspree.io/f/' + FORM_ID, {
        method: 'POST',
        body: fd,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (res) {
          if (res.ok) {
            doSuccess();
          } else {
            throw new Error('not ok');
          }
        })
        .catch(function () {
          btn.textContent = originalText;
          btn.disabled    = false;
        });
    });
  });

})();
