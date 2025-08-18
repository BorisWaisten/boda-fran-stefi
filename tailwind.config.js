
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
        // Paleta otoñal inspirada en la imagen
        terracota: '#8C4A32',
        'ocre-gold': '#C7A463',
        'warm-white': '#FDFBF7',
      },
      fontFamily: {
        // Fuentes existentes
        century: ['"Century Gothic"', 'sans-serif'],
        centuryBold: ['"Century Gothic Bold"', 'sans-serif'],
        centuryItalic: ['"Century Gothic Italic"', 'sans-serif'],
        centuryBoldItalic: ['"Century Gothic Bold Italic"', 'sans-serif'],
        retro: ['"Retro Signature"', 'cursive'],
        
        // Nuevas fuentes góticas y religiosas
        gothicTitle: ['"Gothic Title"', 'serif'],
        religiousSubtitle: ['"Religious Subtitle"', 'serif'],
        religiousBody: ['"Religious Body"', 'serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
