/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
      'xsm': { 'max': '339px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {  keyframes: {
      pulse :{
        '0%' :{opacity:1},
        '25%':{opacity:0.7},
        '50%':{opacity:0.4},
        '75%':{opacity:0.2},
        '100%':{opacity:1}
    }
  },

  animation: {
    'shimmer': 'pulse 1s linear infinite',
  },},
  },
  plugins: [    import('@tailwindcss/forms')],
}

