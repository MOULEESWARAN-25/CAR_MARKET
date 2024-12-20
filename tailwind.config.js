/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite/plugin");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Includes your source files
    "./node_modules/flowbite-react/**/*.js", // Includes Flowbite React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Custom primary color
        secondary: "#64748B", // Custom secondary color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font family
      },
      boxShadow: {
        custom:
          "5px 0 5px rgba(0, 0, 0, 0.1), -5px 0 5px rgba(0, 0, 0, 0.1), 0 5px 5px rgba(0, 0, 0, 0.1)", // Custom shadow
      },
    },
  },
  plugins: [
    flowbite, // Enables the Flowbite plugin
  ],
};
