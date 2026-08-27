# RoeeIlouz.github.io - Architecture

## System Overview
- **Domain**: https://roee.ilouz.xyz
- **Tech Stack**: Astro 5 (Static Site Generator), TypeScript, Vanilla CSS3 (Custom Properties & Glassmorphism)
- **Hosting**: GitHub Pages (Custom CNAME `roee.ilouz.xyz`, HTTPS enforced, GitHub Actions CI/CD)

## Key Components
1. **Component-Driven Architecture**: Modular `.astro` components (`Sidebar`, `ContentHeader`, `AboutSection`, `ExperienceSection`, `ProjectsSection`, `HomelabSection`, `ContactSection`, `Toast`).
2. **Static i18n & Bilingual Engine**: Pre-rendered static routing for both English (`/`) and Hebrew (`/he/`, `dir="rtl"`) with dedicated typography (`Outfit` / `Heebo`).
3. **Structured Data Layer**: Type-safe data collections in `src/data/` for projects, homelab specs, containerized services, leadership experience, and skills.
4. **Interactive Tab Router & Filters**: Fast tab switching and category-based project filtering with smooth CSS animations.
5. **Zero Runtime Bloat**: Zero framework client-side JavaScript by default, achieving optimal Lighthouse performance scores.
