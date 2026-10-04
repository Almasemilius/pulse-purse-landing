import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO(Almas): update once the real domain is registered — also update
// SITE_URL in src/lib/site.ts to match.
export default defineConfig({
  site: 'https://pulsepurse.com',
  integrations: [sitemap()],
});
