/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blanco: "var(--blanco)",
        "bordo-1": "var(--bordo-1)",
        "bordo-2": "var(--bordo-2)",
        "colecci-n-de-variables-gris-3": "var(--colecci-n-de-variables-gris-3)",
        "gris-1": "var(--gris-1)",
        "gris-2": "var(--gris-2)",
      },
    },
  },
  plugins: [],
};
