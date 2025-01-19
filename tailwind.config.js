/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#114AB1",
        secondary: "#6793AC",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "3rem,",
        },
      },
    },
  },
  plugins: [],
};
