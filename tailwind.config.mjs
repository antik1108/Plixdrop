/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#18181c',
        'brand-bg-darker': '#080808',
        'brand-lime': '#bee318',
        'brand-white': '#ffffff',
        'brand-gray': '#a0a0a0',
      },
    },
  },
  plugins: [],
};