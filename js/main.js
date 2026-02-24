/*!
 * TRAVRO — main.js
 * Minimal vanilla JS. No libraries. No build step.
 *
 * Sections:
 *   1. Header scroll behaviour
 *   2. Mobile nav toggle
 *   3. Smooth scroll
 *   4. Email form handling (Formspree POST)
 */

(function () {
  'use strict';

  // ============================================================
  // Formspree endpoint — swap this ID once you create a free
  // account at formspree.io and connect the travro.com form.
  // ============================================================
  var FORMSPREE_ID = 'FORM_ID_HERE';


  /* ============================================================
     1. HEADER SCROLL BEHAVIOUR
     Adds .is-scrolled to .site-header after 50 px — CSS handles
     the transition to a solid background + border.
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

  window.addEventListener('scroll', onScroll, { passive: true });
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

    mobileNav.querySelectorAll('.nav__mobile-link').forEach(function (link) {
      link.addEventListener('click', closeMobileNav);
    });

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
     ============================================================ */

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href');
      if (!href || href === '#') return;

      var target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      closeMobileNav();

      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth'
      });
    });
  });


  /* ============================================================
     4. EMAIL FORM HANDLING — Formspree POST
     - Validates email format client-side first
     - Shows loading state while fetch is in flight
     - On 200: hides form, shows success message
     - On network/server error: shows inline error, re-enables
     ============================================================ */

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setupEmailForm(formId, successId) {
    var form       = document.getElementById(formId);
    var successMsg = document.getElementById(successId);

    if (!form || !successMsg) return;

    var emailInput  = form.querySelector('input[type="email"]');
    var submitBtn   = form.querySelector('button[type="submit"]');
    var originalBtnText = submitBtn ? submitBtn.textContent : 'Submit';

    // Inline error element — inserted once, reused
    var errorMsg = document.createElement('p');
    errorMsg.className = 'email-form__error';
    errorMsg.setAttribute('aria-live', 'polite');
    errorMsg.style.display = 'none';
    form.appendChild(errorMsg);

    function showError(msg) {
      errorMsg.textContent = msg;
      errorMsg.style.display = 'block';
    }

    function clearError() {
      errorMsg.style.display = 'none';
      errorMsg.textContent = '';
    }

    function setLoading(loading) {
      if (!submitBtn) return;
      submitBtn.disabled = loading;
      submitBtn.textContent = loading ? 'Sending\u2026' : originalBtnText;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearError();

      var email = emailInput ? emailInput.value.trim() : '';

      // Client-side validation
      if (!email || !isValidEmail(email)) {
        if (emailInput) {
          emailInput.focus();
          emailInput.style.borderColor = 'var(--color-accent)';
          emailInput.addEventListener('input', function clearBorder() {
            emailInput.style.borderColor = '';
            emailInput.removeEventListener('input', clearBorder);
          }, { once: true });
        }
        return;
      }

      // Build form data
      var data = new FormData();
      data.append('email', email);

      setLoading(true);

      fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            // Success — hide form, show confirmation
            form.style.display = 'none';
            successMsg.classList.add('is-visible');
            form.reset();
          } else {
            // Server returned an error
            return response.json().then(function (body) {
              var msg = (body && body.errors && body.errors[0] && body.errors[0].message)
                ? body.errors[0].message
                : 'Something went wrong. Please try again.';
              showError(msg);
              setLoading(false);
            });
          }
        })
        .catch(function () {
          showError('Something went wrong. Please try again.');
          setLoading(false);
        });
    });
  }

  setupEmailForm('hero-form',   'hero-form-success');
  setupEmailForm('footer-form', 'footer-form-success');


}());
