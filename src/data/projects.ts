import type { Lang } from '../i18n/translations';

export interface ProjectLink {
  labelKey?: 'btn_repo' | 'btn_play' | 'btn_homelab_repo' | 'btn_arch' | 'btn_live' | 'btn_code';
  label?: string;
  url: string;
  icon: string;
  primary?: boolean;
  external?: boolean;
}

export type ProjectStatus = 'live' | 'wip' | 'active';

export interface Project {
  id: string;
  icon: string; // Font Awesome fallback when there is no image
  image?: string;
  imageFit?: 'cover' | 'contain'; // contain = transparent logo shown with padding
  category: 'mobile' | 'systems' | 'web';
  status: ProjectStatus;
  githubRepo?: string; // e.g. "RoeeIlouz/ROCIsTasks-Public"
  defaultStars?: number;
  defaultForks?: number;
  defaultLanguage?: string;
  tag: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  tech: string[];
  links: ProjectLink[];
}

export const ROCIS_SCHEDULE_REPO = 'RoeeIlouz/ROCIs-Schedule';
export const ROCIS_SCHEDULE_REPO_URL = `https://github.com/${ROCIS_SCHEDULE_REPO}`;
export const ROCIS_TASKS_REPO = 'RoeeIlouz/ROCIsTasks-Public';
export const ROCIS_TASKS_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.rocisapps.tasks';

export const projectsData: Project[] = [
  {
    id: 'rocis-tasks',
    icon: 'fa-solid fa-list-check',
    image: '/images/rocis-tasks-icon.png',
    category: 'mobile',
    status: 'live',
    githubRepo: ROCIS_TASKS_REPO,
    defaultStars: 1,
    defaultForks: 0,
    defaultLanguage: 'Dart',
    tag: {
      en: 'Flagship app',
      he: 'אפליקציית דגל'
    },
    title: {
      en: 'ROCIs Tasks',
      he: 'ROCIs Tasks'
    },
    description: {
      en: 'Production cross-platform task manager built with Flutter & Dart on Clean Architecture. Offline-first sync, natural-language input, Google Calendar integration, and RevenueCat subscriptions.',
      he: 'אפליקציית ניהול משימות חוצת-פלטפורמות ב-Flutter & Dart בארכיטקטורת Clean Architecture. סנכרון Offline-first, הזנה בשפה טבעית, אינטגרציה עם Google Calendar ומנויים מבוססי RevenueCat.'
    },
    tech: ['Flutter', 'Dart', 'Clean Architecture', 'SQLite', 'Google Calendar API', 'RevenueCat'],
    links: [
      { label: 'Google Play', url: ROCIS_TASKS_PLAY_URL, icon: 'fa-brands fa-google-play', primary: true, external: true },
      { label: 'tasks.rocisapps.com', url: 'https://tasks.rocisapps.com', icon: 'fa-solid fa-globe', external: true },
      { labelKey: 'btn_repo', url: `https://github.com/${ROCIS_TASKS_REPO}`, icon: 'fa-brands fa-github', external: true }
    ]
  },
  {
    id: 'rocis-schedule',
    icon: 'fa-solid fa-graduation-cap',
    image: '/images/rocis-schedule-icon.png',
    category: 'mobile',
    status: 'wip',
    githubRepo: ROCIS_SCHEDULE_REPO,
    defaultStars: 1,
    defaultForks: 0,
    defaultLanguage: 'Dart',
    tag: {
      en: 'In development',
      he: 'בפיתוח'
    },
    title: {
      en: 'ROCIs Schedule',
      he: 'ROCIs Schedule'
    },
    description: {
      en: 'Offline-first academic companion built with Flutter & Dart. Weekly timetable, live exam countdowns, a weighted 4.0 GPA tracker, one-tap .ics imports from Canvas and Moodle, and a bridge to ROCIs Tasks.',
      he: 'אפליקציית ניהול אקדמי offline-first ב-Flutter & Dart. מערכת שעות שבועית, ספירה לאחור לבחינות, מחשבון GPA משוקלל (סולם 4.0), ייבוא יומני ‎.ics מ-Canvas ו-Moodle וחיבור ל-ROCIs Tasks.'
    },
    tech: ['Flutter', 'Dart', 'SQLite', 'Firebase', '.ics Import', 'GPA Engine'],
    links: [
      { labelKey: 'btn_repo', url: ROCIS_SCHEDULE_REPO_URL, icon: 'fa-brands fa-github', primary: true, external: true },
      { label: 'rocisapps.com', url: 'https://rocisapps.com/#schedule', icon: 'fa-solid fa-arrow-up-right-from-square', external: true }
    ]
  },
  {
    id: 'rocis-apps-platform',
    icon: 'fa-solid fa-layer-group',
    image: '/images/rocis-apps-icon.png',
    category: 'web',
    status: 'live',
    githubRepo: 'RoeeIlouz/ROCIsApp.github.io',
    defaultStars: 0,
    defaultForks: 0,
    defaultLanguage: 'HTML',
    tag: {
      en: 'Brand hub',
      he: 'אתר המותג'
    },
    title: {
      en: 'ROCIs Apps Platform',
      he: 'פלטפורמת ROCIs Apps'
    },
    description: {
      en: 'The official home of the ROCIs Apps suite: product pages, design system, release notes, and privacy policies for every app in the ecosystem.',
      he: 'הבית הרשמי של סוויטת ROCIs Apps: דפי מוצר, שפת עיצוב, הערות גרסה ומדיניות פרטיות לכל אפליקציה באקוסיסטם.'
    },
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    links: [
      { label: 'rocisapps.com', url: 'https://rocisapps.com', icon: 'fa-solid fa-arrow-up-right-from-square', primary: true, external: true },
      { labelKey: 'btn_code', url: 'https://github.com/RoeeIlouz/ROCIsApp.github.io', icon: 'fa-brands fa-github', external: true }
    ]
  },
  {
    id: 'homelab-infrastructure',
    icon: 'fa-brands fa-raspberry-pi',
    image: '/images/raspberry-pi-icon.png',
    imageFit: 'contain',
    category: 'systems',
    status: 'active',
    githubRepo: 'RoeeIlouz/Homelab',
    defaultStars: 1,
    defaultForks: 0,
    defaultLanguage: 'Shell',
    tag: {
      en: 'Homelab & GitOps',
      he: 'מעבדה ביתית ו-GitOps'
    },
    title: {
      en: 'Raspberry Pi 5 Infrastructure',
      he: 'תשתית Raspberry Pi 5'
    },
    description: {
      en: '24/7 ARM64 node (8 GB RAM, 1 TB NVMe) on Raspberry Pi OS Lite. Zero Trust ingress via Cloudflare and Twingate, a VPN kill-switch, automated backups, and 30+ containerized services.',
      he: 'צומת ARM64 הפועל 24/7 (‏8GB זיכרון, 1TB NVMe) על Raspberry Pi OS Lite. גישת Zero Trust דרך Cloudflare ו-Twingate, שער VPN עם Kill-Switch, גיבויים אוטומטיים ומעל 30 שירותי קונטיינרים.'
    },
    tech: ['Docker Compose', 'Zero Trust', 'Cloudflare Tunnels', 'Twingate', 'Bash', 'GitOps'],
    links: [
      { labelKey: 'btn_homelab_repo', url: 'https://github.com/RoeeIlouz/Homelab', icon: 'fa-brands fa-github', primary: true, external: true },
      { labelKey: 'btn_arch', url: '#homelab', icon: 'fa-solid fa-server' }
    ]
  },
  {
    id: 'roee-portfolio-hub',
    icon: 'fa-solid fa-code',
    category: 'web',
    status: 'live',
    githubRepo: 'RoeeIlouz/RoeeIlouz.github.io',
    defaultStars: 1,
    defaultForks: 0,
    defaultLanguage: 'Astro',
    tag: {
      en: 'This website',
      he: 'האתר הזה'
    },
    title: {
      en: 'roee.ilouz.xyz',
      he: 'roee.ilouz.xyz'
    },
    description: {
      en: 'This bilingual portfolio. Static Astro build with a strict Content Security Policy, fully self-hosted assets, and zero framework JavaScript.',
      he: 'הפורטפוליו הדו-לשוני הזה. אתר Astro סטטי עם מדיניות Content Security Policy קפדנית, נכסים מאוחסנים עצמאית וללא JavaScript של פריימוורק.'
    },
    tech: ['Astro', 'TypeScript', 'CSS', 'CSP', 'GitHub Actions'],
    links: [
      { labelKey: 'btn_code', url: 'https://github.com/RoeeIlouz/RoeeIlouz.github.io', icon: 'fa-brands fa-github', primary: true, external: true }
    ]
  }
];
