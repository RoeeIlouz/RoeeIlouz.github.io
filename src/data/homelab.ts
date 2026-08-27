import type { Lang } from '../i18n/translations';

export interface SpecItem {
  icon: string;
  title: Record<Lang, string>;
  value: Record<Lang, string>;
}

export interface ServiceStack {
  icon: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  badges: string[];
}

export interface MaintenanceScript {
  name: string;
  color: string;
  description: Record<Lang, string>;
}

export const homelabSpecs: SpecItem[] = [
  {
    icon: 'fa-brands fa-raspberry-pi',
    title: {
      en: 'Host SoC Node',
      he: 'מעבד ומערכת על שבב'
    },
    value: {
      en: 'RPi 5 8GB (4x Cortex-A76 @ 2.4GHz)',
      he: 'RPi 5 8GB (4x Cortex-A76 @ 2.4GHz)'
    }
  },
  {
    icon: 'fa-solid fa-hard-drive',
    title: {
      en: 'Primary High-Speed Storage',
      he: 'אחסון NVMe מהיר'
    },
    value: {
      en: '1.0 TB NVMe SSD (PCIe M.2 HAT)',
      he: '1.0 TB NVMe SSD (PCIe M.2 HAT)'
    }
  },
  {
    icon: 'fa-brands fa-linux',
    title: {
      en: 'Operating System',
      he: 'מערכת הפעלה'
    },
    value: {
      en: 'Debian 13 (Raspberry Pi OS Lite)',
      he: 'Debian 13 (Raspberry Pi OS Lite)'
    }
  },
  {
    icon: 'fa-solid fa-fan',
    title: {
      en: 'Thermal Management',
      he: 'ניהול תרמי וקירור'
    },
    value: {
      en: 'Active PWM Cooler (42°C – 55°C)',
      he: 'קירור אקטיבי PWM (42°C – 55°C)'
    }
  }
];

export const zeroTrustServices: ServiceStack[] = [
  {
    icon: 'fa-solid fa-globe',
    title: {
      en: 'Cloudflare Tunnels & NPM',
      he: 'Tunnels Cloudflare ו-NPM'
    },
    description: {
      en: "Perimeter-less ingress via Cloudflare Tunnels (Zero Trust) paired with Nginx Proxy Manager for internal routing and automated Let's Encrypt SSL.",
      he: "גישה מאובטחת ללא פתיחת פורטים באמצעות Cloudflare Zero Trust Tunnels בשילוב Nginx Proxy Manager לניתוב פנימי ותעודות Let's Encrypt SSL אוטומטיות."
    },
    badges: ['Cloudflare Zero Trust', 'Nginx Proxy Manager', 'Wildcard SSL']
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: {
      en: 'Twingate Zero Trust & VPN Gateway',
      he: 'רשת Twingate וגישה באמצעות VPN'
    },
    description: {
      en: 'Zero Trust remote mesh access via Twingate Connectors, alongside isolated container network namespaces with strict kernel kill-switch enforcement.',
      he: 'גישה מרחוק באמצעות מחברי Twingate Zero Trust, לצד בידוד רשתי ברמת ה-Kernel ושער VPN עם מנגנון Kill-Switch קפדני.'
    },
    badges: ['Twingate Zero Trust', 'Gluetun VPN Gateway', 'Kill-Switch Isolation', 'Network Namespaces']
  }
];

export const modularStacks: ServiceStack[] = [
  {
    icon: 'fa-solid fa-cloud-arrow-up',
    title: {
      en: 'Personal Cloud & Media Pipeline',
      he: 'ענן אישי והזרמת מדיה'
    },
    description: {
      en: 'Self-hosted personal streaming engine, user request portals, automated data ingestion pipelines, and AI-powered photo archiving with pgvector ML.',
      he: 'מערך הזרמת מדיה עצמאי, פורטלי בקשות, תהליכי איסוף נתונים אוטומטיים וגיבוי תמונות מבוסס בינה מלאכותית (pgvector ML).'
    },
    badges: [
      'Jellyfin',
      'Jellyseerr',
      'Immich (Photos ML)',
      'Filestash',
      'Collabora CODE',
      'Automated Pipelines',
      'P2P Ingestion Gateway'
    ]
  },
  {
    icon: 'fa-solid fa-chart-pie',
    title: {
      en: 'Management & Observability',
      he: 'ניהול, ניטור וטלמטריה'
    },
    description: {
      en: 'Unified dashboards, container orchestration, metrics collectors, ping monitors, and real-time sensor telemetry.',
      he: 'לוחות בקרה אחודים, ניהול קונטיינרים, איסוף מדדי ביצועים, ניטור זמינות שרתים וטלמטריית חיישנים בזמן אמת.'
    },
    badges: [
      'Glance Dashboard',
      'Komodo Core',
      'Portainer EE',
      'Beszel Hub',
      'Uptime Kuma',
      'Dockpeek'
    ]
  },
  {
    icon: 'fa-solid fa-brain',
    title: {
      en: 'AI, Knowledge & Home Automation',
      he: 'בינה מלאכותית, ידע ואוטומציה'
    },
    description: {
      en: 'Local LLM model inference, autonomous agent daemons, home automation hubs, vector bookmarking, and instant push notifications.',
      he: 'הרצת מודלי שפה (LLM) מקומית, סוכנים אוטונומיים, מרכז בקרת בית חכם, ניהול ידע וסימניות וקבלת התראות Push בזמן אמת.'
    },
    badges: [
      'Ollama LLM Server',
      'Odysseus Agent',
      'Home Assistant',
      'Linkwarden',
      'PostgreSQL',
      'Ntfy Push'
    ]
  },
  {
    icon: 'fa-solid fa-terminal',
    title: {
      en: 'Native Systemd & Private Mesh',
      he: 'סביבת פיתוח ורשת פרטית'
    },
    description: {
      en: 'Browser-based VS Code environment, encrypted remote desktop relay, private mesh networking, and remote hardware management.',
      he: 'סביבת פיתוח VS Code דרך הדפדפן, ממסר שליטה מרחוק מוצפן, רשת Mesh פרטית וניהול חומרה מרוחק.'
    },
    badges: [
      'Code Server (VS Code)',
      'RustDesk Relay',
      'WolfNet Mesh',
      'WolfStack Node Mgr',
      'WolfUSB'
    ]
  }
];

export const maintenanceScripts: MaintenanceScript[] = [
  {
    name: 'backup.sh',
    color: '#60a5fa',
    description: {
      en: 'Automated encrypted backup archives with scheduled retention pruning',
      he: 'ארכיוני גיבוי מוצפנים אוטומטיים עם מחיקת גרסאות ישנות מתוזמנת'
    }
  },
  {
    name: 'check-health.sh',
    color: '#34d399',
    description: {
      en: 'Real-time sensor, thermal range, memory pressure & container diagnostics',
      he: 'אבחון חיישנים, טמפרטורה, עומס זיכרון ותקינות קונטיינרים בזמן אמת'
    }
  },
  {
    name: 'update-stacks.sh',
    color: '#fbbf24',
    description: {
      en: 'Non-destructive container pull, compose rebuild & dangling image prune',
      he: 'משיכת גרסאות חדשות, בנייה מחדש ללא השבתה וניקוי תמונות מיותרות'
    }
  }
];
