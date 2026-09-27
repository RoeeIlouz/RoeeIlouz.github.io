---
ontology: true
type: architecture
domain: roee-portfolio
summary: Architecture, security model, and component layout of the roee.ilouz.xyz Astro portfolio
tags: [astro, portfolio, csp, github-pages, i18n]
status: active
---

# RoeeIlouz.github.io - Architecture

## System Overview
- **Domain**: https://roee.ilouz.xyz
- **Tech Stack**: Astro 7 (static output), TypeScript, hand-written CSS (custom properties, logical properties for RTL)
- **Hosting**: GitHub Pages (custom CNAME, HTTPS enforced), deployed by `.github/workflows/deploy.yml`

## Key Components
1. **Layout**: `BaseLayout` renders `SiteHeader` (sticky nav + language toggle), `Sidebar` (profile card, ROCIs Apps ecosystem links), the page sections, and `SiteFooter`.
2. **Sections**: single scrolling page — `AboutSection` (hero, stats, featured ROCIs Tasks & ROCIs Schedule cards, services), `ProjectsSection` (search + filter), `ExperienceSection`, `HomelabSection`, `ContactSection`. Shared heading via `SectionHeader`.
3. **Static i18n**: English (`/`) and Hebrew (`/he/`, `dir="rtl"`) pre-rendered from `src/i18n/translations.ts`. Fonts: Inter / JetBrains Mono / Heebo.
4. **Data layer**: `src/data/` (projects, experience, homelab). Repo constants such as `ROCIS_SCHEDULE_REPO_URL` live in `projects.ts`.
5. **Client script**: one bundled module, `src/scripts/main.ts` — scrollspy, project filtering, live GitHub stats (single API call, cached 10 min in `sessionStorage`), copy-email, and the mailto contact form. No framework runtime.

## Security Model
- **Content Security Policy** via Astro `security.csp` (meta tag, hashed scripts/styles, no `unsafe-inline`). Configured in `astro.config.mjs`. Only external origin: `https://api.github.com` (`connect-src`).
- **No inline `style=""` attributes** anywhere — they would violate `style-src`. Dynamic values go through classes or data attributes (e.g. `.repo-lang[data-lang]`).
- **All assets self-hosted**: fonts via `@fontsource-variable/*`, icons via `@fortawesome/fontawesome-free`, avatar in `public/images/`. No Google Fonts / CDN requests.
- **CI hardening**: actions pinned to commit SHAs, `permissions: {}` by default with per-job grants, `persist-credentials: false`, `npm ci --ignore-scripts`, `npm audit` gate, Dependabot for npm + actions.
- `public/.well-known/security.txt` published (artifact upload uses `include-hidden-files: true`).
- GitHub Pages cannot send response headers, so `frame-ancestors` / `X-Frame-Options` / HSTS preload need a proxy (e.g. Cloudflare) if required.
