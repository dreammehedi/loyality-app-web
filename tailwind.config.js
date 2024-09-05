/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      "public-sans": ["Public Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#F2F2F2",
        "text-color": "#005CE8",
        dark: "#191B1C",
      },
    },
  },
  plugins: [],
};
