/** @type {import('tailwindcss').Config} */
const { tabsHeader } = require("@material-tailwind/react");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        xl: "1150px",
      },
    },
  },
  plugins: [],
});
