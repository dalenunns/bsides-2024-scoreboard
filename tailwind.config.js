const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./static/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Inconify Plugin
    addDynamicIconSelectors(),
    //DaisyUI
    require('daisyui'),
  ],
}

