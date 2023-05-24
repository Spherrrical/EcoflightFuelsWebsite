/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightOcean: "#00A79D",
        green: "#2BB673",
        navy: "#171E2C",
        lightNavy: "#1F2A3D",
        darkNavy: "#0E131B",
        oldWhite: "#F1F2F2"
      },
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
          'sfpro': ['SF Pro', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

