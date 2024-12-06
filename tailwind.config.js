const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./static/**/*.{html,js}",
    "./templates/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Typography
    require("@tailwindcss/typography"),
    // Inconify Plugin
    addDynamicIconSelectors(),
    //DaisyUI
    require('daisyui'),
  ],
  daisyui: {
    themes: ["synthwave", "dark"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "synthwave", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  }
}

