import type { Lang } from '../i18n/translations';

export interface TimelineItem {
  title: Record<Lang, string>;
  meta: Record<Lang, string>;
  description: Record<Lang, string>;
}

export interface CertItem {
  icon: string;
  iconColor: string;
  provider: string;
  title: Record<Lang, string>;
}

export interface SkillCategory {
  title: Record<Lang, string>;
  icon: string;
  iconColor: string;
  skills: {
    label: Record<Lang, string> | string;
    icon?: string;
    iconColor?: string;
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
    iconColor: '#3b82f6',
    provider: 'Cisco NetAcademy',
    title: {
      en: 'CCNA Routing & Switching',
      he: 'CCNA ניתוב ומיתוג רשתות'
    }
  },
  {
    icon: 'fa-solid fa-desktop',
    iconColor: '#10b981',
    provider: 'Cisco NetAcademy',
    title: {
      en: 'IT Essentials Hardware & OS',
      he: 'IT Essentials חומרה ומערכות הפעלה'
    }
  },
  {
    icon: 'fa-brands fa-python',
    iconColor: '#f59e0b',
    provider: 'Programming',
    title: {
      en: 'Python Course',
      he: 'קורס תכנות Python'
    }
  },
  {
    icon: 'fa-solid fa-microchip',
    iconColor: '#ef4444',
    provider: 'Technical Training',
    title: {
      en: 'Systems Technician',
      he: 'טכנאי מערכות מחשוב ותקשורת'
    }
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: {
      en: 'Mobile & Frontend Development',
      he: 'פיתוח מובייל ופרונטאנד'
    },
    icon: 'fa-solid fa-mobile-screen',
    iconColor: 'var(--accent-red)',
    skills: [
      { label: 'Flutter', icon: 'fa-brands fa-flutter', iconColor: '#02569b' },
      { label: 'Dart' },
      { label: 'RevenueCat SDK' },
      { label: 'Android', icon: 'fa-brands fa-android', iconColor: '#3ddc84' },
      { label: 'iOS', icon: 'fa-brands fa-apple', iconColor: '#fff' },
      { label: 'JavaScript / TypeScript', icon: 'fa-brands fa-js', iconColor: '#f7df1e' },
      { label: 'HTML5 / CSS3', icon: 'fa-brands fa-html5', iconColor: '#e34f26' },
      {
        label: {
          en: '🚀 Astro (Learning)',
          he: '🚀 Astro (בלמידה)'
        }
      }
    ]
  },
  {
    title: {
      en: 'Systems, Networking & Homelab',
      he: 'תשתיות, רשתות ומעבדת בית'
    },
    icon: 'fa-solid fa-network-wired',
    iconColor: 'var(--accent-cyan)',
    skills: [
      { label: '🌐 Cisco CCNA' },
      { label: '🖧 Routing & Switching' },
      { label: '🏢 Active Directory / IT' },
      { label: 'Linux (RPi OS / Debian)', icon: 'fa-brands fa-linux', iconColor: '#fcc624' },
      { label: 'Docker & Compose', icon: 'fa-brands fa-docker', iconColor: '#2496ed' },
      { label: '🛡️ Nginx Proxy Manager' },
      { label: '🔒 Zero Trust Tunnels' },
      { label: '💻 Bash Scripting' }
    ]
  },
  {
    title: {
      en: 'Hardware & Embedded Systems (Academic Studies)',
      he: 'חומרה ומערכות משובצות (בלימודים אקדמיים)'
    },
    icon: 'fa-solid fa-microchip',
    iconColor: 'var(--accent-ruby)',
    skills: [
      {
        label: {
          en: '⚡ Circuit Analysis (Studying)',
          he: '⚡ ניתוח מעגלים חשמליים (בלימודים)'
        }
      },
      {
        label: {
          en: '📟 Linear Signals & Systems (Studying)',
          he: '📟 אותות ומערכות ליניאריות (בלימודים)'
        }
      },
      { label: '🤖 Mechatronic Systems' },
      { label: '⚙️ Machine Control' },
      { label: '🔧 C Programming' },
      { label: 'Python', icon: 'fa-brands fa-python', iconColor: '#3776ab' },
      {
        label: {
          en: '🦀 Rust (Learning)',
          he: '🦀 Rust (בלמידה)'
        }
      },
      {
        label: {
          en: '🔌 Embedded Hardware (Studying)',
          he: '🔌 חומרה משובצת מחשב (בלימודים)'
        }
      }
    ]
  },
  {
    title: {
      en: 'AI Tooling & Methodologies',
      he: 'כלי AI ומתודולוגיות'
    },
    icon: 'fa-solid fa-brain',
    iconColor: 'var(--accent-green)',
    skills: [
      { label: '🤖 Model Context Protocol (MCP)' },
      { label: '🚀 Google Antigravity IDE' },
      { label: 'Git & GitHub', icon: 'fa-brands fa-git-alt', iconColor: '#f05032' },
      { label: '🛠️ VS Code' },
      {
        label: {
          en: '👥 Team Leadership & Command',
          he: '👥 מנהיגות, פיקוד וניהול צוות'
        }
      },
      {
        label: {
          en: '⏱️ High-Pressure Execution',
          he: '⏱️ תפקוד ופתרון תקלות תחת לחץ'
        }
      }
    ]
  }
];
