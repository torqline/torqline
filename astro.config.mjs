// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: update to the real domain once purchased/connected in Cloudflare Pages
  site: 'https://torqline.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});