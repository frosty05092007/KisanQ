/* ==========================================================================
   kisanq-common.js - Shared Language Sync, Bottom Dock & Notification Center
   ========================================================================== */

const sharedTranslations = {
  en: {
    tagline: "Smart Procurement, Happy Farmers",
    navHome: "Home",
    navBook: "Book Slot",
    navQueue: "Queue",
    navQR: "My QR",
    navProfile: "Profile",
    notifTitle: "Mandi Notifications",
    notifMarkRead: "Mark all as read",
    notifEmpty: "No unread notifications",
    notif1Title: "Token KQ-1042 Active",
    notif1Msg: "Assigned at Gate 2. Current queue position #5 at Bay 3.",
    notif1Time: "15 min ago",
    notif2Title: "Moisture Testing Lab Open",
    notif2Msg: "Wheat lots moisture verification line operating at speed.",
    notif2Time: "1 hour ago",
    notif3Title: "DBT Payment Batch Queued",
    notif3Msg: "Your previous 18 Qtl lot payment of ₹40,950 is processing.",
    notif3Time: "3 hours ago"
  },
  hi: {
    tagline: "स्मार्ट खरीद, खुशहाल किसान",
    navHome: "होम",
    navBook: "स्लॉट बुक",
    navQueue: "कतार",
    navQR: "मेरा क्यूआर",
    navProfile: "प्रोफ़ाइल",
    notifTitle: "मंडी सूचनाएं (अलर्ट)",
    notifMarkRead: "सभी पढ़े हुए चिह्नित करें",
    notifEmpty: "कोई नई सूचना नहीं है",
    notif1Title: "टोकन KQ-1042 सक्रिय",
    notif1Msg: "गेट 2 पर आवंटित। बे 3 पर आपकी कतार स्थिति #5 है।",
    notif1Time: "15 मिनट पहले",
    notif2Title: "नमी परीक्षण प्रयोगशाला खुली है",
    notif2Msg: "गेहूं की फसलों का नमी परीक्षण काउंटर सुचारू रूप से चालू है।",
    notif2Time: "1 घंटा पहले",
    notif3Title: "डीबीटी भुगतान प्रक्रिया जारी",
    notif3Msg: "आपकी 18 क्विंटल फसल का ₹40,950 का भुगतान बैंक को भेजा गया।",
    notif3Time: "3 घंटे पहले"
  }
};

function getActiveLanguage() {
  try {
    return localStorage.getItem('kisanq_lang') || 'en';
  } catch (e) {
    return 'en';
  }
}

function updateCommonUI(lang) {
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

  document.querySelectorAll('[data-i18n-common]').forEach(el => {
    const key = el.getAttribute('data-i18n-common');
    if (sharedTranslations[lang] && sharedTranslations[lang][key]) {
      el.textContent = sharedTranslations[lang][key];
    }
  });

  renderNotificationPanel(lang);

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

// ================= NOTIFICATION CENTER =================
function renderNotificationPanel(lang) {
  let panel = document.getElementById('notif-dropdown');
  if (!panel) return;

  const t = sharedTranslations[lang];
  panel.innerHTML = `
    <div class="p-3.5 border-b border-gray-100 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <i class="fa-regular fa-bell text-brand text-sm"></i>
        <h3 class="font-bold text-xs text-gray-900 uppercase tracking-wider">${t.notifTitle}</h3>
      </div>
      <button onclick="markAllNotificationsAsRead()" class="text-[11px] font-semibold text-brand hover:underline">${t.notifMarkRead}</button>
    </div>
    <div class="divide-y divide-gray-100 max-h-80 overflow-y-auto" id="notif-items-list">
      <!-- Item 1 -->
      <div class="p-3.5 hover:bg-gray-50 transition-colors flex items-start gap-3">
        <div class="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 notif-unread-dot"></div>
        <div>
          <h4 class="font-bold text-xs text-gray-900">${t.notif1Title}</h4>
          <p class="text-xs text-gray-500 mt-0.5">${t.notif1Msg}</p>
          <span class="text-[10px] text-gray-400 mt-1 block">${t.notif1Time}</span>
        </div>
      </div>
      <!-- Item 2 -->
      <div class="p-3.5 hover:bg-gray-50 transition-colors flex items-start gap-3">
        <div class="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0 notif-unread-dot"></div>
        <div>
          <h4 class="font-bold text-xs text-gray-900">${t.notif2Title}</h4>
          <p class="text-xs text-gray-500 mt-0.5">${t.notif2Msg}</p>
          <span class="text-[10px] text-gray-400 mt-1 block">${t.notif2Time}</span>
        </div>
      </div>
      <!-- Item 3 -->
      <div class="p-3.5 hover:bg-gray-50 transition-colors flex items-start gap-3">
        <div class="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0 notif-unread-dot"></div>
        <div>
          <h4 class="font-bold text-xs text-gray-900">${t.notif3Title}</h4>
          <p class="text-xs text-gray-500 mt-0.5">${t.notif3Msg}</p>
          <span class="text-[10px] text-gray-400 mt-1 block">${t.notif3Time}</span>
        </div>
      </div>
    </div>
  `;
}

function toggleNotifications(event) {
  if (event) event.stopPropagation();
  let panel = document.getElementById('notif-dropdown');
  if (panel) {
    panel.classList.toggle('hidden');
  }
}

function markAllNotificationsAsRead() {
  const badge = document.getElementById('notif-badge-count');
  if (badge) badge.classList.add('hidden');

  document.querySelectorAll('.notif-unread-dot').forEach(dot => {
    dot.className = "w-2 h-2 rounded-full bg-gray-200 mt-1.5 shrink-0";
  });
}

// Close when clicking outside
document.addEventListener('click', (e) => {
  const panel = document.getElementById('notif-dropdown');
  const btn = document.getElementById('notif-btn');
  if (panel && !panel.classList.contains('hidden') && !panel.contains(e.target) && !btn.contains(e.target)) {
    panel.classList.add('hidden');
  }
});

// ================= BOTTOM NAVIGATION DOCK =================
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

document.addEventListener('DOMContentLoaded', () => {
  renderBottomDock();
  updateCommonUI(getActiveLanguage());
});
