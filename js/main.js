/* ==========================================================================
   Banrendi — Main JavaScript
   ========================================================================== */

(function () {
  'use strict';

  // ---- Navigation scroll behavior ----
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('nav-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  function handleNavScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ---- Mobile menu toggle ----
  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');

      if (mobileMenu.classList.contains('active')) {
        mobileMenu.style.display = 'block';
        // Trigger reflow for animation
        mobileMenu.offsetHeight;
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
        setTimeout(function () {
          if (!mobileMenu.classList.contains('active')) {
            mobileMenu.style.display = 'none';
          }
        }, 250);
      }
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(function () {
          mobileMenu.style.display = 'none';
        }, 250);
      });
    });
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = nav ? nav.offsetHeight : 0;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ---- Scroll-triggered fade-in animations ----
  function initScrollAnimations() {
    // Add fade-in class to animatable elements
    var selectors = [
      '.problem-card',
      '.solution-feature-content',
      '.solution-feature-visual',
      '.step-card',
      '.market-stat-card',
      '.bilingual-content',
      '.value-card',
      '.cta-content',
      '.section-header'
    ];

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el, index) {
        el.classList.add('fade-in');
        // Stagger children within grids
        if (index < 4) {
          el.classList.add('fade-in-delay-' + (index + 1));
        }
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- Bilingual toggle demo ----
  function initBilingualToggle() {
    var langSwitch = document.querySelector('.lang-switch');
    var langOptions = document.querySelectorAll('.lang-option');
    var knob = document.querySelector('.lang-switch-knob');

    if (langSwitch && langOptions.length === 2) {
      var isSpanish = false;

      langSwitch.addEventListener('click', function () {
        isSpanish = !isSpanish;

        if (isSpanish) {
          knob.style.transform = 'translateX(20px)';
          langOptions[0].classList.remove('lang-active');
          langOptions[1].classList.add('lang-active');
        } else {
          knob.style.transform = 'translateX(0)';
          langOptions[1].classList.remove('lang-active');
          langOptions[0].classList.add('lang-active');
        }
      });
    }
  }

  // ---- Animated stat counters ----
  function initStatCounters() {
    var stats = document.querySelectorAll('.hero-stat-value, .market-stat-number');

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateStat(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    stats.forEach(function (stat) {
      observer.observe(stat);
    });
  }

  function animateStat(el) {
    var text = el.textContent.trim();

    // Parse the value
    var prefix = '';
    var suffix = '';
    var value = 0;

    if (text.startsWith('$')) {
      prefix = '$';
      text = text.substring(1);
    }
    if (text.startsWith('#')) {
      // Don't animate rank numbers
      return;
    }
    if (text.endsWith('B')) {
      suffix = 'B';
      value = parseFloat(text);
    } else if (text.endsWith('M+')) {
      suffix = 'M+';
      value = parseFloat(text);
    } else if (text.endsWith('%')) {
      suffix = '%';
      value = parseFloat(text);
    } else if (text.endsWith('x')) {
      suffix = 'x';
      value = parseFloat(text);
    } else {
      return; // Don't animate unknown formats
    }

    if (isNaN(value)) return;

    var duration = 1200;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = value * eased;

      // Format based on the suffix
      if (suffix === 'B' || suffix === 'M+') {
        el.textContent = prefix + Math.round(current) + suffix;
      } else if (suffix === '%') {
        el.textContent = Math.round(current) + suffix;
      } else if (suffix === 'x') {
        el.textContent = Math.round(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // ---- Waitlist form ----
  function initWaitlistForm() {
    var form = document.getElementById('waitlist-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('.btn');
      var originalText = btn.textContent;

      btn.textContent = 'Thank you!';
      btn.style.background = '#2CA58D';
      btn.disabled = true;

      setTimeout(function () {
        form.reset();
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    });
  }

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function () {
    initScrollAnimations();
    initBilingualToggle();
    initStatCounters();
    initWaitlistForm();
  });
})();
