/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx,tsx}',
    './components/**/*.{jsx,tsx}',

  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-exo2)','sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

