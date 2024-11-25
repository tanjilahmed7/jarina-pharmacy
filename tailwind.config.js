/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  safelist: ["bg-[url('/assets/image\\ 11.png')]"],
  theme: {
    extend: {
      backgroundImage: {
        bgImageMedicinesSection: "url('/assets/Vector 1.png')",
        bgImageFaqSection: "url('/assets/Vector 2.png')",
        bgAffordableSection:"url('/assets/Vector 1 (1).png')",
      },
      fontFamily: {
        oswald: ["Oswald"],
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [require("daisyui")],
};
