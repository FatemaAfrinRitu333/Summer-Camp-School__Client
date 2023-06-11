/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#529b03",

          secondary: "#e9e92f",

          accent: "#f6f9c8",

          neutral: "#191a3e",

          "base-100": "#ffffff",

          info: "#cae2e8",

          success: "#dff2a1",

          warning: "#f7e488",

          error: "#f2b6b5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
