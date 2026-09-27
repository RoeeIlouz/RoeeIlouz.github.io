import type { Lang } from '../i18n/translations';

export interface TimelineItem {
  title: Record<Lang, string>;
  meta: Record<Lang, string>;
  description: Record<Lang, string>;
}

export interface CertItem {
  icon: string;
  provider: string;
  title: Record<Lang, string>;
}

export interface SkillCategory {
  title: Record<Lang, string>;
  icon: string;
  skills: {
    label: Record<Lang, string> | string;
    icon?: string;
    learning?: boolean; // currently studying / learning
  }[];
}

export const leadershipExperience: TimelineItem[] = [
  {
    title: {
      en: 'IT & Infrastructure Department Lead (Platoon Commander)',
      he: 'מפקד מחלקת מחשוב ותשתיות'
    },
    meta: {
      en: 'Israel Defense Forces • 2024 – 2025',
      he: 'צבא ההגנה לישראל • 2024 – 2025'
    },
    description: {
      en: 'Commanded and managed an IT and Computing Department of ~10 technicians addressing mission-critical computing and infrastructure under high-pressure conditions. Accountable for emergency field computing infrastructures, mobile command platforms, and cross-functional technical problem solving.',
      he: 'פיקוד וניהול על מחלקת מחשוב ותקשוב המונה כ-10 אנשי צוות, מתן מענה לתקלות מחשוב, שרתים ותשתיות קריטיות בזמן חירום ופעילות מבצעית אינטנסיבית. אחריות על הקמת חמ״לים ותשתיות תקשורת ומחשוב בשטח, והובלת פתרונות טכנולוגיים מורכבים.'
    }
  },
  {
    title: {
      en: 'Systems & Network Specialist (Platoon Sergeant)',
      he: 'אחראי מערכות שליטה ובקרה (וסמל מחלקה)'
    },
    meta: {
      en: 'Israel Defense Forces • 2021 – 2024',
      he: 'צבא ההגנה לישראל • 2021 – 2024'
    },
    description: {
      en: 'Managed enterprise computing infrastructure, Active Directory, network routing/switching, field deployment computing kits, and hardware/software readiness for operational platforms.',
      he: 'ניהול תשתיות רשת ומחשוב ארגוניות, Active Directory, תחזוקת מערכות שליטה ובקרה (שו״ב) ומחשוב טקטי, והקמת עמדות מחשוב מבצעיות בשטח באמצעות ערכות ייעודיות.'
    }
  }
];

export const educationList: TimelineItem[] = [
  {
    title: {
      en: 'B.Sc. in Electrical Engineering',
      he: 'סטודנט לתואר ראשון בהנדסת חשמל (B.Sc.)'
    },
    meta: {
      en: 'Afeka College of Engineering, Tel Aviv • 2024 – 2028 (Expected)',
      he: 'מכללת אפקה להנדסה ומדעים, תל אביב • 2024 – 2028'
    },
    description: {
      en: 'Focusing on electrical circuit theory, linear signals & systems, electromagnetics, classical physics, and mathematical modeling for engineering systems. Coursework emphasizes circuit analysis, signal processing, and low-level embedded hardware.',
      he: 'התמקדות בתורת המעגלים החשמליים, אותות ומערכות ליניאריות, פיזיקה אלקטרומגנטית, מכניקה קלאסית ומודלים מתמטיים הנדסיים. דגש על ניתוח מעגלים, יסודות עיבוד אותות וחומרה משובצת מחשב.'
    }
  },
  {
    title: {
      en: 'Mechatronics & Machine Control',
      he: 'מגמת מכטרוניקה ובקרת מכונות'
    },
    meta: {
      en: "'Adam' High School, Jerusalem • 2018 – 2021",
      he: 'תיכון ׳אדם׳ ירושלים • 2018 – 2021'
    },
    description: {
      en: 'Graduated with 5 Units in Computer Science, 5 Units in Mechatronic Systems, 5 Units in Machine Control, 5 Units in Math, and 5 Units in English.',
      he: 'תעודת בגרות טכנולוגית מלאה: 5 יח״ל מדעי המחשב, 5 יח״ל מערכות מכטרוניקה, 5 יח״ל בקרת מכונות, 5 יח״ל מתמטיקה ו-5 יח״ל אנגלית.'
    }
  }
];

export const certificationsList: CertItem[] = [
  {
    icon: 'fa-solid fa-network-wired',
    provider: 'Cisco Networking Academy',
    title: { en: 'CCNA Routing & Switching', he: 'CCNA ניתוב ומיתוג רשתות' }
  },
  {
    icon: 'fa-solid fa-desktop',
    provider: 'Cisco Networking Academy',
    title: { en: 'IT Essentials: Hardware & OS', he: 'IT Essentials חומרה ומערכות הפעלה' }
  },
  {
    icon: 'fa-brands fa-python',
    provider: 'Programming',
    title: { en: 'Python Programming', he: 'קורס תכנות Python' }
  },
  {
    icon: 'fa-solid fa-microchip',
    provider: 'Technical Training',
    title: { en: 'Computer & Communications Systems Technician', he: 'טכנאי מערכות מחשוב ותקשורת' }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: { en: 'Mobile & Frontend', he: 'מובייל ופרונטאנד' },
    icon: 'fa-solid fa-mobile-screen',
    skills: [
      { label: 'Flutter', icon: 'fa-brands fa-flutter' },
      { label: 'Dart' },
      { label: 'Android', icon: 'fa-brands fa-android' },
      { label: 'iOS', icon: 'fa-brands fa-apple' },
      { label: 'RevenueCat SDK' },
      { label: 'TypeScript / JavaScript', icon: 'fa-brands fa-js' },
      { label: 'HTML & CSS', icon: 'fa-brands fa-html5' },
      { label: 'Astro', learning: true }
    ]
  },
  {
    title: { en: 'Systems & Networking', he: 'תשתיות ורשתות' },
    icon: 'fa-solid fa-network-wired',
    skills: [
      { label: 'Linux (Debian / RPi OS)', icon: 'fa-brands fa-linux' },
      { label: 'Docker & Compose', icon: 'fa-brands fa-docker' },
      { label: 'Cisco CCNA' },
      { label: { en: 'Routing & Switching', he: 'ניתוב ומיתוג' } },
      { label: 'Active Directory' },
      { label: 'Nginx Proxy Manager' },
      { label: 'Zero Trust Tunnels' },
      { label: 'Bash' }
    ]
  },
  {
    title: { en: 'Hardware & Embedded', he: 'חומרה ומערכות משובצות' },
    icon: 'fa-solid fa-microchip',
    skills: [
      { label: { en: 'Circuit Analysis', he: 'ניתוח מעגלים חשמליים' }, learning: true },
      { label: { en: 'Signals & Systems', he: 'אותות ומערכות' }, learning: true },
      { label: { en: 'Embedded Hardware', he: 'חומרה משובצת מחשב' }, learning: true },
      { label: { en: 'Mechatronic Systems', he: 'מערכות מכטרוניקה' } },
      { label: { en: 'Machine Control', he: 'בקרת מכונות' } },
      { label: 'C' },
      { label: 'Python', icon: 'fa-brands fa-python' },
      { label: 'Rust', learning: true }
    ]
  },
  {
    title: { en: 'Tooling & Leadership', he: 'כלים ומנהיגות' },
    icon: 'fa-solid fa-compass-drafting',
    skills: [
      { label: 'Git & GitHub', icon: 'fa-brands fa-git-alt' },
      { label: 'Model Context Protocol (MCP)' },
      { label: 'Google Antigravity IDE' },
      { label: 'VS Code' },
      { label: { en: 'Team leadership', he: 'מנהיגות וניהול צוות' } },
      { label: { en: 'Incident response under pressure', he: 'פתרון תקלות תחת לחץ' } }
    ]
  }
];
