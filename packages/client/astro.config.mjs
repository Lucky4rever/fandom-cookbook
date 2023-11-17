import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  root: './',
  output: 'server',
  adapter: vercel(),
  server: {
    port: 3000,
    host: '::1'
  },
  integrations: [react()]
});