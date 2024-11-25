/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  safelist: ["bg-[url('/assets/image\\ 11.png')]"],
  theme: {
    extend: {
      backgroundImage: {
        bgImageMedicinesSection: "url('/assets/Vector 1.png')",
        bgImageSliderSection: "url('/assets/image (4).png')",
      },
      fontFamily: {
        oswald: ["Oswald"],
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [require("daisyui")],
};
