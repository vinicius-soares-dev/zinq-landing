import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0F62FE',
        'brand-orange': '#FF7A59'
      },
      boxShadow: {
        'xl-soft': '0 10px 30px rgba(2, 6, 23, 0.08)'
      }
    }
  },
  plugins: []
} satisfies Config;
