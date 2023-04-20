/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navblue: {
          100: "#1da1f2",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
