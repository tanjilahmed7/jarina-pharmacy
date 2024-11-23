/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './src/**/*.{html,js}'],
  safelist: [
    'bg-[url(\'/assets/image\\ 11.png\')]',
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald'],
        manrope: ['Manrope'],
      
      },
    },
  },
  plugins: [],
}
