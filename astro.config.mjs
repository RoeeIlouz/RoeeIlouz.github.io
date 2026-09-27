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
  },
  security: {
    // GitHub Pages can't send response headers, so Astro emits the policy as a
    // <meta http-equiv="content-security-policy"> tag and hashes every script
    // and style it renders. Everything is self-hosted except the GitHub API.
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self' https://api.github.com",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "manifest-src 'self'",
        "worker-src 'none'",
        'upgrade-insecure-requests'
      ]
    }
  },
  markdown: {
    syntaxHighlight: false
  },
  vite: {
    build: {
      // Keep fonts and icons as real files instead of inlined data: URIs.
      assetsInlineLimit: 0
    }
  }
});
