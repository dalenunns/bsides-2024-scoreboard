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
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [
    // Inconify Plugin
    addDynamicIconSelectors(),
    //DaisyUI
    require('daisyui'),
  ],
}

