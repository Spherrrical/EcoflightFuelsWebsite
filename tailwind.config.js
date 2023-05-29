/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1792px',
        '4xl': '2048px',
      },
      colors: {
        lightOcean: "#00A79D",
        green: "#2BB673",
        navy: "#171E2C",
        lightNavy: "#1F2A3D",
        darkNavy: "#0E131B",
        oldWhite: "#F1F2F2",
        turks: "#A7E5FF",
        turkshover: "#79d2ff",
      },
        fontFamily: {
          'inter': ['Inter', 'sans-serif'],
          'sfpro': ['SF Pro', 'sans-serif'],
          'circular-bold': ['CircularBold', 'sans-serif'],
          'circular-book': ['CircularBook', 'sans-serif'],
          'circular-medium': ['CircularMedium', 'sans-serif'],
        }
    },
  },
  plugins: [],
}

