/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Kumbh Sans', 'sans-serif'],
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    extend: {
      fontSize: {
        regular: '12px',
      },

      colors: {
        'text-desaturatrd-blue': ['hsl(238, 29%, 16%)'],
        'text-red': ['hsl(14, 88%, 65%)'],
        'text-very-dark-greyish-blue': ['hsl(237, 12%, 33%'],
        'text-dark-gryish-blue': ['hsl(240, 6%, 50%)'],
        divider: ['hsl(240, 6%, 50%)'],
        'gradient-violet': ['hsl(240,20%, 50%)'],
        'gradient-blue': ['hsl(240, 73%, 65%)'],
      },
    },
  },
  plugins: [],
}
