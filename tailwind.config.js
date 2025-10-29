/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ebf5ff',
          100: '#d6ebff',
          200: '#b3d9ff',
          300: '#80c1ff',
          400: '#4da3ff',
          500: '#3182CE',
          600: '#2c74ba',
          700: '#2563a3',
          800: '#1e4f82',
          900: '#16406b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
