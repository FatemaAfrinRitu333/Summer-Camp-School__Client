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

          neutral: "#7D7170",

          "base-100": "#ffffff",

          info: "#082f497c",

          success: "#dff2a1",

          warning: "#f7e488",

          error: "#f2b6b5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
