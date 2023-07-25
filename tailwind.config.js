/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#7b1fa2",
      },
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          xl: "1024px",
          "2xl": "1024px",
        },
      },
    },
  },
  plugins: [],
};
