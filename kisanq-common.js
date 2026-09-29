/* ==========================================================================
   kisanq-common.js - Shared Language Sync & Compact Bottom Nav Dock
   ========================================================================== */

const sharedTranslations = {
  en: {
    tagline: "Smart Procurement, Happy Farmers",
    navHome: "Home",
    navBook: "Book Slot",
    navQueue: "Queue",
    navQR: "My QR",
    navProfile: "Profile"
  },
  hi: {
    tagline: "स्मार्ट खरीद, खुशहाल किसान",
    navHome: "होम",
    navBook: "स्लॉट बुक",
    navQueue: "कतार",
    navQR: "मेरा क्यूआर",
    navProfile: "प्रोफ़ाइल"
  }
};

// 1. Get or set initial language
function getActiveLanguage() {
  try {
    return localStorage.getItem('kisanq_lang') || 'en';
  } catch (e) {
    return 'en';
  }
}

function updateCommonUI(lang) {
  // Update toggle button active styling if on page
  const enBtn = document.getElementById('lang-en');
  const hiBtn = document.getElementById('lang-hi');
  if (enBtn && hiBtn) {
    if (lang === 'hi') {
      hiBtn.className = "px-2.5 py-1 rounded-md bg-white text-gray-800 shadow-xs font-bold transition-all";
      enBtn.className = "px-2.5 py-1 rounded-md text-gray-500 hover:text-gray-900 font-semibold transition-all";
    } else {
      enBtn.className = "px-2.5 py-1 rounded-md bg-white text-gray-800 shadow-xs font-bold transition-all";
      hiBtn.className = "px-2.5 py-1 rounded-md text-gray-500 hover:text-gray-900 font-semibold transition-all";
    }
  }

  // Translate common shared elements
  document.querySelectorAll('[data-i18n-common]').forEach(el => {
    const key = el.getAttribute('data-i18n-common');
    if (sharedTranslations[lang] && sharedTranslations[lang][key]) {
      el.textContent = sharedTranslations[lang][key];
    }
  });

  // Call page-specific setLanguage if declared on the page
  if (typeof window.applyPageLanguage === 'function') {
    window.applyPageLanguage(lang);
  }
}

function setSharedLanguage(lang) {
  try {
    localStorage.setItem('kisanq_lang', lang);
  } catch (e) {}
  updateCommonUI(lang);
}

// 2. Render Compact Bottom Logo Dock (Replaces the SIH Title footer)
function renderBottomDock() {
  const currentPath = window.location.pathname;
  const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  const navItems = [
    { file: 'index.html', icon: 'fa-solid fa-house', labelKey: 'navHome' },
    { file: 'book-slot.html', icon: 'fa-regular fa-calendar-check', labelKey: 'navBook' },
    { file: 'track-queue.html', icon: 'fa-solid fa-users-line', labelKey: 'navQueue' },
    { file: 'my-qr.html', icon: 'fa-solid fa-qrcode', labelKey: 'navQR' },
    { file: 'profile.html', icon: 'fa-regular fa-user', labelKey: 'navProfile' }
  ];

  const dockContainer = document.createElement('div');
  dockContainer.className = "fixed bottom-3 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg rounded-2xl px-3 py-1.5 flex items-center gap-1.5 sm:gap-3 transition-all";

  const lang = getActiveLanguage();

  navItems.forEach(item => {
    const isActive = pageName === item.file || (pageName === '' && item.file === 'index.html');
    const link = document.createElement('a');
    link.href = item.file;
    link.title = sharedTranslations[lang][item.labelKey] || item.file;

    link.className = isActive
      ? "w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center text-sm shadow-xs transition-transform transform scale-105"
      : "w-10 h-10 rounded-xl text-gray-500 hover:text-brand hover:bg-gray-100 flex items-center justify-center text-sm transition-all";

    link.innerHTML = `<i class="${item.icon}"></i>`;
    dockContainer.appendChild(link);
  });

  document.body.appendChild(dockContainer);
}

// Auto init when document is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderBottomDock();
  updateCommonUI(getActiveLanguage());
});