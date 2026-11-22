/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: token("paper"),
        sheet: token("sheet"),
        ink: token("ink"),
        muted: token("muted"),
        rule: token("rule"),
        grid: token("grid"),
        signal: token("signal"),
        "signal-ink": token("signal-ink"),
        "on-signal": token("on-signal"),
      },
      fontFamily: {
        sans: ['"Grotesk"', "Helvetica Neue", "Arial", "sans-serif"],
      },
      maxWidth: {
        sheet: "76rem",
      },
    },
  },
  plugins: [],
};
