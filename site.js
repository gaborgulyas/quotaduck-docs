const en = {
  navFeatures:"Features",navInstall:"Availability",navPrivacy:"Privacy",home:"Home",
  eyebrow:"INDEPENDENT CHROME EXTENSION · CODEX / WORK",
  heroTitle:"Know how much you <em>have left.</em>",
  heroLead:"Your 5-hour and weekly Codex/Work allowance, remaining percentage, and next reset. Right where you work.",
  heroButton:"About availability ↗",storeSoon:"Coming to the Chrome Web Store",
  heroFoot1:"No extra account",heroFoot2:"No analytics",heroFoot3:"HU + EN",
  illustration:"Illustration · sample data",fact1:"Two windows together",fact2:"Automatic refresh",fact3:"External tracking or account",
  featuresEyebrow:"ONE GLANCE, A CLEARER PLAN",featuresTitle:"The essentials stay in view.",
  featuresIntro:"QuotaDuck makes it simple to see how much usage remains and when your allowance resets.",
  feature1Title:"Two time windows",feature1Body:"Separate percentages for 5-hour and weekly Codex/Work allowances, with local reset times and countdowns.",
  feature2Title:"Always within reach",feature2Body:"See remaining allowance on the toolbar badge, details in the popup, and an optional floating panel.",
  feature3Title:"Fits your workspace",feature3Body:"Show the panel only on ChatGPT, optionally on other websites, or turn it off. Choose from nine positions or automatic placement.",
  feature4Title:"Stored locally",feature4Body:"No independent server or analytics. The latest successful reading and your preferences stay in your browser.",
  installEyebrow:"AVAILABILITY",installTitle:"Coming to the Chrome Web Store.",
  installIntro:"QuotaDuck is not yet available for public installation. Once it launches on the Chrome Web Store, the installation link will appear here.",
  installStatus:"The extension source code is private; this public site contains only the product overview and privacy information.",
  privacyTitle:"Your data stays in your browser.",
  privacyBody:"The extension reads your allowance using your signed-in ChatGPT session. It never saves the access token or sends data to its own server. See exactly how it works and when an optional permission is requested.",
  privacyLink:"Read the privacy details ↗",faqEyebrow:"GOOD TO KNOW",faqTitle:"Frequently asked questions",
  faq1Q:"Does it show every ChatGPT message limit?",faq1A:"No. It shows the Codex / Work usage allowance, not the separate message limits for individual ChatGPT models.",
  faq2Q:"Why might it request access to all websites?",faq2A:"Only if you enable the floating panel on every website. By default, the panel appears only on ChatGPT pages.",
  faq3Q:"What happens when data does not refresh?",faq3A:"The last successful reading remains visible. ChatGPT's undocumented internal endpoint may change, which could require an extension update.",
  footer:"Independent project. Not affiliated with OpenAI."
};
const hu = {};
for (const node of document.querySelectorAll('[data-i18n]')) {
  const key = node.dataset.i18n;
  if (!(key in hu)) hu[key] = key === 'heroTitle' ? node.innerHTML : node.textContent;
}
const button = document.getElementById('language');
function setLanguage(language) {
  document.documentElement.lang = language;
  for (const node of document.querySelectorAll('[data-i18n]')) {
    const key = node.dataset.i18n;
    if (key === 'heroTitle') node.innerHTML = language === 'en' ? en[key] : hu[key];
    else node.textContent = language === 'en' ? en[key] : hu[key];
  }
  for (const node of document.querySelectorAll('[data-lang]')) node.hidden = node.dataset.lang !== language;
  button.textContent = language === 'en' ? 'HU' : 'EN';
  button.setAttribute('aria-label', language === 'en' ? 'Magyar nyelvre váltás' : 'Switch to English');
  document.title = language === 'en' ? (document.body.classList.contains('privacy-page') ? 'Privacy — QuotaDuck' : 'QuotaDuck — Codex usage at a glance') : (document.body.classList.contains('privacy-page') ? 'Adatkezelés — QuotaDuck' : 'QuotaDuck — Codex használati keret egy pillantással');
  try { localStorage.setItem('quotaduck-site-language', language); } catch {}
}
let initial = 'hu';
try { if (localStorage.getItem('quotaduck-site-language') === 'en') initial = 'en'; } catch {}
setLanguage(initial);
button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'hu' ? 'en' : 'hu'));
