const translations = {
    en: {
        appName: "KisanQ",
        appTagline: "Smart Procurement, Happy Farmers",
        farmerName: "Rajesh Kumar",
        welcomePrefix: "Hello, ",
        langBtnText: "🌐 हिन्दी",
        navHome: "Home",
        navSlots: "Slots",
        navToken: "Token",
        navPayments: "Payments",
        navHelp: "Help",
        backBtn: "← Back",
        
        // Home View
        yourToken: "YOUR TOKEN",
        issuedToday: "✓ Issued Today • 09:15 AM",
        yourTurn: "YOUR TURN",
        farmersAhead: "5 farmers ahead of you",
        estimatedWait: "ESTIMATED WAIT",
        waitSuffix: "Estimated waiting time",
        mins: "min",
        bookActionTitle: "Book New Slot",
        bookActionSub: "Choose storage, date & time",
        trackActionTitle: "Track My Queue",
        trackActionSub: "Live gate status",
        qrActionTitle: "Show My QR",
        qrActionSub: "At procurement gate",
        scheduleHeading: "📅 Today's Schedule",
        step1: "Token Issued",
        step2: "Expected Turn",
        step2Sub: "Proceed to Weighbridge 2",
        step3: "Quality & Moisture Check",
        step4: "Direct Bank Transfer (DBT)",
        paymentHeading: "💰 Payment Status",
        paymentStatusTxt: "✓ ₹ 84,250",
        paymentNote: "Status: Processing via DBT (Ref: KQ-PAY-883)",
        viewDetailsBtn: "View Complete Breakdown →",
        noticeHeading: "📢 Procurement Notice",
        noticeBody: "Acceptable moisture content for Paddy is capped at 17%. Produce exceeding this will require re-drying before storage check-in.",

        // Profile / Login Page View
        profileTitle: "Farmer Account & Verification Details",
        profileDesc: "Authenticated farmer profile for Mandi DBT transactions.",
        farmerIdLabel: "Kisan Registration ID",
        phoneLabel: "Registered Mobile Number",
        addressLabel: "Village & Farm Address",
        mandiCenterLabel: "Assigned Primary Mandi",
        landSizeLabel: "Registered Cultivable Land",
        aadhaarLabel: "Aadhaar Linked Status",
        verifiedTag: "✓ Verified Farmer Profile",
        logoutBtn: "Log Out / Switch Farmer Account",

        // Slot Booking View
        slotTitle: "Book Procurement & Storage Slot",
        slotDesc: "Select your destination mandi warehouse and vehicle schedule.",
        destLabel: "Select Destination (Mandi / Warehouse)",
        cropLabel: "Crop Type",
        weightLabel: "Estimated Weight (Quintals)",
        vehicleLabel: "Vehicle Number",
        confirmSlotBtn: "Confirm & Generate Token",

        // Dropdown Options - Destinations
        destOption1: "Dadri Mandi Yard - Shed #4 (Open Yard)",
        destOption2: "Greater Noida Central Silo (FCI Depot)",
        destOption3: "Dankaur APMC Cold Storage (Warehouse B)",
        destOption4: "Surajpur Primary Cooperative Godown",

        // Dropdown Options - Crops
        cropOption1: "Wheat (Lokwan)",
        cropOption2: "Paddy (Common)",
        cropOption3: "Mustard",
        cropOption4: "Soybean",

        // Track View
        trackTitle: "Live Gate & Queue Tracker",
        trackDesc: "Real-time updates directly from mandi weighbridges.",
        colCenter: "Procurement Center",
        colServing: "Now Serving",
        colUserToken: "Your Token",
        colBridges: "Active Weighbridges",
        colTurnaround: "Avg. Turnaround",

        // QR View
        qrTitle: "Procurement Gate Pass",
        qrDesc: "Display this pass to the gate operator upon tractor arrival.",
        qrScanHelp: "Scan at weighbridge terminal to initiate unladen weighing.",

        // Payments View
        payTitle: "Direct Benefit Transfer (DBT) Statement",
        payDesc: "Complete itemized breakdown for credited agricultural sales.",
        tblGross: "Gross Produce",
        tblRate: "Crop Rate (MSP)",
        tblValue: "Total Value",
        tblDeductions: "Mandi Cess & Handling",
        tblNet: "Net Credited Amount",
        tblAccount: "Credited Bank Account",

        // Help View
        helpTitle: "Mandi Support & Assistance",
        helpDesc: "Direct helpline numbers for procurement and weighing issues.",
        helpOfficer: "Mandi In-charge Officer",
        helpTollFree: "Toll-Free Control Room",
        helpMoisture: "Quality & Moisture Testing Lab"
    },
    hi: {
        appName: "किसानक्यू (KisanQ)",
        appTagline: "स्मार्ट खरीद, समृद्ध किसान",
        farmerName: "राजेश कुमार",
        welcomePrefix: "नमस्ते, ",
        langBtnText: "🌐 English",
        navHome: "होम",
        navSlots: "स्लॉट बुकिंग",
        navToken: "टोकन",
        navPayments: "भुगतान",
        navHelp: "सहायता",
        backBtn: "← वापस जाएं",

        // Home View
        yourToken: "आपका टोकन",
        issuedToday: "✓ आज जारी • सुबह 09:15",
        yourTurn: "आपका नंबर",
        farmersAhead: "5 किसान आपसे आगे हैं",
        estimatedWait: "अनुमानित प्रतीक्षा",
        waitSuffix: "अनुमानित प्रतीक्षा समय",
        mins: "मिनट",
        bookActionTitle: "नया स्लॉट बुक करें",
        bookActionSub: "गोदाम, दिनांक और समय चुनें",
        trackActionTitle: "कतार ट्रैक करें",
        trackActionSub: "गेट की ताज़ा स्थिति",
        qrActionTitle: "मेरा क्यूआर दिखाएं",
        qrActionSub: "मंडी गेट प्रवेश हेतु",
        scheduleHeading: "📅 आज की समय-सारणी",
        step1: "टोकन जारी हुआ",
        step2: "अनुमानित समय",
        step2Sub: "कांटा नंबर 2 पर पहुंचे",
        step3: "गुणवत्ता व नमी जांच",
        step4: "सीधे बैंक खाते में भुगतान (DBT)",
        paymentHeading: "💰 भुगतान स्थिति",
        paymentStatusTxt: "✓ ₹ 84,250",
        paymentNote: "स्थिति: डीबीटी द्वारा प्रक्रियाधीन (रेफ: KQ-PAY-883)",
        viewDetailsBtn: "पूरा विवरण देखें →",
        noticeHeading: "📢 खरीद सूचना",
        noticeBody: "धान में नमी की मात्रा 17% से अधिक नहीं होनी चाहिए। अधिक नमी वाले माल को सुखाने के बाद ही स्वीकार किया जाएगा।",

        // Profile / Login Page View
        profileTitle: "किसान खाता व सत्यापन विवरण",
        profileDesc: "मंडी डीबीटी भुगतान हेतु सत्यापित किसान प्रोफ़ाइल।",
        farmerIdLabel: "किसान पंजीकरण संख्या (Kisan ID)",
        phoneLabel: "पंजीकृत मोबाइल नंबर",
        addressLabel: "गाँव एवं खेत का पता",
        mandiCenterLabel: "आवंटित मुख्य मंडी केंद्र",
        landSizeLabel: "पंजीकृत कृषि भूमि",
        aadhaarLabel: "आधार लिंक स्थिति",
        verifiedTag: "✓ सत्यापित किसान प्रोफ़ाइल",
        logoutBtn: "लॉग आउट / दूसरा खाता चुनें",

        // Slot Booking View
        slotTitle: "फसल खरीद व भंडारण स्लॉट बुकिंग",
        slotDesc: "अपनी पसंद का मंडी गोदाम एवं वाहन का विवरण दर्ज करें।",
        destLabel: "गंतव्य चुनें (मंडी या भंडारण गोदाम)",
        cropLabel: "फसल का प्रकार",
        weightLabel: "अनुमानित वजन (क्विंटल)",
        vehicleLabel: "वाहन नंबर",
        confirmSlotBtn: "स्लॉट सुरक्षित करें व टोकन बनाएं",

        // Dropdown Options - Destinations
        destOption1: "दादरी मंडी यार्ड - शेड #4 (खुला यार्ड)",
        destOption2: "ग्रेटर नोएडा केंद्रीय साइलो (FCI डिपो)",
        destOption3: "दनकौर APMC कोल्ड स्टोरेज (गोदाम B)",
        destOption4: "सूरजपुर प्राथमिक सहकारी गोदाम",

        // Dropdown Options - Crops
        cropOption1: "गेहूं (लोकवान)",
        cropOption2: "धान (सामान्य)",
        cropOption3: "सरसों",
        cropOption4: "सोयाबीन",

        // Track View
        trackTitle: "लाइव गेट व कतार ट्रैकर",
        trackDesc: "मंडी धर्मकांटा से सीधे लाइव अपडेट।",
        colCenter: "खरीद केंद्र / गोदाम",
        colServing: "वर्तमान में चालू",
        colUserToken: "आपका टोकन",
        colBridges: "सक्रिय धर्मकांटे",
        colTurnaround: "औसत समय",

        // QR View
        qrTitle: "मंडी प्रवेश गेट पास",
        qrDesc: "ट्रैक्टर/वाहन आगमन पर गेट कर्मचारी को यह कोड दिखाएं।",
        qrScanHelp: "तुलाई प्रक्रिया शुरू करने के लिए इसे धर्मकांटा टर्मिनल पर स्कैन कराएं।",

        // Payments View
        payTitle: "प्रत्यक्ष लाभ अंतरण (DBT) भुगतान रसीद",
        payDesc: "फसल बिक्री एवं बैंक खाते में भेजी गई राशि का विवरण।",
        tblGross: "कुल उपज",
        tblRate: "समर्थन मूल्य (MSP दर)",
        tblValue: "कुल मूल्यांकन",
        tblDeductions: "मंडी शुल्क व पल्लेदारी",
        tblNet: "खाते में भेजी जाने वाली राशि",
        tblAccount: "लाभार्थी बैंक खाता",

        // Help View
        helpTitle: "मंडी सहायता एवं हेल्पलाइन",
        helpDesc: "तुलाई, भुगतान अथवा किसी भी समस्या हेतु संपर्क सूत्र।",
        helpOfficer: "मंडी प्रभारी अधिकारी",
        helpTollFree: "टोल-फ्री हेल्पलाइन",
        helpMoisture: "गुणवत्ता व नमी परीक्षण लैब"
    }
};

// Retrieve selected language from storage or default to English
function getCurrentLang() {
    return localStorage.getItem("kisanq_lang") || "en";
}

// Toggle language and persist preference across pages
function toggleLanguage() {
    const current = getCurrentLang();
    const target = current === "en" ? "hi" : "en";
    localStorage.setItem("kisanq_lang", target);
    applyLanguage(target);
}

// Update all text nodes and dropdown options
function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // 1. Update text content for standard elements
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            if (el.tagName === "OPTION") {
                el.textContent = dict[key];
                el.innerText = dict[key];
            } else {
                el.innerText = dict[key];
            }
        }
    });

    // 2. Explicitly force select options to re-render properly in browsers
    const selects = ["destinationHub", "cropType"];
    selects.forEach(id => {
        const sel = document.getElementById(id);
        if (sel) {
            for (let i = 0; i < sel.options.length; i++) {
                const opt = sel.options[i];
                const key = opt.getAttribute("data-i18n");
                if (key && dict[key]) {
                    opt.textContent = dict[key];
                    opt.innerText = dict[key];
                }
            }
        }
    });

    // 3. Update the header button's label
    const langBtn = document.getElementById("langToggleBtn");
    if (langBtn) {
        langBtn.innerText = dict.langBtnText;
    }
}

// Handle slot booking form submission
function handleSlotFormSubmit(event) {
    event.preventDefault();
    const destSelect = document.getElementById("destinationHub");
    const cropSelect = document.getElementById("cropType");

    const dest = destSelect.options[destSelect.selectedIndex].text;
    const crop = cropSelect.options[cropSelect.selectedIndex].text;
    const weight = document.getElementById("cropWeight").value;
    const vehicle = document.getElementById("vehicleNo").value;

    const newToken = "KQ-" + Math.floor(1000 + Math.random() * 9000);
    localStorage.setItem("kisanq_token", newToken);
    localStorage.setItem("kisanq_dest", dest);

    const isHi = getCurrentLang() === "hi";
    const alertMsg = isHi
        ? `✅ स्लॉट सफलतापूर्वक बुक हो गया!\n\n• टोकन नंबर: ${newToken}\n• गंतव्य: ${dest}\n• फसल: ${crop} (${weight} क्विंटल)\n• वाहन: ${vehicle}`
        : `✅ Slot Booked Successfully!\n\n• Token Number: ${newToken}\n• Destination: ${dest}\n• Crop: ${crop} (${weight} Quintals)\n• Vehicle: ${vehicle}`;

    alert(alertMsg);
    window.location.href = "index.html";
}

// Run initial synchronization on page load
document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getCurrentLang());

    const storedToken = localStorage.getItem("kisanq_token");
    const storedDest = localStorage.getItem("kisanq_dest");

    if (storedToken) {
        const tokenElem = document.getElementById("tokenDisplay");
        const qrLabel = document.getElementById("qrTokenLabel");
        if (tokenElem) tokenElem.innerText = storedToken;
        if (qrLabel) qrLabel.innerText = storedToken;
    }

    if (storedDest) {
        const locElem = document.getElementById("displayLocation");
        if (locElem) locElem.innerText = "📍 " + storedDest;
    }
});