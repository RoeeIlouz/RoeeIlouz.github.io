import type { Lang } from '../i18n/translations';

export interface Note {
  slug: string;
  date: string; // ISO date
  minutes: number;
  icon: string;
  tags: string[];
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
}

// The write-ups themselves are English-only pages under src/pages/notes/.
export const notes: Note[] = [
  {
    slug: 'rocis-cad',
    date: '2026-10-10',
    minutes: 5,
    icon: 'fa-solid fa-cube',
    tags: ['Tauri', 'OpenCascade', 'WebAssembly', 'Local LLM', 'KiCad'],
    title: {
      en: 'ROCIs CAD: a WebAssembly kernel, a local AI, and KiCad as the judge',
      he: 'ROCIs CAD: קרנל WebAssembly, בינה מלאכותית מקומית, ו-KiCad כשופט'
    },
    summary: {
      en: 'A parametric 3D modeler that grew a schematic and PCB editor: feature replay on an OpenCascade worker, a grammar-constrained local model that only describes, and exports verified against KiCad 10.',
      he: 'מודלר תלת-ממד פרמטרי שגדל לעורך סכמות ו-PCB: הרצה חוזרת של פיצ׳רים על Worker של OpenCascade, מודל מקומי עם דקדוק מחייב שרק מתאר, וייצוא שנבדק מול KiCad 10.'
    }
  },
  {
    slug: 'rocis-pulse',
    date: '2026-10-07',
    minutes: 3,
    icon: 'fa-solid fa-chart-line',
    tags: ['Cloudflare Workers', 'D1', 'Zero Trust', 'Analytics'],
    title: {
      en: 'ROCIs Pulse: five dashboards in one private page',
      he: 'ROCIs Pulse: חמישה דשבורדים בדף פרטי אחד'
    },
    summary: {
      en: 'A Cloudflare Worker that snapshots Cloudflare, GitHub, RevenueCat and Google Analytics every day, fails closed behind Access, and feeds the same JSON to a Telegram bot.',
      he: 'Worker של Cloudflare ששומר כל יום תמונת מצב מ-Cloudflare, GitHub, RevenueCat ו-Google Analytics, נעול מאחורי Access, ומזין את אותו JSON לבוט טלגרם.'
    }
  },
  {
    slug: 'context-menu-editor',
    date: '2026-10-03',
    minutes: 6,
    icon: 'fa-solid fa-bars',
    tags: ['PowerShell', 'WPF', 'Windows registry', 'Performance'],
    title: {
      en: 'A Windows context menu editor in one PowerShell file',
      he: 'עורך תפריט קליק ימני ל-Windows בקובץ PowerShell אחד'
    },
    summary: {
      en: 'Three kinds of menu entries, Windows 11 items with no command line, a C# bridge for Send to, and how startup went from 2 seconds to under one.',
      he: 'שלושה סוגי פריטים בתפריט, פריטי Windows 11 בלי שורת פקודה, גשר C# ל-Send to, ואיך זמן ההפעלה ירד מ-2 שניות לפחות משנייה.'
    }
  },
  {
    slug: 'offline-first-sync',
    date: '2026-09-29',
    minutes: 7,
    icon: 'fa-solid fa-arrows-rotate',
    tags: ['Flutter', 'Hive', 'Firestore', 'Testing'],
    title: {
      en: 'Offline-first sync, and the tasks the web could not see',
      he: 'סנכרון Offline-first, והמשימות שהווב לא ראה'
    },
    summary: {
      en: 'Last-write-wins with tombstones across phone and web, and a Firestore query quirk that silently hid tasks from every other device.',
      he: 'Last-write-wins עם tombstones בין הטלפון לווב, ומוזרות של שאילתות Firestore שהסתירה משימות מכל מכשיר אחר.'
    }
  },
  {
    slug: 'patch-first-releases',
    date: '2026-09-29',
    minutes: 5,
    icon: 'fa-solid fa-rocket',
    tags: ['Shorebird', 'Google Play', 'Release engineering'],
    title: {
      en: 'Patch-first releases: fixes in minutes, not store reviews',
      he: 'שחרור Patch-first: תיקונים בדקות, בלי לחכות לחנות'
    },
    summary: {
      en: 'Over-the-air Dart patches for fixes, full store releases only for native changes, and the version scheme that keeps both straight.',
      he: 'עדכוני Dart באוויר לתיקונים, גרסת חנות מלאה רק לשינויים נייטיב, ושיטת הגרסאות שמחזיקה את שניהם מסודרים.'
    }
  },
  {
    slug: 'cross-app-auth',
    date: '2026-09-29',
    minutes: 6,
    icon: 'fa-solid fa-key',
    tags: ['Firebase Auth', 'Security rules', 'REST'],
    title: {
      en: 'One sign-in, two Firebase projects',
      he: 'התחברות אחת, שני פרויקטי Firebase'
    },
    summary: {
      en: 'How ROCIs Tasks reads your ROCIs Schedule classes under owner-only rules, from the app, a home-screen widget and the web.',
      he: 'איך ROCIs Tasks קורא את השיעורים מ-ROCIs Schedule תחת כללי גישה לבעלים בלבד: מהאפליקציה, מווידג׳ט ומהווב.'
    }
  }
];
