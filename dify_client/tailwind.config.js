/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#0b0c10',
          neon: '#00ffff',
          violet: '#8e44ad',
          purple: '#9b59b6',
          text: {
            primary: '#ffffff',
            secondary: '#c5c6c7',
          }
        }
      }, animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'twinkle-slow': 'twinkle 6s ease-in-out infinite',
        'twinkle-slower': 'twinkle 8s ease-in-out infinite',
        'shooting-star': 'shooting-star 4s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 10s ease-in-out infinite',
      }, keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 10px #00ffff) drop-shadow(0 0 20px #00ffff)'
          },
          '50%': {
            filter: 'drop-shadow(0 0 20px #00ffff) drop-shadow(0 0 30px #00ffff) drop-shadow(0 0 40px #00ffff)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
          '100%': { opacity: '0.3', transform: 'scale(0.8)' }
        },
        'shooting-star': {
          '0%': {
            transform: 'translateX(-100px) translateY(-100px) rotate(-45deg)',
            opacity: 0
          },
          '20%': {
            opacity: 1
          },
          '80%': {
            opacity: 1
          },
          '100%': {
            transform: 'translateX(1200px) translateY(1200px) rotate(-45deg)',
            opacity: 0
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.space.neon), 0 0 20px theme(colors.space.neon)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
}
