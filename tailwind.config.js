/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        constPurple: "#6504b5",
        customPrime: "#410078",
        customPurple: "#2e0152",
        customGray:"#4d4751"
      },
      scrollbar: {
        hide: "hidden",
      },
    },
  },
  plugins: [],
};
