/**
 * Template Name: Instant
 * Updated: Jul 07 2025
 */

(function () {
  "use strict";

  /* ==========================
     SCROLL HEADER
  ========================== */
  function toggleScrolled() {
    const body = document.body;
    const header = document.querySelector("#header");
    if (!header) return;

    if (!header.classList.contains("scroll-up-sticky") && !header.classList.contains("sticky-top") && !header.classList.contains("fixed-top")) return;

    body.classList.toggle("scrolled", window.scrollY > 100);
  }

  window.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /* ==========================
     MOBILE NAV
  ========================== */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToggle() {
    document.body.classList.toggle("mobile-nav-active");
    if (!mobileNavToggleBtn) return;
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener("click", mobileNavToggle);
  }

  document.querySelectorAll("#navmenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (document.body.classList.contains("mobile-nav-active")) {
        mobileNavToggle();
      }
    });
  });

  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      const dropdown = this.parentNode.nextElementSibling;
      if (dropdown) dropdown.classList.toggle("dropdown-active");
      e.stopPropagation();
    });
  });

  /* ==========================
     SCROLL TOP
  ========================== */
  const scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (!scrollTop) return;
    scrollTop.classList.toggle("active", window.scrollY > 100);
  }

  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("load", toggleScrollTop);
  window.addEventListener("scroll", toggleScrollTop);

  /* ==========================
     AOS
  ========================== */
  window.addEventListener("load", () => {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 600,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    }
  });

  /* ==========================
     GLIGHTBOX
  ========================== */
  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".glightbox" });
  }

  /* ==========================
     PURE COUNTER
  ========================== */
  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

  /* ==========================
     TYPED.JS (INI YANG SERING MATI)
  ========================== */
  const typedEl = document.querySelector(".typed");
  if (typedEl && typeof Typed !== "undefined") {
    const items = typedEl.dataset.typedItems;
    if (items) {
      new Typed(".typed", {
        strings: items.split(","),
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  }

  /* ==========================
     SWIPER
  ========================== */
  function initSwiper() {
    if (typeof Swiper === "undefined") return;

    document.querySelectorAll(".init-swiper").forEach((swiperEl) => {
      const configEl = swiperEl.querySelector(".swiper-config");
      if (!configEl) return;

      let config;
      try {
        config = JSON.parse(configEl.textContent.trim());
      } catch {
        return;
      }

      new Swiper(swiperEl, config);
    });
  }

  window.addEventListener("load", initSwiper);

  /* ==========================
     FAQ
  ========================== */
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("faq-active");
    });
  });

  /* ==========================
     HASH SCROLL FIX
  ========================== */
  window.addEventListener("load", () => {
    if (!window.location.hash) return;
    const section = document.querySelector(window.location.hash);
    if (!section) return;

    setTimeout(() => {
      const margin = parseInt(getComputedStyle(section).scrollMarginTop) || 0;
      window.scrollTo({
        top: section.offsetTop - margin,
        behavior: "smooth",
      });
    }, 100);
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("scrolled", window.scrollY > 50);
  });

  /* ==========================
     SCROLLSPY
  ========================== */
  const navLinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    const position = window.scrollY + 200;

    navLinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;

      const active = position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight;

      link.classList.toggle("active", active);
    });
  }

  window.addEventListener("load", navmenuScrollspy);
  window.addEventListener("scroll", navmenuScrollspy);
})();
