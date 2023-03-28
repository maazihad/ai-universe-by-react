/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#efc9ff",

          "secondary": "#d4f497",

          "accent": "#f466a6",

          "neutral": "#372438",

          "base-100": "#EDF3F7",

          "info": "#4E9BF4",

          "success": "#0C5F2C",

          "warning": "#F9C13E",

          "error": "#ED125B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

