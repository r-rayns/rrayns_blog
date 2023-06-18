/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyan: { // https://tailwind.ink?p=1.f7f9fae7f1fbcbdcf6a1b9e97692d85d6ec84c52b13a3d8c282a6317193d
          '50': '#f7f9fa',
          '100': '#e7f1fb',
          '200': '#cbdcf6',
          '300': '#a1b9e9',
          '400': '#7692d8',
          '500': '#5d6ec8',
          '600': '#4c52b1',
          '700': '#3a3d8c',
          '800': '#282a63',
          '900': '#17193d',
        },
      }
    },
  },
  plugins: [],
}
