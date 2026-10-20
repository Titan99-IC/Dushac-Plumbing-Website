/* Dushac Plumbing – essential interactivity (vanilla JS) */
(function () {
  'use strict';

  var MOBILE_QUERY = '(max-width: 767px)';
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.primary-nav');

  function setMenu(open) {
    if (toggle) {
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    }
    if (nav) {
      nav.classList.toggle('is-open', open);
    }
  }

  // 1. Hamburger menu toggle
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      setMenu(!isOpen);
    });

    // 2. Close menu when a navigation link is clicked (mobile only)
    nav.addEventListener('click', function (event) {
      var link = event.target.closest ? event.target.closest('a') : null;
      if (!link || !nav.contains(link)) return;
      if (window.matchMedia && window.matchMedia(MOBILE_QUERY).matches) {
        setMenu(false);
      }
    });
  }

  // 3. Smooth scroll to #contact-cta for Request a Quote buttons
  var quoteLinks = document.querySelectorAll('[data-scroll-to], a[href="#contact-cta"]');
  Array.prototype.forEach.call(quoteLinks, function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('data-scroll-to') || 'contact-cta';
      var target = document.getElementById(targetId);
      if (!target) return;
      event.preventDefault();
      var reduceMotion = window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      if (history.replaceState) {
        history.replaceState(null, '', '#' + targetId);
      }
      var field = target.querySelector('input, select, textarea');
      if (field && typeof field.focus === 'function') {
        field.focus({ preventScroll: true });
      }
    });
  });

  // 4. Form validation: name, email, phone must not be empty
  var form = document.querySelector('.quote-form');
  if (form) {
    form.addEventListener('submit', function (event) {
      var required = [
        { id: 'name', label: 'Name' },
        { id: 'email', label: 'Email' },
        { id: 'phone', label: 'Phone' }
      ];
      var missing = [];
      required.forEach(function (item) {
        var input = document.getElementById(item.id);
        if (!input || input.value.trim() === '') {
          missing.push(item.label);
        }
      });
      if (missing.length > 0) {
        event.preventDefault();
        var firstId = required.filter(function (item) {
          return missing.indexOf(item.label) !== -1;
        })[0].id;
        window.alert('Please fill in: ' + missing.join(', ') + '.');
        document.getElementById(firstId).focus();
      }
    });
  }
})();
