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
        'dark-violet': '#161A30',
        'violet-main': '#31304D',
        'gray-main': '#B6BBC4',
        'off-white': '#F0ECE5'
      }
    },
  },
  plugins: [],
}
