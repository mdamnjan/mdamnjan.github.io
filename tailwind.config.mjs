/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        aquamarine: "rgb(127, 255, 212)",
      },
      fontSize: {
        h2: "2rem",
      },
      fontWeight: {
        h2: 500,
      },
      lineHeight: {
        h1: 1,
      },
    },
  },
  plugins: [],
};
