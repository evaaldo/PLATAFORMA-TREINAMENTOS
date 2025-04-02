/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif"
      },
      colors: {
        blue: {
          700: "#392EFF",
          300: "#0087B3"
        }
      }
    },
  },
  plugins: [],
}

