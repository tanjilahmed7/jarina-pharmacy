/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  // safelist: ["bg-[url('/assets/image\\ 11.png')]"],
  
  theme: {
    extend: {
      screens: {
        'tablet': '700px',
        'laptop': '1200px',
        'desktop': '1440px',
      },
      scrollbarGutter: {
        stable: 'stable',
      },
      colors: {
        scrollbar: {
          DEFAULT: '#DDE7F6',
          hover: '#B8CDE6',
        },
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
