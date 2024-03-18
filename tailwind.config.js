/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      monument: ["Monument", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        ebony: "#2F3126",
        khaki: "#9C9C89",
        cream: "#E1D6C7",
        black: "#262626",
      },
    },
  },
  plugins: [],
};
