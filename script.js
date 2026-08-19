/**
 * ROEE ILOUZ (ROCI) - PORTFOLIO INTERACTIVITY & COMPREHENSIVE BILINGUAL ENGINE
 * Tab Switching, Full Localization (EN/HE), Dynamic Titles, Smooth Filter Animations, Copy Email
 */

// Comprehensive Translation Dictionaries
const translations = {
  en: {
    lang_label: 'עברית',
    doc_title_prefix: 'Roee Ilouz (ROCI) — ',
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
      'text-request-cv': 'Download CV (PDF)'
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
    projects: {
      'text-filter-all': 'All',
      'text-filter-mobile': 'Mobile Apps',
      'text-filter-systems': 'Systems & Lab',
      'text-filter-ai': 'AI & Tools',
      'proj1-tag': 'Flagship Mobile App',
      'proj1-name': 'ROCIs Tasks',
      'proj1-desc': 'Smart productivity, task management, checklists, attachments, natural language input, offline synchronization, and seamless Google Calendar integration.',
      'proj1-btn-repo': 'Repo',
      'proj2-tag': 'Ecosystem & Web Hub',
      'proj2-name': 'ROCIs Apps Platform',
      'proj2-desc': 'The official home of the ROCIs Apps brand suite. Showcasing modern mobile apps, design systems, software releases, privacy policies, and web experiences.',
      'proj2-btn-play': 'Play Store',
      'proj3-tag': 'AI Workflows',
      'proj3-name': 'Agentic Workflows & MCP',
      'proj3-desc': 'Developing custom agentic frameworks and Model Context Protocol (MCP) integrations for automated developer tooling and IDE accelerators.',
      'proj3-btn-explore': 'Explore',
      'proj4-tag': 'Production Homelab & GitOps',
      'proj4-name': 'Raspberry Pi 5 Infrastructure',
      'proj4-desc': 'High-performance 24/7 ARM64 node (8GB RAM, 1TB NVMe SSD) running Debian 13, Zero Trust ingress (Cloudflare/Twingate), VPN kill-switch, and 30+ containerized services.',
      'proj4-btn-repo': 'Homelab Repo',
      'proj4-btn-arch': 'Architecture',
      'proj5-tag': 'Personal Digital Hub',
      'proj5-name': 'roee.ilouz.xyz',
      'proj5-desc': 'Personal digital headquarters and interactive web application hub, built for ultra-fast performance and clean glassmorphism UX.',
      'proj5-btn-live': 'Live Site',
      'proj5-btn-code': 'Code'
    },
    homelab: {
      'hl-banner-tag': '🌌 Infrastructure & GitOps',
      'hl-banner-badge': '24/7 Production Node',
      'hl-banner-title': 'Raspberry Pi 5 Homelab Node',
      'hl-banner-desc': 'High-performance ARM64 node running <b>Debian GNU/Linux 13 (Trixie)</b>, orchestrating 30+ containerized microservices across media, telemetry, AI, and Zero Trust networking.',
      'hl-banner-btn': 'Explore Homelab GitOps Repo',
      'hl-hw-heading': '<i class="fa-solid fa-microchip" style="color: var(--accent-red);"></i> Hardware Subsystem & Topology',
      'hl-hw-soc-title': 'Host SoC Node',
      'hl-hw-soc-val': 'RPi 5 8GB (4x Cortex-A76 @ 2.4GHz)',
      'hl-hw-storage-title': 'Primary High-Speed Storage',
      'hl-hw-storage-val': '1.0 TB NVMe SSD (PCIe M.2 HAT)',
      'hl-hw-os-title': 'Operating System',
      'hl-hw-os-val': 'Debian 13 (Trixie ARM64)',
      'hl-hw-cooling-title': 'Thermal Management',
      'hl-hw-cooling-val': 'Active PWM Cooler (42°C – 55°C)',
      'hl-sec-heading': '<i class="fa-solid fa-shield-halved" style="color: var(--accent-red);"></i> Zero Trust Ingress & Security',
      'hl-sec-cf-title': 'Cloudflare Tunnels & NPM',
      'hl-sec-cf-desc': 'Perimeter-less ingress via Cloudflare Tunnels (Zero Trust) paired with Nginx Proxy Manager for internal routing and automated Let\'s Encrypt SSL.',
      'hl-sec-twin-title': 'Twingate Zero Trust & VPN Gateway',
      'hl-sec-twin-desc': 'Zero Trust remote mesh access via Twingate Connectors, alongside isolated container network namespaces with strict kernel kill-switch enforcement.',
      'hl-stacks-heading': '<i class="fa-solid fa-layer-group" style="color: var(--accent-red);"></i> Modular Stacks & Services (30+ Microservices)',
      'hl-media-title': 'Personal Cloud & Media Pipeline',
      'hl-media-desc': 'Self-hosted personal streaming engine, user request portals, automated data ingestion pipelines, and AI-powered photo archiving with pgvector ML.',
      'hl-mgmt-title': 'Management & Observability',
      'hl-mgmt-desc': 'Unified dashboards, container orchestration, metrics collectors, ping monitors, and real-time sensor telemetry.',
      'hl-ai-title': 'AI, Knowledge & Home Automation',
      'hl-ai-desc': 'Local LLM model inference, autonomous agent daemons, home automation hubs, vector bookmarking, and instant push notifications.',
      'hl-mesh-title': 'Native Systemd & Private Mesh',
      'hl-mesh-desc': 'Browser-based VS Code environment, encrypted remote desktop relay, private mesh networking, and remote hardware management.',
      'hl-ops-heading': '<i class="fa-solid fa-gears" style="color: var(--accent-red);"></i> GitOps & Automated Operations',
      'hl-ops-subtitle': '# Automated Daily / Weekly Health & Retention Scripts',
      'hl-ops-backup': 'Automated encrypted backup archives with scheduled retention pruning',
      'hl-ops-health': 'Real-time sensor, thermal range, memory pressure & container diagnostics',
      'hl-ops-update': 'Non-destructive container pull, compose rebuild & dangling image prune'
    },
    contact: {
      'contact-heading': 'Let\'s Connect',
      'contact-intro': 'Whether you want to discuss Flutter / mobile app development, electrical engineering topics, self-hosted systems, or just chat:',
      'placeholder-name': 'Your Name',
      'placeholder-email': 'Your Email',
      'placeholder-message': 'Your Message...',
      'text-btn-submit': 'Send Message',
      'text-copy-email': 'Copy Email',
      'toast-msg-email': '🚀 Opening your email client...',
      'toast-msg-copied': '📋 Email copied to clipboard (roee.ilouz@gmail.com)!'
    }
  },
  he: {
    lang_label: 'English',
    doc_title_prefix: 'רועי אילוז — ',
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
      'text-request-cv': 'הורדת קורות חיים (PDF)'
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
    projects: {
      'text-filter-all': 'הכל',
      'text-filter-mobile': 'אפליקציות מובייל',
      'text-filter-systems': 'שרתים ומערכות',
      'text-filter-ai': 'כלי AI',
      'proj1-tag': 'אפליקציית דגל',
      'proj1-name': 'ROCIs Tasks',
      'proj1-desc': 'אפליקציית ניהול משימות ופרודוקטיביות חכמה: צ\'קליסטים, קבצים מצורפים, הזנה בשפה טבעית, סנכרון Offline מלא ואינטגרציה ל-Google Calendar.',
      'proj1-btn-repo': 'קוד מקור',
      'proj2-tag': 'סביבת מותג ואתר רשמי',
      'proj2-name': 'פלטפורמת ROCIs Apps',
      'proj2-desc': 'הבית הרשמי של סוויטת מוצרי ROCIs Apps. מציג אפליקציות מובייל מודרניות, שפות עיצוב, גרסאות תוכנה, מדיניות פרטיות וחוויות רשת.',
      'proj2-btn-play': 'חנות Play',
      'proj3-tag': 'תהליכי AI וסוכנים אוטונומיים',
      'proj3-name': 'סוכני AI ופרוטוקול MCP',
      'proj3-desc': 'פיתוח סביבות עבודה מבוססות סוכני AI ואינטגרציות Model Context Protocol (MCP) לאוטומציה של כלי פיתוח והרחבות IDE.',
      'proj3-btn-explore': 'גלה עוד',
      'proj4-tag': 'מעבדת ייצור ו-GitOps',
      'proj4-name': 'תשתית Raspberry Pi 5',
      'proj4-desc': 'צומת ARM64 בעל ביצועים גבוהים הפועל 24/7 (8GB זיכרון, 1TB NVMe SSD) על גבי Debian 13, עם גישת Zero Trust, שער VPN ומעל 30 שירותי קונטיינרים.',
      'proj4-btn-repo': 'מאגר Homelab',
      'proj4-btn-arch': 'ארכיטקטורה',
      'proj5-tag': 'האתר והפורטפוליו האישי',
      'proj5-name': 'roee.ilouz.xyz',
      'proj5-desc': 'מרכז הפעילות הדיגיטלי והאתר האישי, בנוי לביצועים מהירים במיוחד וחוויית Glassmorphism נקייה.',
      'proj5-btn-live': 'אתר חי',
      'proj5-btn-code': 'קוד מקור'
    },
    homelab: {
      'hl-banner-tag': '🌌 תשתיות מחשוב ו-GitOps',
      'hl-banner-badge': 'צומת ייצור 24/7',
      'hl-banner-title': 'שרת ביתי Raspberry Pi 5',
      'hl-banner-desc': 'צומת ARM64 בעל ביצועים גבוהים המריץ <b>Debian GNU/Linux 13 (Trixie)</b>, ומנהל מעל 30 שירותי מיקרו-קונטיינרים בתחומי ענן אישי, ניטור, AI ורשתות Zero Trust.',
      'hl-banner-btn': 'צפה במאגר ה-GitOps ב-GitHub',
      'hl-hw-heading': '<i class="fa-solid fa-microchip" style="color: var(--accent-red);"></i> מפרט חומרה וטופולוגיה',
      'hl-hw-soc-title': 'מעבד ומערכת על שבב',
      'hl-hw-soc-val': 'RPi 5 8GB (4x Cortex-A76 @ 2.4GHz)',
      'hl-hw-storage-title': 'אחסון NVMe מהיר',
      'hl-hw-storage-val': '1.0 TB NVMe SSD (PCIe M.2 HAT)',
      'hl-hw-os-title': 'מערכת הפעלה',
      'hl-hw-os-val': 'Debian 13 (Trixie ARM64)',
      'hl-hw-cooling-title': 'ניהול תרמי וקירור',
      'hl-hw-cooling-val': 'קירור אקטיבי PWM (42°C – 55°C)',
      'hl-sec-heading': '<i class="fa-solid fa-shield-halved" style="color: var(--accent-red);"></i> אבטחת מידע ורשתות Zero Trust',
      'hl-sec-cf-title': 'מנהרות Cloudflare ו-NPM',
      'hl-sec-cf-desc': 'גישה מאובטחת ללא פתיחת פורטים באמצעות Cloudflare Zero Trust Tunnels בשילוב Nginx Proxy Manager לניתוב פנימי ותעודות Let\'s Encrypt SSL אוטומטיות.',
      'hl-sec-twin-title': 'רשת Twingate ושער VPN',
      'hl-sec-twin-desc': 'גישה מרחוק באמצעות מחברי Twingate Zero Trust, לצד בידוד רשתי ברמת ה-Kernel ושער VPN עם מנגנון Kill-Switch קפדני.',
      'hl-stacks-heading': '<i class="fa-solid fa-layer-group" style="color: var(--accent-red);"></i> שירותים ומערכים מודולריים (מעל 30 שירותים)',
      'hl-media-title': 'ענן אישי והזרמת מדיה',
      'hl-media-desc': 'מערך הזרמת מדיה עצמאי, פורטלי בקשות, תהליכי איסוף נתונים אוטומטיים וגיבוי תמונות מבוסס בינה מלאכותית (pgvector ML).',
      'hl-mgmt-title': 'ניהול, ניטור וטלמטריה',
      'hl-mgmt-desc': 'לוחות בקרה אחודים, ניהול קונטיינרים, איסוף מדדי ביצועים, ניטור זמינות שרתים וטלמטריית חיישנים בזמן אמת.',
      'hl-ai-title': 'בינה מלאכותית, ידע ואוטומציה',
      'hl-ai-desc': 'הרצת מודלי שפה (LLM) מקומית, סוכנים אוטונומיים, מרכז בקרת בית חכם, ניהול ידע וסימניות וקבלת התראות Push בזמן אמת.',
      'hl-mesh-title': 'סביבת פיתוח ורשת פרטית',
      'hl-mesh-desc': 'סביבת פיתוח VS Code דרך הדפדפן, ממסר שליטה מרחוק מוצפן, רשת Mesh פרטית וניהול חומרה מרוחק.',
      'hl-ops-heading': '<i class="fa-solid fa-gears" style="color: var(--accent-red);"></i> תפעול אוטומטי ו-GitOps',
      'hl-ops-subtitle': '# סקריפטים אוטומטיים לתחזוקה, בריאות וגיבויים',
      'hl-ops-backup': 'ארכיוני גיבוי מוצפנים אוטומטיים עם מחיקת גרסאות ישנות מתוזמנת',
      'hl-ops-health': 'אבחון חיישנים, טמפרטורה, עומס זיכרון ותקינות קונטיינרים בזמן אמת',
      'hl-ops-update': 'משיכת גרסאות חדשות, בנייה מחדש ללא השבתה וניקוי תמונות מיותרות'
    },
    contact: {
      'contact-heading': 'בואו נדבר',
      'contact-intro': 'בין אם תרצו לדבר על פיתוח אפליקציות מובייל ב-Flutter, הנדסת חשמל, מערכות מחשוב עצמאיות או סתם להתייעץ:',
      'placeholder-name': 'שמך מלא',
      'placeholder-email': 'כתובת הדוא״ל שלך',
      'placeholder-message': 'הודעתך...',
      'text-btn-submit': 'שלח הודעה',
      'text-copy-email': 'העתק אימייל',
      'toast-msg-email': '🚀 פותח את תוכנת הדוא״ל שלך...',
      'toast-msg-copied': '📋 כתובת הדוא״ל הועתקה ללוח (roee.ilouz@gmail.com)!'
    }
  }
};

let currentLang = localStorage.getItem('roee_portfolio_lang') || 'en';

// Helper safely updating elements
function updateGroup(group) {
  if (!group) return;
  Object.entries(group).forEach(([id, text]) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = text;
  });
}

// Update Document <title>
function updatePageTitle(tab) {
  const activeTab = tab || document.querySelector('.nav-btn.active')?.getAttribute('data-tab') || 'about';
  const prefix = translations[currentLang].doc_title_prefix;
  const tabName = translations[currentLang].tab_titles[activeTab] || 'Portfolio';
  document.title = `${prefix}${tabName}`;
}

// Apply Language & Direction across the entire document
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

  updatePageTitle(activeTab);

  const dict = translations[lang];

  // Update all sections
  updateGroup(dict.sidebar);
  updateGroup(dict.nav);
  updateGroup(dict.about);
  updateGroup(dict.experience);
  updateGroup(dict.projects);
  updateGroup(dict.homelab);
  updateGroup(dict.contact);

  // Update form inputs placeholder
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  if (nameInput) nameInput.placeholder = dict.contact['placeholder-name'];
  if (emailInput) emailInput.placeholder = dict.contact['placeholder-email'];
  if (messageInput) messageInput.placeholder = dict.contact['placeholder-message'];
};

// Global toggleLanguage function (called exclusively via event listener)
window.toggleLanguage = function() {
  const newLang = (currentLang === 'en') ? 'he' : 'en';
  window.applyLanguage(newLang);
};

// DOM Ready initialization
document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');
  const sectionTitle = document.getElementById('section-title');
  const langToggleBtn = document.getElementById('lang-toggle');

  // Single Click listener for Language Switcher
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.toggleLanguage();
    });
  }

  // Initialize Language
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

      updatePageTitle(targetTab);

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

  // Handle URL hash on load
  function activateTabFromHash() {
    const hash = window.location.hash.replace('#', '');
    if (hash && translations['en'].tab_titles[hash]) {
      const btn = document.querySelector(`.nav-btn[data-tab="${hash}"]`);
      if (btn) btn.click();
    }
  }

  activateTabFromHash();
  window.addEventListener('hashchange', activateTabFromHash);

  // Filter Projects with Smooth Card Transitions
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
          card.style.animation = 'none';
          // Trigger DOM reflow for smooth scale/fade-in
          void card.offsetWidth;
          card.style.animation = 'fadeInCard 0.35s ease-out forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Toast Helper
  const toast = document.getElementById('toast');
  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  // Copy Email to Clipboard Action
  const btnCopyEmail = document.getElementById('btn-copy-email');
  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', () => {
      const email = 'roee.ilouz@gmail.com';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast(translations[currentLang].contact['toast-msg-copied']);
        }).catch(() => {
          showToast(`Email: ${email}`);
        });
      } else {
        // Fallback for older browsers
        const temp = document.createElement('textarea');
        temp.value = email;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(translations[currentLang].contact['toast-msg-copied']);
      }
    });
  }

  // Contact Form Submission (Mailto fallback)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const mailtoUrl = `mailto:roee.ilouz@gmail.com?subject=Contact%20from%20ilouz.xyz%20(${encodeURIComponent(name)})&body=${encodeURIComponent(message)}%0A%0AFrom:%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})`;
      
      window.location.href = mailtoUrl;
      showToast(translations[currentLang].contact['toast-msg-email']);
      contactForm.reset();
    });
  }
});
