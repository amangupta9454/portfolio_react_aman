/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        
      },
    },
    screens: {
      xs: "420px", // Extra small devices (e.g., small phones)
      sm: "640px", // Small breakpoint
      md: "768px", // Medium devices (e.g., tablets)
      lg: "1024px", // Large devices (e.g., laptops)
      xl: "1280px", // Extra-large devices (e.g., desktops)
      "2xl": "1536px", // 2X extra-large devices
    },
  },
  plugins: [],
};
