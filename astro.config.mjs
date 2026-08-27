import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://roee.ilouz.xyz',
  base: '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'he'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
