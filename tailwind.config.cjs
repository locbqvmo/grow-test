/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#345AFA"
        },
        secondary: {
          DEFAULT: "#313131"
        },
        black: {
          primary: "#1C1B26"
        },
        light: {
          DEFAULT: "rgba(52, 90, 250, 0.04)"
        }
      },
      fontSize: {
        onboarding: "5.75rem" //92px
      },
      boxShadow: {
        onboarding: "0px 4px 32px rgba(125, 177, 255, 0.47)"
      }
    }
  },
  plugins: []
};
