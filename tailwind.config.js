/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "5px 0 5px rgba(0, 0, 0, 0.1), -5px 0 5px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [flowbite],
};
