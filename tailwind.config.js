/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
      },
      colors: {
        ios: {
          bg: '#000000',
          card: '#1C1C1E', // System Gray 6 Dark
          cardHigh: '#2C2C2E', // System Gray 5 Dark
          blue: '#0A84FF',
          gray: '#98989D',
          separator: 'rgba(84, 84, 88, 0.65)',
          green: '#30D158',
          red: '#FF453A',
          orange: '#FF9F0A',
        }
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 10s infinite',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}