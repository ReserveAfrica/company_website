/*
 * Reserve Africa: small page behaviours shared by every page.
 * - Closes the "Open app" menu when clicking outside it or pressing Escape.
 */
(function () {
  function menus() { return document.querySelectorAll('details.ra-apps[open]'); }
  document.addEventListener('click', function (e) {
    menus().forEach(function (d) { if (!d.contains(e.target)) d.removeAttribute('open'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    menus().forEach(function (d) { d.removeAttribute('open'); d.querySelector('summary').focus(); });
  });
})();
