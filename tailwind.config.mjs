/** @type {import('tailwindcss').Config} */
const baseColors = {
  primary: {
    dark: "#000308",
    light: "#fff",
  },
  secondary: {
    dark: "#008D54",
    light: "#00db82",
  },
  emerald: {
    50: "#edfff7",
    100: "#d5ffee",
    200: "#aeffde",
    300: "#70ffc6",
    400: "#2bfda7",
    500: "#00db82",
    600: "#00c06d",
    700: "#009659",
    800: "#067549",
    900: "#07603e",
    950: "#003721",
  },
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // ...baseColors,
        primary: baseColors.primary.light,
        secondary: baseColors.secondary.light,
      },
    },
  },
  plugins: [],
};
