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
