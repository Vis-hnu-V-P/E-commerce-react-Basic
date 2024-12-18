/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#556B2F', // Olive Green
        secondary: '#FAF9F6', // Ivory
        accent: '#8B4513', // Saddle Brown
        muted: '#D2B48C', // Tan
        highlight: '#EEE8AA', // Pale Goldenrod
        green: {
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          900: '#14532d',
        },
        blue: {
          100: '#d0e8f7', // Light blue
          500: '#3490dc', // Sky blue
          700: '#1e3a8a', // Deep blue
        },
        brown: {
          500: '#6B4226', // Medium brown
          700: '#3E2A1D', // Dark brown
          900: '#2C1A0D', // Very dark brown
        },
      },
      fontFamily: {
        sans: ['Libre Baskerville', 'serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(to bottom right, #556B2F, #3E2A1D, #D2B48C)', // Gradient for a more elegant, old money look
        'footer-texture': 'linear-gradient(to right, #556B2F, #8B4513)', // Gradient for footer
      },
    },
  },
  plugins: [],
};

