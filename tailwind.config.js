/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        altice: {
          dark: "#002b5c",
          light: "#007dc5",
          white: "#ffffff",
          black: "#000000",
        },
      },
    },
  },
  plugins: [],
}
