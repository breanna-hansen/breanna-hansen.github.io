(function () {
  "use strict";

  const navbar = document.querySelector('#navbar');
  const mobileToggle = document.querySelector('.mobile-nav-toggle');

  if (!navbar || !mobileToggle) {
    return;
  }

  function toggleMobileNav() {
    navbar.classList.toggle('navbar-mobile');
    mobileToggle.classList.toggle('bi-list');
    mobileToggle.classList.toggle('bi-x');
  }

  mobileToggle.addEventListener('click', function (e) {
    e.preventDefault();
    toggleMobileNav();
  });

  document.querySelectorAll('#navbar a').forEach(function (link) {
    link.addEventListener('click', function () {
      if (navbar.classList.contains('navbar-mobile')) {
        toggleMobileNav();
      }
    });
  });
})();
