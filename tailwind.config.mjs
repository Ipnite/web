/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        slab: ["Roboto Slab", "serif"],
      },
      colors: {
        // Design system Ipnite
        bordo1:  "var(--bordo-1)",   // #4c0815  — rojo oscuro principal
        bordo2:  "var(--bordo-2)",   // #6b2a2f  — rojo medio
        blanco:  "var(--blanco)",    // #ffffff
        gris1:   "var(--gris-1)",    // #938d8e  — gris suave
        gris2:   "var(--gris-2)",    // #ededed  — gris claro
        gris3:   "var(--gris-3)",    // #515151  — gris texto
      },
      screens: {
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
