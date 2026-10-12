import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://bookesh.in',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
