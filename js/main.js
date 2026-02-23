/*!
 * TRAVRO — main.js
 * Phase 3: Minimal vanilla JS. No libraries. No build step.
 *
 * Sections:
 *   1. Header scroll behaviour
 *   2. Mobile nav toggle
 *   3. Smooth scroll
 *   4. Email form handling
 */

(function () {
  'use strict';


  /* ============================================================
     1. HEADER SCROLL BEHAVIOUR
     Adds .is-scrolled to .site-header after 50 px — CSS handles
     the transition to a solid background + border.
     Note: CSS class is "is-scrolled" (matches style.css).
     ============================================================ */

  var header = document.getElementById('site-header');

  function onScroll() {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }

  // Passive listener — never blocks rendering
  window.addEventListener('scroll', onScroll, { passive: true });

  // Run once on load in case the page opens mid-scroll (e.g. browser restore)
  onScroll();


  /* ============================================================
     2. MOBILE NAV TOGGLE
     Hamburger ↔ × animation via .is-active.
     Drawer open/close via .is-open on #mobile-nav.
     Manages aria-expanded + aria-label for screen readers.
     Closes on: link click, Escape key.
     ============================================================ */

  var navToggle = document.getElementById('nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  function openMobileNav() {
    mobileNav.classList.add('is-open');
    navToggle.classList.add('is-active');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Close navigation menu');
  }

  function closeMobileNav() {
    mobileNav.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open navigation menu');
  }

  if (navToggle && mobileNav) {

    navToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.contains('is-open');
      if (isOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });

    // Close when any drawer link is tapped
    mobileNav.querySelectorAll('.nav__mobile-link').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on Escape, return focus to toggle button
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
        closeMobileNav();
        navToggle.focus();
      }
    });

  }


  /* ============================================================
     3. SMOOTH SCROLL
     Intercepts clicks on all internal anchor links (#…).
     Closes the mobile nav first, then scrolls.
     Respects prefers-reduced-motion — uses instant jump if set.
     (CSS scroll-behavior: smooth handles keyboard / non-JS nav.)
     ============================================================ */

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');

      // Ignore bare "#" placeholders
      if (!href || href === '#') return;

      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      // Close mobile nav before scrolling (avoids layout shift)
      closeMobileNav();

      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth'
      });
    });
  });


  /* ============================================================
     4. EMAIL FORM HANDLING
     Prevents default submit, runs a lightweight format check,
     then shows the success message and hides the form inputs.
     No backend yet — Formspree endpoint to be wired in later
     (replace the fake fetch below with a real POST).
     ============================================================ */

  function isValidEmail(email) {
    // RFC-loose check: something @ something . something
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setupEmailForm(formId, successId) {
    var form       = document.getElementById(formId);
    var successMsg = document.getElementById(successId);

    if (!form || !successMsg) return;

    var emailInput = form.querySelector('input[type="email"]');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = emailInput ? emailInput.value.trim() : '';

      // --- Validation ---
      if (!email || !isValidEmail(email)) {
        if (emailInput) {
          // Highlight the field; CSS transition handles the colour change
          emailInput.focus();
          emailInput.style.borderColor = 'var(--color-accent)';
          emailInput.addEventListener('input', function clearError() {
            emailInput.style.borderColor = '';
            emailInput.removeEventListener('input', clearError);
          }, { once: true });
        }
        return;
      }

      // --- Success state ---
      // Hide the form row, reveal the confirmation line.
      // When Formspree (or similar) is connected, wrap this block
      // in the fetch().then() success callback instead.
      form.style.display = 'none';
      successMsg.classList.add('is-visible');

      // Reset so the form could be re-shown if needed
      form.reset();
    });
  }

  setupEmailForm('hero-form',   'hero-form-success');
  setupEmailForm('footer-form', 'footer-form-success');


}());
