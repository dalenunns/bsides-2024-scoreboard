const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/**/*.{html,js}"
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

