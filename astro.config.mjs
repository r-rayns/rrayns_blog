import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://rrayns.co.uk',
  integrations: [tailwind(), mdx(), sitemap()],
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
  },
});
