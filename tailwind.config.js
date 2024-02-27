/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        constPurple: "#6504b5",
        customPrime: "#410078",
      },
    },
  },
  plugins: [],
};
