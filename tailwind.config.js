/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./{!(dist|node_modules)/**/*,*}.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'default': ['"Press Start 2P"', 'monospace']
      },
    },
  },
  plugins: [],
}