const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      black: "#000002",
    },
    extend: {
      fontFamily: {
        serif: ["Libre Bodoni", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
