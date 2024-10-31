/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
fontFamily:{
  outfit: ' "Outfit", sans-serif',
  prata:'"Prata", serif',
},
textColor:{
  dark:"#414141",
  semidark:"#707070",
  sodark:"#343434",
}


    },
  },
  plugins: [],
};
