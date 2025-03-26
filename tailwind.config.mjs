/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 主色調
        'black': '#000000',
        'white': '#FFFFFF',
        // 強調色
        'democratic-red': '#D80000',
        // 輔助色
        'jade-green': '#008888',
        'wheat-yellow': '#DB7700',
        // 灰階
        'gray': {
          100: '#F8F8F8',
          200: '#E0E0E0',
          400: '#A0A0A0',
          700: '#505050',
        }
      },
      fontFamily: {
        'serif': ['"Noto Serif TC"', 'serif'],
      },
    },
  },
  plugins: [],
};
