// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "../docs/**/*.mdx",
    "!../docs/node_modules",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        "3xl": "1620px",
        "4xl": "1920px",
        "5xl": "2560px",
        "6xl": "2880px",
      },
      colors: {
        left: "#0FABFF",
        middle: "#4A4AED",
        // right: "#ad1acb",
        right: "#AE24E0",
        accent: "#D2EAFE",
        gold: "#DFA810",
        blue: "#233142",
        palePurple: "#F1E4F3",
        componentDarkMode: "#282a2c",
      },
    },
  },
  plugins: [require("autoprefixer"), require("flowbite/plugin")],
  autoprefixer: {
    browsers: ["last 2 versions", "safari >= 7", "ie >= 10"],
  },
};
