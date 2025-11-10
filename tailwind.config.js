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
          50: '#e6eef5',
          100: '#ccdde8',
          200: '#99bbd1',
          300: '#6698ba',
          400: '#3376a3',
          500: '#1a4d7a',
          600: '#164162',
          700: '#123449',
          800: '#0e2831',
          900: '#091b1f',
        },
        accent: {
          50: '#fef5ee',
          100: '#fde8d7',
          200: '#fbcdae',
          300: '#f8ab7b',
          400: '#f47d45',
          500: '#ee7d21',
          600: '#df5c17',
          700: '#b94515',
          800: '#933819',
          900: '#763117',
        },
        fuar: {
          50: '#fef5ee',
          100: '#fde8d7',
          200: '#fbcdae',
          300: '#f8ab7b',
          400: '#f47d45',
          500: '#ee7d21',
          600: '#df5c17',
          700: '#b94515',
          800: '#933819',
          900: '#763117',
        },
      },
      fontFamily: {
        sans: ['Campton', 'system-ui', 'sans-serif'],
        heading: ['Axiforma', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
