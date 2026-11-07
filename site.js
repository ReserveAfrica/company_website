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

/*
 * "Join the waitlist" forms: post name + email to the signup API, which emails
 * info@reserveafrica.com via SNS. No mail client is opened.
 */
(function () {
  var ENDPOINT = 'https://m6omqcibmc.execute-api.af-south-1.amazonaws.com/signup';

  document.querySelectorAll('form.ra-demo').forEach(function (form) {
    var button = form.querySelector('button[type=submit]');
    var status = form.querySelector('.ra-demo-status');
    var label = button.textContent;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      if (!name || !email) { form.reportValidity(); return; }

      button.disabled = true;
      button.textContent = 'Sending…';
      status.textContent = '';

      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'waitlist', name: name, email: email, product: form.dataset.product })
      })
        .then(function (res) { if (!res.ok) throw new Error(res.status); })
        .then(function () {
          form.reset();
          button.textContent = 'You’re on the list';
          status.textContent = 'Thanks, ' + name + '. You’re on the waitlist and we’ll be in touch soon.';
        })
        .catch(function () {
          button.disabled = false;
          button.textContent = label;
          status.textContent = 'Something went wrong. Please try again, or email info@reserveafrica.com.';
        });
    });
  });
})();
