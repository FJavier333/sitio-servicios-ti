// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: 'var(--color-brand)',
        accent: 'var(--color-accent)',
      },
      
      // === CONFIGURACIÓN DE LA ANIMACIÓN EN CASCADA ===
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      transitionDelay: {
        '150': '150ms',
        '300': '300ms',
        '450': '450ms',
        '600': '600ms',
        '750': '750ms',
      }
      // ===============================================

    },
  },
  plugins: [],
}