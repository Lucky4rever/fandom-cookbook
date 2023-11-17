import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  root: './',
  output: 'server',
  server: {
    port: 3000,
    host: '::1'
  },
  integrations: [react()],
  adapter: vercel()
});