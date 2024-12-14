/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite,
  ],
};
