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
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1644px",
      "4xl": "1844px",
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
