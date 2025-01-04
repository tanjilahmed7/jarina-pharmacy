/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  safelist: ["bg-[url('/assets/image\\ 11.png')]"],
  theme: {
    extend: {
      screens: {
        'tablet': '700px',
        'laptop': '1200px',
        'desktop': '1440px',
      },
      backgroundImage: {
        bgImageMedicinesSection: "url('/assets/vector1.png')",
        bgImageMedicinesSectionSmall:"url('./assets/vector13.png')",
        bgImageFaqSection: "url('/assets/Vector 2.png')",
        bgAffordableSection:"url('/assets/Vector 1 (1).png')",
      },
      boxShadow: {
        custom: '0px 4px 20px 0px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        oswald: ["Oswald"],
        manrope: ["Manrope"],
      },
      
      
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')],
};
