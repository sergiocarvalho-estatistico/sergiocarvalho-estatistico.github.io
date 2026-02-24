import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sergiocarvalho-estatistico.github.io',
  integrations: [tailwind(), sitemap()],
  output: 'static',
});
