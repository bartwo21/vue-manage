/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: '#014637',
        secondary: '#afff6eec'
      },
      filter: {
        'grayscale-50': 'grayscale(50%)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
