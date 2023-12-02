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

        // branding color scheme 1
        'brown-beige': '#FAF1E4',
        'brown-sand': '#F4DFC8',
        'off-white': '#FAF6F0',

        // branding color scheme 2
        'pink-warm': '#CE5A67',
        'orange-mute': '#F4BF96'
      }
    },
  },
  plugins: [],
}
