/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/**/*.{html,js}",
    "./server/**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        }
      }
    },
  },
  plugins: [],
}