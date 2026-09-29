export type Lang = 'en' | 'he';

export const translations = {
  en: {
    meta: {
      title: 'Roee Ilouz — Electrical Engineering Student & Mobile Developer',
      description:
        'Portfolio of Roee Ilouz (ROCI): Electrical Engineering student at Afeka, Flutter & Dart mobile developer behind ROCIs Apps, and self-hosted infrastructure builder.'
    },
    lang_switch: { label: 'עברית', href: '/he/', hreflang: 'he', aria: 'Switch to Hebrew' },
    skip: 'Skip to content',
    nav: {
      about: 'About',
      projects: 'Projects',
      notes: 'Notes',
      experience: 'Experience',
      homelab: 'Homelab',
      contact: 'Contact'
    },
    sidebar: {
      name: 'Roee Ilouz',
      role: 'EE Student · Mobile Developer',
      available: 'Open to student & junior roles',
      label_education: 'Education',
      val_education: 'B.Sc. EE, Afeka College',
      label_location: 'Location',
      val_location: 'Jerusalem, Israel',
      label_languages: 'Languages',
      val_languages: 'Hebrew, English',
      ecosystem: 'ROCIs Apps',
      status_live: 'Live',
      status_wip: 'In dev',
      cta: 'Get in touch'
    },
    about: {
      eyebrow: 'About',
      title: 'Electrical engineering student. I ship production apps and run the infrastructure under them.',
      lede:
        "I'm Roee, an Electrical Engineering student at Afeka College. In the IDF I led an IT and infrastructure department of about 10 technicians. Today I build <strong>ROCIs Apps</strong>: Flutter apps with a web version and over-the-air releases, running on backend and self-hosted infrastructure I set up and maintain myself.",
      cta_projects: 'View projects',
      cta_contact: 'Contact me',
      metrics: {
        tests: 'Automated tests',
        languages: 'App languages',
        led: 'Technicians led (IDF)',
        degree: 'Electrical Engineering'
      },
      featured_heading: 'Featured work',
      tasks: {
        sub: 'Productivity · Android',
        status: 'Live on Google Play',
        desc: 'Smart task manager with checklists, attachments, and natural-language input, built to work offline first.',
        points: [
          'Offline-first sync with local persistence',
          'Natural-language task entry',
          'Google Calendar sync & RevenueCat subscriptions'
        ],
        btn_web: 'Web app'
      },
      schedule: {
        sub: 'Education · Android & iOS',
        status: 'In development',
        desc: 'Academic companion that brings your timetable, exams, assignments, and GPA into one offline-first app.',
        points: [
          'Weekly timetable with live exam countdowns',
          'Weighted 4.0 GPA tracker',
          '.ics import from Canvas & Moodle, bridge to ROCIs Tasks'
        ],
        btn_page: 'Product page'
      },
      btn_source: 'Source',
      doing_heading: 'What I do',
      svc_mobile_title: 'Mobile development',
      svc_mobile_desc:
        'Cross-platform apps in Flutter & Dart with Clean Architecture, fluid responsive UI, solid state management, and subscription monetization via RevenueCat.',
      svc_ee_title: 'Electrical engineering',
      svc_ee_desc:
        'B.Sc. studies covering circuit analysis, signals & systems, electromagnetics, physics, and low-level embedded hardware.',
      svc_sys_title: 'Self-hosted systems & GitOps',
      svc_sys_desc:
        'A 24/7 Raspberry Pi 5 server (8 GB, 1 TB NVMe) orchestrating 30+ Docker services behind Zero Trust access.',
      svc_sys_btn: 'See the architecture',
      svc_ai_title: 'AI-assisted developer tooling',
      svc_ai_desc:
        'Developer workflows built on the Model Context Protocol (MCP), autonomous agent tools, and Google Antigravity IDE.'
    },
    notes: {
      eyebrow: 'Engineering notes',
      title: 'How it actually works',
      lede: 'Write-ups of real problems from building ROCIs Apps: what broke, why, and how I fixed it.',
      min: 'min read',
      english_only: ''
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected projects',
      lede: 'Apps, platforms, and infrastructure I design, build, and maintain. Repository stats sync live from GitHub.',
      filter_label: 'Filter projects',
      filter_all: 'All',
      filter_mobile: 'Mobile',
      filter_web: 'Web',
      filter_systems: 'Systems',
      search_placeholder: 'Search by name or technology…',
      search_label: 'Search projects',
      search_clear: 'Clear search',
      no_results: 'No projects match your search.',
      view_all_github: 'All repositories',
      stars: 'Stars',
      forks: 'Forks',
      updated: 'Last push',
      status_live: 'Live',
      status_wip: 'In development',
      status_active: 'Active',
      btn_repo: 'Repository',
      btn_play: 'Play Store',
      btn_homelab_repo: 'Homelab repo',
      btn_arch: 'Architecture',
      btn_live: 'Live site',
      btn_code: 'Source'
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Experience & education',
      heading_exp: 'Leadership & professional',
      heading_edu: 'Education',
      heading_certs: 'Certifications',
      heading_skills: 'Skills & toolkit',
      learning: 'learning'
    },
    homelab: {
      eyebrow: 'Homelab',
      title: 'Home lab & systems',
      lede: 'A production-grade ARM64 node I run 24/7: containerized services, Zero Trust networking, and automated operations managed through GitOps.',
      banner_title: 'Raspberry Pi 5 node',
      banner_desc:
        'Runs <strong>Raspberry Pi OS Lite (64-bit)</strong> and orchestrates 30+ containerized services across media, observability, AI, and Zero Trust networking.',
      banner_chips: ['24/7 uptime', 'ARM64', '30+ services', 'No open ports'],
      banner_btn: 'Explore the GitOps repo',
      hw_heading: 'Hardware',
      sec_heading: 'Zero Trust ingress & security',
      stacks_heading: 'Service stacks',
      ops_heading: 'Automated operations'
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      lede:
        "Whether it's a student or junior role, Flutter development, electrical engineering, or self-hosted systems, I'd be glad to hear from you.",
      email_label: 'Email',
      github_label: 'GitHub',
      location_label: 'Based in',
      placeholder_name: 'Your name',
      placeholder_email: 'you@example.com',
      placeholder_message: 'How can I help?',
      label_name: 'Name',
      label_email: 'Email',
      label_message: 'Message',
      btn_submit: 'Send message',
      btn_copy_email: 'Copy',
      copy_aria: 'Copy email address',
      form_note: 'Opens your email app with the message pre-filled. Nothing is stored on this site.',
      toast_email: 'Opening your email app…',
      toast_copied: 'Email address copied'
    },
    footer: {
      rights: 'Roee Ilouz. All rights reserved.',
      built: 'Built with Astro',
      source: 'Source'
    }
  },
  he: {
    meta: {
      title: 'רועי אילוז — סטודנט להנדסת חשמל ומפתח מובייל',
      description:
        'הפורטפוליו של רועי אילוז (ROCI): סטודנט להנדסת חשמל באפקה, מפתח Flutter & Dart מאחורי ROCIs Apps ובונה תשתיות מחשוב עצמאיות.'
    },
    lang_switch: { label: 'English', href: '/', hreflang: 'en', aria: 'Switch to English' },
    skip: 'דלג לתוכן',
    nav: {
      about: 'אודות',
      projects: 'פרויקטים',
      notes: 'רשימות',
      experience: 'ניסיון',
      homelab: 'Homelab',
      contact: 'צור קשר'
    },
    sidebar: {
      name: 'רועי אילוז',
      role: 'סטודנט להנדסת חשמל · מפתח מובייל',
      available: 'פתוח למשרות סטודנט וג׳וניור',
      label_education: 'השכלה',
      val_education: 'B.Sc. הנדסת חשמל, אפקה',
      label_location: 'מיקום',
      val_location: 'ירושלים, ישראל',
      label_languages: 'שפות',
      val_languages: 'עברית, אנגלית',
      ecosystem: 'ROCIs Apps',
      status_live: 'פעיל',
      status_wip: 'בפיתוח',
      cta: 'צור קשר'
    },
    about: {
      eyebrow: 'אודות',
      title: 'סטודנט להנדסת חשמל. אני משחרר אפליקציות לפרודקשן ומתחזק את התשתית שמתחתן.',
      lede:
        'אני רועי, סטודנט להנדסת חשמל במכללת אפקה. בצה״ל פיקדתי על מחלקת מחשוב ותשתיות של כ-10 טכנאים. היום אני בונה את <strong>ROCIs Apps</strong>: אפליקציות Flutter עם גרסת ווב ועדכונים באוויר, שרצות על תשתית ענן ושרת ביתי שהקמתי ואני מתחזק בעצמי.',
      cta_projects: 'לפרויקטים',
      cta_contact: 'צור קשר',
      metrics: {
        tests: 'בדיקות אוטומטיות',
        languages: 'שפות באפליקציה',
        led: 'טכנאים בפיקודי (צה״ל)',
        degree: 'הנדסת חשמל'
      },
      featured_heading: 'עבודות נבחרות',
      tasks: {
        sub: 'פרודוקטיביות · Android',
        status: 'זמין ב-Google Play',
        desc: 'מנהל משימות חכם עם צ׳קליסטים, קבצים מצורפים והזנה בשפה טבעית, שנבנה לעבודה Offline-first.',
        points: [
          'סנכרון Offline-first עם שמירה מקומית',
          'הזנת משימות בשפה טבעית',
          'סנכרון Google Calendar ומנויי RevenueCat'
        ],
        btn_web: 'אפליקציית ווב'
      },
      schedule: {
        sub: 'חינוך · Android & iOS',
        status: 'בפיתוח',
        desc: 'עוזר אקדמי שמרכז מערכת שעות, בחינות, מטלות וממוצע ציונים באפליקציה אחת שעובדת גם ללא חיבור.',
        points: [
          'מערכת שעות שבועית עם ספירה לאחור לבחינות',
          'מחשבון GPA משוקלל בסולם 4.0',
          'ייבוא ‎.ics מ-Canvas ו-Moodle וחיבור ל-ROCIs Tasks'
        ],
        btn_page: 'דף המוצר'
      },
      btn_source: 'קוד מקור',
      doing_heading: 'מה אני עושה',
      svc_mobile_title: 'פיתוח מובייל',
      svc_mobile_desc:
        'אפליקציות חוצות-פלטפורמות ב-Flutter & Dart בארכיטקטורת Clean Architecture, ממשק רספונסיבי, ניהול State מסודר ומנויים באמצעות RevenueCat.',
      svc_ee_title: 'הנדסת חשמל',
      svc_ee_desc:
        'לימודי B.Sc. הכוללים ניתוח מעגלים, אותות ומערכות, אלקטרומגנטיות, פיזיקה וחומרה משובצת מחשב.',
      svc_sys_title: 'תשתיות עצמאיות ו-GitOps',
      svc_sys_desc:
        'שרת Raspberry Pi 5 (‏8GB, ‏1TB NVMe) שפועל 24/7 ומריץ מעל 30 שירותי Docker מאחורי גישת Zero Trust.',
      svc_sys_btn: 'לארכיטקטורה',
      svc_ai_title: 'כלי פיתוח מבוססי AI',
      svc_ai_desc:
        'תהליכי פיתוח המבוססים על Model Context Protocol ‏(MCP), כלי סוכנים אוטונומיים וסביבת Google Antigravity IDE.'
    },
    notes: {
      eyebrow: 'רשימות הנדסיות',
      title: 'איך זה עובד באמת',
      lede: 'תיעוד של בעיות אמיתיות מבניית ROCIs Apps: מה נשבר, למה, ואיך תיקנתי.',
      min: 'דק׳ קריאה',
      english_only: 'באנגלית'
    },
    projects: {
      eyebrow: 'פרויקטים',
      title: 'פרויקטים נבחרים',
      lede: 'אפליקציות, פלטפורמות ותשתיות שאני מתכנן, בונה ומתחזק. נתוני המאגרים מסונכרנים בזמן אמת מ-GitHub.',
      filter_label: 'סינון פרויקטים',
      filter_all: 'הכל',
      filter_mobile: 'מובייל',
      filter_web: 'ווב',
      filter_systems: 'מערכות',
      search_placeholder: 'חיפוש לפי שם או טכנולוגיה…',
      search_label: 'חיפוש פרויקטים',
      search_clear: 'נקה חיפוש',
      no_results: 'לא נמצאו פרויקטים התואמים לחיפוש.',
      view_all_github: 'כל המאגרים',
      stars: 'כוכבים',
      forks: 'פיצולים',
      updated: 'עדכון אחרון',
      status_live: 'פעיל',
      status_wip: 'בפיתוח',
      status_active: 'פעיל',
      btn_repo: 'מאגר קוד',
      btn_play: 'חנות Play',
      btn_homelab_repo: 'מאגר Homelab',
      btn_arch: 'ארכיטקטורה',
      btn_live: 'אתר חי',
      btn_code: 'קוד מקור'
    },
    experience: {
      eyebrow: 'ניסיון',
      title: 'ניסיון והשכלה',
      heading_exp: 'ניסיון מקצועי ופיקודי',
      heading_edu: 'השכלה',
      heading_certs: 'הסמכות',
      heading_skills: 'מיומנויות וכלים',
      learning: 'בלמידה'
    },
    homelab: {
      eyebrow: 'Homelab',
      title: 'מעבדה ביתית ומערכות',
      lede: 'צומת ARM64 ברמת ייצור שפועל 24/7: שירותי קונטיינרים, רשת Zero Trust ותפעול אוטומטי המנוהל ב-GitOps.',
      banner_title: 'שרת Raspberry Pi 5',
      banner_desc:
        'מריץ <strong>Raspberry Pi OS Lite (64-bit)</strong> ומנהל מעל 30 שירותי קונטיינרים בתחומי מדיה, ניטור, AI ורשתות Zero Trust.',
      banner_chips: ['זמינות 24/7', 'ARM64', '30+ שירותים', 'ללא פורטים פתוחים'],
      banner_btn: 'למאגר ה-GitOps',
      hw_heading: 'חומרה',
      sec_heading: 'גישת Zero Trust ואבטחה',
      stacks_heading: 'מערכי שירותים',
      ops_heading: 'תפעול אוטומטי'
    },
    contact: {
      eyebrow: 'צור קשר',
      title: 'בואו נעבוד יחד',
      lede: 'משרת סטודנט או ג׳וניור, פיתוח Flutter, הנדסת חשמל או תשתיות עצמאיות, אשמח לשמוע מכם.',
      email_label: 'אימייל',
      github_label: 'GitHub',
      location_label: 'מיקום',
      placeholder_name: 'השם שלך',
      placeholder_email: 'you@example.com',
      placeholder_message: 'איך אוכל לעזור?',
      label_name: 'שם',
      label_email: 'אימייל',
      label_message: 'הודעה',
      btn_submit: 'שלח הודעה',
      btn_copy_email: 'העתק',
      copy_aria: 'העתק כתובת אימייל',
      form_note: 'פותח את אפליקציית הדוא״ל שלך עם ההודעה מוכנה. דבר לא נשמר באתר.',
      toast_email: 'פותח את אפליקציית הדוא״ל…',
      toast_copied: 'כתובת האימייל הועתקה'
    },
    footer: {
      rights: 'רועי אילוז. כל הזכויות שמורות.',
      built: 'נבנה עם Astro',
      source: 'קוד מקור'
    }
  }
} as const;

export type Translation = (typeof translations)[Lang];
