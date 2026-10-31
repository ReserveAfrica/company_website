/*
 * Reserve Africa: Privacy Policy and Terms of Use, shown as modal dialogs.
 *
 * Any link to "#privacy" or "#terms" opens the matching dialog, and visiting
 * a page with that hash (e.g. reserveafrica.com/#privacy) opens it on load,
 * so the policies can be linked to directly.
 *
 * Edit the policy text in PRIVACY_HTML and TERMS_HTML below.
 */
(function () {
  var LAST_UPDATED = '31 October 2026';
  var EMAIL = 'info@reserveafrica.com';
  var mail = '<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>';

  var COMPANY_DETAILS =
    '<ul>' +
    '<li><strong>Trading name:</strong> RESERVE AFRICA</li>' +
    '<li><strong>Email:</strong> ' + mail + '</li>' +
    '</ul>';

  var PRIVACY_HTML =
    '<p class="ra-legal-meta">Last updated: ' + LAST_UPDATED + '</p>' +

    '<p>Reserve Africa ("we", "us", "our") respects your privacy. This policy explains what personal information we collect through our website and our products, Reserve Desk and Reserve Studio, and how we use and protect it.</p>' +
    '<p>We are based in South Africa, so we process personal information under the <strong>Protection of Personal Information Act 4 of 2013 (POPIA)</strong>. Many of our clients are outside South Africa. Where other data protection laws apply to you, such as the EU or UK General Data Protection Regulation (GDPR), we also respect the rights those laws give you.</p>' +

    '<h3>1. Who we are</h3>' +
    COMPANY_DETAILS +
    '<p>We are the "responsible party" under POPIA (the "controller" under the GDPR) for the personal information described in this policy. For personal information that our clients upload to or manage in our products, such as guest or traveller details, our client is the responsible party and we process it on their behalf as an "operator" (or "processor"), under our agreement with them.</p>' +

    '<h3>2. Information we collect</h3>' +
    '<ul>' +
    '<li><strong>Contact and business details</strong> you give us when you email us, book a demo or sign up: your name, job title, company, email address, phone number and country.</li>' +
    '<li><strong>Account information</strong> when you use our products: login details, user settings, and the rates, policies and other business content you add.</li>' +
    '<li><strong>Usage and technical information:</strong> IP address, browser and device type, pages visited, and dates and times of access, collected through server logs and similar tools.</li>' +
    '<li><strong>Communications:</strong> the content of emails and support requests you send us.</li>' +
    '</ul>' +
    '<p>We do not knowingly collect special personal information (such as health, religious or biometric information) or personal information of children through our website.</p>' +

    '<h3>3. How we use it</h3>' +
    '<ul>' +
    '<li>To respond to your enquiries and arrange demos.</li>' +
    '<li>To provide, maintain, secure and improve our products and services.</li>' +
    '<li>To manage our relationship with you, including billing and support.</li>' +
    '<li>To send you product updates and relevant news, where you have agreed to this or where the law otherwise permits. You can unsubscribe at any time.</li>' +
    '<li>To comply with our legal obligations and to protect our rights.</li>' +
    '</ul>' +
    '<p>We process personal information only where we have a lawful basis to do so: to perform a contract with you or take steps before entering one, for our legitimate interests in running and growing our business (where those interests are not overridden by yours), to comply with the law, or with your consent. Where we rely on consent, you can withdraw it at any time.</p>' +

    '<h3>4. Who we share it with</h3>' +
    '<p>We do not sell your personal information. We share it only with:</p>' +
    '<ul>' +
    '<li><strong>Service providers</strong> who help us run our business, such as cloud hosting, email and payment providers. They act on our instructions and must keep the information confidential and secure.</li>' +
    '<li><strong>Professional advisers</strong> such as lawyers, auditors and insurers, where necessary.</li>' +
    '<li><strong>Authorities</strong> where we are required by law, or to protect our rights or the safety of others.</li>' +
    '<li><strong>A buyer or successor</strong> if our business is reorganised, merged or sold, subject to equivalent protections.</li>' +
    '</ul>' +

    '<h3>5. International transfers</h3>' +
    '<p>Because we work with clients and service providers around the world, your personal information may be transferred to, stored in, or accessed from countries outside South Africa or outside your own country. When this happens we make sure the transfer is permitted by law, for example because the recipient is subject to laws, binding corporate rules or a written agreement that provide an adequate level of protection, as required by section 72 of POPIA and, where applicable, the GDPR.</p>' +

    '<h3>6. Cookies</h3>' +
    '<p>Our website does not use advertising or tracking cookies. Our pages load fonts from Google Fonts, which means your browser connects to Google\'s servers and Google receives your IP address. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Google\'s privacy policy</a>. Our products may use essential cookies to keep you signed in; these are needed for the service to work.</p>' +

    '<h3>7. How long we keep it</h3>' +
    '<p>We keep personal information only for as long as we need it for the purposes above, or as long as the law requires (for example, tax and accounting records). After that we delete or anonymise it.</p>' +

    '<h3>8. Security</h3>' +
    '<p>We take appropriate technical and organisational measures to protect personal information against loss, misuse and unauthorised access, including encryption in transit and access controls. No system is completely secure, but if a security breach affects your personal information, we will notify you and the relevant regulator as the law requires.</p>' +

    '<h3>9. Your rights</h3>' +
    '<p>Subject to the law that applies to you, you have the right to:</p>' +
    '<ul>' +
    '<li>ask whether we hold personal information about you, and request a copy of it;</li>' +
    '<li>ask us to correct, update or delete it;</li>' +
    '<li>object to, or ask us to restrict, how we process it, including for direct marketing;</li>' +
    '<li>ask us to transfer it to you or another organisation (data portability, under the GDPR);</li>' +
    '<li>withdraw your consent where we rely on it;</li>' +
    '<li>lodge a complaint with a data protection regulator.</li>' +
    '</ul>' +
    '<p>To exercise any of these rights, email ' + mail + '. We may need to verify your identity before responding. Requests for access to records may also be made under the Promotion of Access to Information Act 2 of 2000 (PAIA).</p>' +

    '<h3>10. Complaints</h3>' +
    '<p>If you are unhappy with how we have handled your personal information, please contact us first so we can try to put it right. You may also complain to the <strong>Information Regulator (South Africa)</strong> at <a href="https://inforegulator.org.za" target="_blank" rel="noopener">inforegulator.org.za</a>. If you are in the EU or UK, you may complain to your local supervisory authority, such as the UK Information Commissioner\'s Office.</p>' +

    '<h3>11. Information Officer</h3>' +
    '<p>Our Information Officer can be contacted at ' + mail + '.</p>' +

    '<h3>12. Changes to this policy</h3>' +
    '<p>We may update this policy from time to time. The "last updated" date at the top shows when it was last changed. If we make significant changes, we will let our clients know.</p>';

  var TERMS_HTML =
    '<p class="ra-legal-meta">Last updated: ' + LAST_UPDATED + '</p>' +

    '<p>These terms govern your use of the Reserve Africa website. By using this website, you agree to them. If you do not agree, please do not use the website.</p>' +
    '<p>Access to and use of our products, Reserve Desk and Reserve Studio, is governed by a separate subscription or service agreement. If that agreement conflicts with these terms, the agreement takes precedence.</p>' +

    '<h3>1. About us</h3>' +
    '<p>This website is operated by Reserve Africa, a business based in South Africa. Our details are:</p>' +
    COMPANY_DETAILS +

    '<h3>2. Using the website</h3>' +
    '<p>You may use this website for lawful purposes only. You must not:</p>' +
    '<ul>' +
    '<li>use it in any way that breaks any applicable law or regulation;</li>' +
    '<li>attempt to gain unauthorised access to the website, our systems or our products;</li>' +
    '<li>introduce viruses or other harmful code, or interfere with the website\'s operation;</li>' +
    '<li>scrape, copy or reproduce its content for commercial purposes without our written permission.</li>' +
    '</ul>' +

    '<h3>3. Information on this website</h3>' +
    '<p>The content of this website is for general information about our products. We work to keep it accurate and up to date, but we do not guarantee that it is complete, current or free of errors, and it does not form part of any contract. Features, availability and pricing may change.</p>' +
    '<p>Our products help travel businesses manage and share rates, prices and policies. That information is supplied by the relevant lodges, camps, hotels and other suppliers, who remain responsible for its accuracy.</p>' +

    '<h3>4. Intellectual property</h3>' +
    '<p>The website, including its text, design, graphics, logos and software, and the names Reserve Africa, Reserve Desk and Reserve Studio, are owned by or licensed to us and are protected by intellectual property laws. You may view and print pages for your own reference, but you may not otherwise copy, modify or distribute them without our written permission.</p>' +

    '<h3>5. Links to other websites</h3>' +
    '<p>This website may link to websites run by others. We are not responsible for their content or their privacy practices.</p>' +

    '<h3>6. Availability</h3>' +
    '<p>We aim to keep the website available, but we do not guarantee that it will always be available or uninterrupted. We may suspend, change or withdraw it at any time.</p>' +

    '<h3>7. Limitation of liability</h3>' +
    '<p>To the fullest extent permitted by law, the website is provided "as is", and we are not liable for any loss or damage, whether direct, indirect or consequential, arising from your use of, or inability to use, the website or reliance on its content. Nothing in these terms excludes or limits any liability that cannot be excluded or limited under applicable law, including your rights under the Consumer Protection Act 68 of 2008 where it applies.</p>' +

    '<h3>8. Indemnity</h3>' +
    '<p>You agree to indemnify us against any claims, losses or costs arising from your breach of these terms or your misuse of the website.</p>' +

    '<h3>9. Privacy</h3>' +
    '<p>Our <a href="#privacy">Privacy Policy</a> explains how we handle personal information.</p>' +

    '<h3>10. Governing law and disputes</h3>' +
    '<p>These terms are governed by the laws of the Republic of South Africa, regardless of where you access the website from. Any dispute will be subject to the jurisdiction of the South African courts. If you are a consumer living outside South Africa, this does not take away any protection given to you by the mandatory laws of your country.</p>' +

    '<h3>11. General</h3>' +
    '<p>If any part of these terms is found to be unenforceable, the rest remains in effect. Our failure to enforce any part of these terms is not a waiver of our rights. We may update these terms from time to time, and the version on this website applies.</p>' +

    '<h3>12. Contact</h3>' +
    '<p>Questions about these terms can be sent to ' + mail + '.</p>';

  var DOCS = {
    privacy: { title: 'Privacy Policy', html: PRIVACY_HTML },
    terms: { title: 'Terms of Use', html: TERMS_HTML }
  };

  var CSS =
    '.ra-legal{width:min(760px,calc(100% - 32px));max-height:calc(100% - 48px);padding:0;border:1px solid #DCDFD8;border-radius:16px;background:#FFFFFF;color:#1B201E;font-family:"IBM Plex Sans",system-ui,sans-serif;font-size:16px;line-height:1.6;box-shadow:0 24px 64px rgba(27,32,30,.18)}' +
    '.ra-legal::backdrop{background:rgba(27,32,30,.55)}' +
    '.ra-legal[open]{display:flex;flex-direction:column}' +
    '.ra-legal-head{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 16px 16px 28px;border-bottom:1px solid #DCDFD8}' +
    '.ra-legal-head h2{margin:0;font-size:22px;font-weight:600;line-height:1.3}' +
    '.ra-legal-close{flex:none;width:44px;height:44px;border:0;border-radius:10px;background:transparent;color:#1B201E;font-size:26px;line-height:1;cursor:pointer}' +
    '.ra-legal-close:hover{background:#F4F5F2}' +
    '.ra-legal-close:focus-visible{outline:2px solid #1F5C4A;outline-offset:2px}' +
    '.ra-legal-body{overflow-y:auto;padding:8px 28px 32px;overscroll-behavior:contain}' +
    '.ra-legal-body h3{margin:28px 0 8px;font-size:17px;font-weight:600}' +
    '.ra-legal-body p,.ra-legal-body ul{margin:0 0 12px}' +
    '.ra-legal-body ul{padding-left:22px}' +
    '.ra-legal-body li{margin-bottom:6px}' +
    '.ra-legal a{color:#1F5C4A}.ra-legal a:hover{color:#123A2F}' +
    '.ra-legal-meta{color:#5C6560;font-size:14px;margin-top:12px!important}' +
    '@media (max-width:560px){.ra-legal-head{padding-left:20px}.ra-legal-body{padding:8px 20px 28px}}';

  var dialogs = {};

  function build(key) {
    var doc = DOCS[key];
    var d = document.createElement('dialog');
    d.className = 'ra-legal';
    d.setAttribute('aria-labelledby', 'ra-legal-title-' + key);
    d.innerHTML =
      '<div class="ra-legal-head">' +
      '<h2 id="ra-legal-title-' + key + '">' + doc.title + '</h2>' +
      '<button type="button" class="ra-legal-close" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="ra-legal-body">' + doc.html + '</div>';
    d.querySelector('.ra-legal-close').addEventListener('click', function () { d.close(); });
    // Close when clicking the backdrop (outside the dialog box).
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    d.addEventListener('close', function () {
      document.documentElement.style.overflow = '';
      if (location.hash === '#' + key) {
        history.replaceState(null, '', location.pathname + location.search);
      }
    });
    document.body.appendChild(d);
    return d;
  }

  function open(key) {
    if (!DOCS[key]) return;
    Object.keys(dialogs).forEach(function (k) { if (k !== key && dialogs[k].open) dialogs[k].close(); });
    var d = dialogs[key] || (dialogs[key] = build(key));
    if (!d.open) {
      document.documentElement.style.overflow = 'hidden';
      d.showModal();
    }
    d.querySelector('.ra-legal-body').scrollTop = 0;
  }

  function fromHash() {
    var key = location.hash.slice(1);
    if (DOCS[key]) open(key);
  }

  function init() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);

    document.addEventListener('click', function (e) {
      var a = e.target.closest && e.target.closest('a[href="#privacy"], a[href="#terms"]');
      if (!a) return;
      e.preventDefault();
      var key = a.getAttribute('href').slice(1);
      history.replaceState(null, '', '#' + key);
      open(key);
    });
    window.addEventListener('hashchange', fromHash);
    fromHash();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
