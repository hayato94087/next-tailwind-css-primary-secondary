/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        50: "#fffaed",
        100: "#fff4d4",
        200: "#ffe4a8",
        300: "#ffd071",
        400: "#ffb84c",
        500: "#fe9611",
        600: "#ef7b07",
        700: "#c65c08",
        800: "#9d490f",
        900: "#7e3d10",
        950: "#441c06",
      },
      secondary: {
        50: "#eef5ff",
        100: "#dae8ff",
        200: "#bdd8ff",
        300: "#90bfff",
        400: "#4c93ff",
        500: "#3577fc",
        600: "#1f56f1",
        700: "#1741de",
        800: "#1936b4",
        900: "#1a328e",
        950: "#152156",
      },
    },
  },
  plugins: [],
};
