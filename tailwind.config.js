/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      transitionDuration: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
      colors: {
        primary: "black",
        secondary: "orange",
        third: "cyan",
        tertiary: "#141414",
        "black-100": "#080808",
        "black-200": "#2a2c33",
        "white-100": "#d9e6f2"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
}

