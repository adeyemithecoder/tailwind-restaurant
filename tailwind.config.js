/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 1/2)" },
      },
      keyframes: {
        conrotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        conrotate: "conrotate 5s linear infinite ",
      },

      textColor: {
        skin: {
          dark: "var(--dark)",
          main: "var(--main-color)",
          "dark-light": "var(--dark-light)",
          white: "var(--white)",
          "white-light": "var(--white-light)",
        },
      },
      backgroundColor: {
        skin: {
          dark: "var(--dark)",
          main: "var(main-color)",
          "dark-light": "var(--dark-light)",
          white: "var(--white)",
          "white-light": "var(--white-light)",
        },
      },
      fontFamily: {
        skin: {
          cursiv: "var(--cursive-font)",
        },
      },
    },
  },
  plugins: [],
};
