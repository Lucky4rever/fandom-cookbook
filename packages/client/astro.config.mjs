import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  root: './',
  output: 'hybrid',
  server: {
    port: 3000,
    host: '::1'
  },
  integrations: [react()]
});