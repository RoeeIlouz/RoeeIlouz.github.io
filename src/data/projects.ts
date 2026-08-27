import type { Lang } from '../i18n/translations';

export interface ProjectLink {
  labelKey?: string;
  label?: string;
  url: string;
  icon: string;
  primary?: boolean;
  target?: string;
  isTabLink?: boolean;
  tabTarget?: string;
}

export interface Project {
  id: string;
  emoji: string;
  category: 'mobile' | 'systems' | 'ai';
  githubRepo?: string; // e.g. "RoeeIlouz/ROCIsTasks-Public"
  playStoreId?: string; // e.g. "com.rocisapps.tasks"
  defaultStars?: number;
  defaultForks?: number;
  defaultLanguage?: string;
  tag: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tech: string[];
  links: ProjectLink[];
}

export const projectsData: Project[] = [
  {
    id: 'rocis-tasks',
    emoji: '📋',
    category: 'mobile',
    githubRepo: 'RoeeIlouz/ROCIsTasks-Public',
    playStoreId: 'com.rocisapps.tasks',
    defaultStars: 0,
    defaultForks: 0,
    defaultLanguage: 'Dart',
    tag: {
      en: 'Flagship Mobile App',
      he: 'אפליקציית דגל'
    },
    title: {
      en: 'ROCIs Tasks',
      he: 'ROCIs Tasks'
    },
    description: {
      en: 'Smart productivity, task management, checklists, attachments, natural language input, offline synchronization, and seamless Google Calendar integration.',
      he: "אפליקציית ניהול משימות ופרודוקטיביות חכמה: צ'קליסטים, קבצים מצורפים, הזנה בשפה טבעית, סנכרון Offline מלא ואינטגרציה ל-Google Calendar."
    },
    tech: ['Flutter', 'Dart', 'RevenueCat', 'Google Calendar'],
    links: [
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.rocisapps.tasks',
        icon: 'fa-brands fa-google-play',
        primary: true,
        target: '_blank'
      },
      {
        label: 'tasks.rocisapps.com',
        url: 'https://tasks.rocisapps.com',
        icon: 'fa-solid fa-globe',
        target: '_blank'
      },
      {
        labelKey: 'btn_repo',
        url: 'https://github.com/RoeeIlouz/ROCIsTasks-Public',
        icon: 'fa-brands fa-github',
        target: '_blank'
      }
    ]
  },
  {
    id: 'rocis-apps-platform',
    emoji: '✨',
    category: 'mobile',
    githubRepo: 'RoeeIlouz/ROCIsApp.github.io',
    defaultStars: 0,
    defaultForks: 0,
    defaultLanguage: 'HTML',
    tag: {
      en: 'Ecosystem & Brand Hub',
      he: 'סביבת מותג ואתר רשמי'
    },
    title: {
      en: 'ROCIs Apps Platform',
      he: 'פלטפורמת ROCIs Apps'
    },
    description: {
      en: 'The official home of the ROCIs Apps brand suite. Showcasing modern mobile apps, design systems, software releases, privacy policies, and web experiences.',
      he: 'הבית הרשמי של סוויטת מוצרי ROCIs Apps. מציג אפליקציות מובייל מודרניות, שפות עיצוב, גרסאות תוכנה, מדיניות פרטיות וחוויות רשת.'
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Brand Hub'],
    links: [
      {
        label: 'rocisapps.com',
        url: 'https://rocisapps.com',
        icon: 'fa-solid fa-arrow-up-right-from-square',
        primary: true,
        target: '_blank'
      },
      {
        labelKey: 'btn_play',
        url: 'https://play.google.com/store/apps/details?id=com.rocisapps.tasks',
        icon: 'fa-brands fa-android',
        target: '_blank'
      }
    ]
  },
  {
    id: 'homelab-infrastructure',
    emoji: '🏠',
    category: 'systems',
    githubRepo: 'RoeeIlouz/Homelab',
    defaultStars: 1,
    defaultForks: 0,
    defaultLanguage: 'Shell',
    tag: {
      en: 'Production Homelab & GitOps',
      he: 'מעבדת ייצור ו-GitOps'
    },
    title: {
      en: 'Raspberry Pi 5 Infrastructure',
      he: 'תשתית Raspberry Pi 5'
    },
    description: {
      en: 'High-performance 24/7 ARM64 node (8GB RAM, 1TB NVMe SSD) running Debian 13, Zero Trust ingress (Cloudflare/Twingate), VPN kill-switch, and 30+ containerized services.',
      he: 'צומת ARM64 בעל ביצועים גבוהים הפועל 24/7 (8GB זיכרון, 1TB NVMe SSD) על גבי Debian 13, עם גישת Zero Trust, שער VPN ומעל 30 שירותי קונטיינרים.'
    },
    tech: ['RPi 5', 'Debian 13', 'Docker', 'Zero Trust', '1TB NVMe'],
    links: [
      {
        labelKey: 'btn_homelab_repo',
        url: 'https://github.com/RoeeIlouz/Homelab',
        icon: 'fa-brands fa-github',
        primary: true,
        target: '_blank'
      },
      {
        labelKey: 'btn_arch',
        url: '#homelab',
        icon: 'fa-solid fa-server',
        isTabLink: true,
        tabTarget: 'homelab'
      }
    ]
  },
  {
    id: 'roee-portfolio-hub',
    emoji: '🌐',
    category: 'mobile',
    githubRepo: 'RoeeIlouz/RoeeIlouz.github.io',
    defaultStars: 0,
    defaultForks: 0,
    defaultLanguage: 'Astro',
    tag: {
      en: 'Personal Digital Hub',
      he: 'האתר והפורטפוליו האישי'
    },
    title: {
      en: 'roee.ilouz.xyz',
      he: 'roee.ilouz.xyz'
    },
    description: {
      en: 'Personal digital headquarters and interactive web application hub, built for ultra-fast performance and clean glassmorphism UX.',
      he: 'מרכז הפעילות הדיגיטלי והאתר האישי, בנוי לביצועים מהירים במיוחד וחוויית Glassmorphism נקייה.'
    },
    tech: ['Astro 5', 'TypeScript', 'CSS3', 'GitHub Pages'],
    links: [
      {
        labelKey: 'btn_live',
        url: 'https://roee.ilouz.xyz',
        icon: 'fa-solid fa-arrow-up-right-from-square'
      },
      {
        labelKey: 'btn_code',
        url: 'https://github.com/RoeeIlouz/RoeeIlouz.github.io',
        icon: 'fa-brands fa-github',
        target: '_blank'
      }
    ]
  }
];
