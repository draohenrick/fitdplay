/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0054",
        secondary: "#2E2E2E",
        accent: "#FFD300",
      },
    },
  },
  plugins: [],
}
