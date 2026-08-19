/**
 * ROEE ILOUZ (ROCI) - PORTFOLIO INTERACTIVITY & BILINGUAL ENGINE
 * Tab Switching, Language Switcher (EN/HE), Project Filtering & Contact Handling
 */

// Translation Dictionaries
const translations = {
  en: {
    lang_label: 'עברית',
    tab_titles: {
      'about': 'About Me',
      'skills': 'Experience & Education',
      'projects': 'Featured Projects',
      'homelab': 'Home Lab & Systems',
      'contact': 'Get In Touch'
    },
    sidebar: {
      'profile-name': 'Roee Ilouz',
      'profile-tag': '⚡ EE Student & Mobile Dev',
      'label-education': 'Education',
      'val-education': 'Electrical Engineering',
      'label-website': 'Website',
      'label-location': 'Location',
      'val-location': 'Jerusalem, Israel 🇮🇱',
      'label-languages': 'Languages',
      'val-languages': 'Hebrew & English',
      'label-ecosystem': 'Apps Ecosystem',
      'text-request-cv': 'Request Full CV (PDF)'
    },
    nav: {
      'nav-about': 'About',
      'nav-skills': 'Experience',
      'nav-projects': 'Projects',
      'nav-homelab': 'Homelab',
      'nav-contact': 'Contact'
    },
    about: {
      'about-intro': 'I am an <b>Electrical Engineering Student & Mobile Developer</b> focused on building cross-platform mobile applications, self-hosted infrastructure, and agentic AI developer workflows.',
      'about-quote': '"Passionate about clean system design, practical tooling, and bridging hardware fundamentals with modern software."',
      'feat-tag': '⭐ Featured Project',
      'feat-badge': 'ROCIs Apps Ecosystem',
      'feat-title': 'ROCIs Tasks',
      'feat-desc': 'Smart productivity, task management, checklists, attachments, natural language input, offline synchronization, and seamless Google Calendar integration.',
      'heading-doing': 'What I\'m Doing',
      'svc-mobile-title': 'Mobile & App Development',
      'svc-mobile-desc': 'Building cross-platform apps with Flutter & Dart, crafting fluid responsive UI/UX, state management, and managing monetization lifecycles with RevenueCat SDK.',
      'svc-ee-title': 'Engineering & Hardware Fundamentals',
      'svc-ee-desc': 'Electrical engineering academic foundations including circuit analysis, physics & mechanics, embedded systems exploration, and C programming.',
      'svc-sys-title': 'Systems & Homelab GitOps',
      'svc-sys-desc': 'Managing a 24/7 Raspberry Pi 5 (8GB, 1TB NVMe, Debian 13) node orchestrating 30+ Docker Compose services, Zero Trust networking, and GitOps automation.',
      'svc-sys-btn': 'View Architecture',
      'svc-ai-title': 'AI Tooling & Agentic Workflows',
      'svc-ai-desc': 'Designing custom developer workflows using Model Context Protocol (MCP), autonomous agents, and Google Antigravity IDE toolchains.'
    },
    experience: {
      'heading-exp': '<i class="fa-solid fa-briefcase" style="color: var(--accent-red); margin-right: 0.4rem;"></i> Professional & Leadership Experience',
      'exp1-title': 'IT & Infrastructure Department Lead (Platoon Commander)',
      'exp1-meta': 'Israel Defense Forces • 2024 – 2025',
      'exp1-desc': 'Commanded and managed an IT and Computing Department of ~10 technicians addressing mission-critical computing and infrastructure under high-pressure conditions. Accountable for emergency field computing infrastructures, mobile command platforms, and cross-functional technical problem solving.',
      'exp2-title': 'Systems & Network Specialist (Platoon Sergeant)',
      'exp2-meta': 'Israel Defense Forces • 2021 – 2024',
      'exp2-desc': 'Managed enterprise computing infrastructure, Active Directory, network routing/switching, field deployment computing kits, and hardware/software readiness for operational platforms.',
      'heading-edu': '<i class="fa-solid fa-graduation-cap" style="color: var(--accent-red); margin-right: 0.4rem;"></i> Education & Academic Studies',
      'edu1-title': 'B.Sc. in Electrical Engineering',
      'edu1-meta': 'Undergraduate Student • Academic Studies',
      'edu1-desc': 'Focusing on circuit theory, electrical signals, electromagnetic physics, classical mechanics, and mathematical modeling for engineering systems.',
      'edu2-title': 'Mechatronics & Machine Control',
      'edu2-meta': '\'Adam\' High School, Jerusalem • 2018 – 2021',
      'edu2-desc': 'Graduated with 5 Units in Computer Science, 5 Units in Mechatronic Systems, 5 Units in Machine Control, 5 Units in Math, and 5 Units in English.',
      'heading-certs': '<i class="fa-solid fa-certificate" style="color: var(--accent-red); margin-right: 0.4rem;"></i> Certifications & Technical Training',
      'cert1-title': 'CCNA Routing & Switching',
      'cert2-title': 'IT Essentials Hardware & OS',
      'cert3-title': 'Python Course',
      'cert4-title': 'Systems Technician',
      'heading-skills': '<i class="fa-solid fa-screwdriver-wrench" style="color: var(--accent-red); margin-right: 0.4rem;"></i> Technical Skills & Arsenal',
      'skill-cat-mobile': 'Mobile & App Development',
      'skill-cat-systems': 'Systems, Networking & Homelab',
      'skill-cat-hardware': 'Hardware, Mechatronics & Languages',
      'skill-cat-ai': 'AI Tooling & Methodologies',
      'skill-leadership': '👥 Team Leadership & Command',
      'skill-pressure': '⏱️ High-Pressure Execution'
    },
    contact: {
      'toast-msg': '🚀 Opening your email client...'
    }
  },
  he: {
    lang_label: 'English',
    tab_titles: {
      'about': 'עליי',
      'skills': 'ניסיון והשכלה',
      'projects': 'פרויקטים נבחרים',
      'homelab': 'מעבדת שרתים ותשתיות',
      'contact': 'יצירת קשר'
    },
    sidebar: {
      'profile-name': 'רועי אילוז',
      'profile-tag': '⚡ סטודנט להנדסת חשמל ומפתח מובייל',
      'label-education': 'השכלה',
      'val-education': 'הנדסת חשמל',
      'label-website': 'אתר אישי',
      'label-location': 'מיקום',
      'val-location': 'ירושלים, ישראל 🇮🇱',
      'label-languages': 'שפות',
      'val-languages': 'עברית ואנגלית',
      'label-ecosystem': 'סביבת אפליקציות',
      'text-request-cv': 'בקש קורות חיים מלאים (PDF)'
    },
    nav: {
      'nav-about': 'עליי',
      'nav-skills': 'ניסיון והשכלה',
      'nav-projects': 'פרויקטים',
      'nav-homelab': 'מעבדת בית',
      'nav-contact': 'צור קשר'
    },
    about: {
      'about-intro': 'אני <b>סטודנט להנדסת חשמל ומפתח מובייל</b>, המתמחה בפיתוח אפליקציות חוצות-פלטפורמות, ניהול תשתיות מחשוב עצמאיות (Self-Hosting) ופיתוח תהליכי עבודה אוטונומיים עם כלי AI מתקדמים.',
      'about-quote': '"מאמין בתכנון מערכות נקי, פיתוח כלים מעשיים וחיבור יסודות חומרה עם תוכנה מודרנית."',
      'feat-tag': '⭐ פרויקט דגל נבחר',
      'feat-badge': 'אקוסיסטם ROCIs Apps',
      'feat-title': 'ROCIs Tasks',
      'feat-desc': 'אפליקציית ניהול משימות ופרודוקטיביות חכמה: צ\'קליסטים, קבצים מצורפים, הזנת משימות בשפה טבעית, סנכרון Offline מלא ואינטגרציה חלקה ל-Google Calendar.',
      'heading-doing': 'מה אני עושה',
      'svc-mobile-title': 'פיתוח אפליקציות ומובייל',
      'svc-mobile-desc': 'פיתוח אפליקציות Flutter & Dart חוצות-פלטפורמות (Android & iOS), עיצוב ממשקי משתמש מודרניים, ניהול State מתקדם ומונטיזציה עם RevenueCat SDK.',
      'svc-ee-title': 'הנדסת חשמל ויסודות חומרה',
      'svc-ee-desc': 'לימודים אקדמיים בהנדסת חשמל: ניתוח מעגלים חשמליים, פיזיקה, גלים ואותות, מערכות משובצות מחשב ותכנות C ברמת החומרה.',
      'svc-sys-title': 'תשתיות מחשוב, שרתים ו-GitOps',
      'svc-sys-desc': 'תפעול שרת Raspberry Pi 5 עצמאי (8GB, 1TB NVMe, Debian 13) המריץ מעל 30 שירותי Docker Compose, רשת Zero Trust ואוטומציית תחזוקה.',
      'svc-sys-btn': 'צפה בארכיטקטורה',
      'svc-ai-title': 'כלי AI וסוכנים אוטונומיים',
      'svc-ai-desc': 'תכנון תהליכי פיתוח מותאמים אישית באמצעות פרוטוקול Model Context Protocol (MCP), סוכנים אוטונומיים וסביבת Google Antigravity IDE.'
    },
    experience: {
      'heading-exp': '<i class="fa-solid fa-briefcase" style="color: var(--accent-red); margin-left: 0.4rem;"></i> ניסיון מקצועי ופיקודי',
      'exp1-title': 'מפקד מחלקת מחשוב ותשתיות',
      'exp1-meta': 'צבא ההגנה לישראל • 2024 – 2025',
      'exp1-desc': 'פיקוד וניהול על מחלקת מחשוב ותקשוב המונה כ-10 אנשי צוות, מתן מענה לתקלות מחשוב, שרתים ותשתיות קריטיות בזמן חירום ופעילות מבצעית אינטנסיבית. אחריות על הקמת חמ״לים ותשתיות תקשורת ומחשוב ארעיות בשטח, פיתוח רכב פיקוד מבצעי והובלת פתרונות טכנולוגיים מורכבים.',
      'exp2-title': 'מומחה מערכות מחשוב ותקשורת (סמל מחלקה)',
      'exp2-meta': 'צבא ההגנה לישראל • 2021 – 2024',
      'exp2-desc': 'ניהול תשתיות רשת ומחשוב ארגוניות, Active Directory, תחזוקת מערכות שליטה ובקרה (שו״ב) ומחשוב טקטי, והקמת עמדות מחשוב מבצעיות בשטח באמצעות ערכות ייעודיות.',
      'heading-edu': '<i class="fa-solid fa-graduation-cap" style="color: var(--accent-red); margin-left: 0.4rem;"></i> השכלה ולימודים אקדמיים',
      'edu1-title': 'תואר ראשון בהנדסת חשמל (B.Sc.)',
      'edu1-meta': 'סטודנט לתואר ראשון • לימודים אקדמיים',
      'edu1-desc': 'התמקדות בתורת המעגלים החשמליים, אותות ומערכות, פיזיקה אלקטרומגנטית, מכניקה קלאסית ומודלים מתמטיים הנדסיים.',
      'edu2-title': 'מגמת מכטרוניקה ובקרת מכונות',
      'edu2-meta': 'תיכון ׳אדם׳ ירושלים • 2018 – 2021',
      'edu2-desc': 'תעודת בגרות טכנולוגית מלאה: 5 יח״ל מדעי המחשב, 5 יח״ל מערכות מכטרוניקה, 5 יח״ל בקרת מכונות, 5 יח״ל מתמטיקה ו-5 יח״ל אנגלית.',
      'heading-certs': '<i class="fa-solid fa-certificate" style="color: var(--accent-red); margin-left: 0.4rem;"></i> הסמכות והכשרות מקצועיות',
      'cert1-title': 'CCNA ניתוב ומיתוג רשתות',
      'cert2-title': 'IT Essentials חומרה ומערכות הפעלה',
      'cert3-title': 'קורס תכנות Python',
      'cert4-title': 'טכנאי מערכות מחשוב ותקשורת',
      'heading-skills': '<i class="fa-solid fa-screwdriver-wrench" style="color: var(--accent-red); margin-left: 0.4rem;"></i> ארגז כלים ומיומנויות',
      'skill-cat-mobile': 'פיתוח מובייל ואפליקציות',
      'skill-cat-systems': 'תשתיות, רשתות ומעבדת בית',
      'skill-cat-hardware': 'חומרה, מכטרוניקה ושפות קוד',
      'skill-cat-ai': 'כלי AI ומתודולוגיות',
      'skill-leadership': '👥 מנהיגות, פיקוד וניהול צוות',
      'skill-pressure': '⏱️ תפקוד ופתרון תקלות תחת לחץ'
    },
    contact: {
      'toast-msg': '🚀 פותח את תוכנת הדוא״ל שלך...'
    }
  }
};

let currentLang = localStorage.getItem('roee_portfolio_lang') || 'en';

// Global applyLanguage function
window.applyLanguage = function(lang) {
  currentLang = lang;
  localStorage.setItem('roee_portfolio_lang', lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'he') ? 'rtl' : 'ltr';

  const langLabel = document.getElementById('lang-label');
  if (langLabel) {
    langLabel.textContent = translations[lang].lang_label;
  }

  const sectionTitle = document.getElementById('section-title');
  const activeTab = document.querySelector('.nav-btn.active')?.getAttribute('data-tab') || 'about';
  if (sectionTitle && translations[lang].tab_titles[activeTab]) {
    sectionTitle.textContent = translations[lang].tab_titles[activeTab];
  }

  const dict = translations[lang];

  // Helper safely updating elements
  const updateGroup = (group) => {
    if (!group) return;
    Object.entries(group).forEach(([id, text]) => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = text;
    });
  };

  updateGroup(dict.sidebar);
  updateGroup(dict.nav);
  updateGroup(dict.about);
  updateGroup(dict.experience);
};

// Global toggleLanguage function
window.toggleLanguage = function() {
  const newLang = (currentLang === 'en') ? 'he' : 'en';
  window.applyLanguage(newLang);
};

// DOM Ready bindings
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const sectionTitle = document.getElementById('section-title');
  const langToggleBtn = document.getElementById('lang-toggle');

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', window.toggleLanguage);
  }

  // Initialize
  window.applyLanguage(currentLang);

  // Tab switching
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanes.forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === targetTab) {
          pane.classList.add('active');
        }
      });

      if (sectionTitle && translations[currentLang].tab_titles[targetTab]) {
        sectionTitle.textContent = translations[currentLang].tab_titles[targetTab];
      }

      if (history.pushState) {
        history.pushState(null, null, `#${targetTab}`);
      } else {
        location.hash = `#${targetTab}`;
      }

      if (window.innerWidth < 1024) {
        document.querySelector('.main-content').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Handle URL hash
  function activateTabFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && translations['en'].tab_titles[hash]) {
      const btn = document.querySelector(`.nav-btn[data-tab="${hash}"]`);
      if (btn) btn.click();
    }
  }

  activateTabFromHash();
  window.addEventListener('hashchange', activateTabFromHash);

  // Filter Projects
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const mailtoUrl = `mailto:roeeilouz@gmail.com?subject=Contact%20from%20ilouz.xyz%20(${encodeURIComponent(name)})&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
      
      window.location.href = mailtoUrl;

      if (toast) {
        toast.textContent = translations[currentLang].contact['toast-msg'];
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3500);
      }

      contactForm.reset();
    });
  }
});
