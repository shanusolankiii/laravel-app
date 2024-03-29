/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./vendor/wireui/wireui/tailwind.config.js')
],
  content: [
    "./resources/**/*.blade.php",
    './vendor/wireui/wireui/resources/**/*.blade.php',
    './vendor/wireui/wireui/ts/**/*.ts',
    './vendor/wireui/wireui/src/View/**/*.php',
    './app/Http/Livewire/**/*Table.php',
    './vendor/power-components/livewire-powergrid/resources/views/**/*.php',
    './vendor/power-components/livewire-powergrid/src/Themes/Tailwind.php'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
}
