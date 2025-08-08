/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // ✅ This line is essential
  ],
  theme: {
    extend: {
      colors: {
        jungle: '#29AB87', // Hope for Community primary
        red: '#DC2626',
        lightRed: '#F87171',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
