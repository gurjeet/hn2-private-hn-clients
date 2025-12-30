import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hackernews.hn/hn-clients',
  outDir: 'docs',
  vite: {
      build: {
          assetsInlineLimit: 0,
      },
  },
  output: 'static',
});
