/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-text': '8px 6px -1px rgba(255, 0, 0, 0.7), 5px 4px 2px rgba(0, 0, 255, 0.5)',
        'gradient-red-blue': '0 8px 6px -1px rgba(255, 0, 0, 0.7), 0 5px 4px 2px rgba(0, 0, 255, 0.5)',
      },
    },
  },
  plugins: [],
}