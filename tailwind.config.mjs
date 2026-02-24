/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d6fe',
          300: '#a4b8fc',
          400: '#7f93f8',
          500: '#6370f1',
          600: '#4f51e5',
          700: '#4040ca',
          800: '#3535a3',
          900: '#2f3181',
          950: '#1c1d4e',
        },
      },
    },
  },
  plugins: [],
};
