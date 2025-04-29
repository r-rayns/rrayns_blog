import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rrayns.co.uk',
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      themes:{
        light: 'catppuccin-latte',
        dark: 'catppuccin-mocha'
      },
      defaultColor: 'light'
    }
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash][extname]',
        },
      },
    },
    plugins: [tailwindcss()],
  },
});