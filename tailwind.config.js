/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',
        fg: '#f5f5f7',
        mute: '#8d8d93',
        accent: {
          DEFAULT: '#e8562a',
          hover: '#ff6738',
          glow: 'rgba(232, 86, 42, 0.4)',
        },
        card: '#0a0a0c',
        'card-border': 'rgba(255, 255, 255, 0.08)',
        line: 'rgba(255, 255, 255, 0.12)',
      },
      fontFamily: {
        disp: ['"Barlow Condensed"', '"Arial Narrow"', 'Impact', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widestplus: '.25em',
        eyebrow: '.3em',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite',
        'scroll-hint': 'scrollHint 1.8s infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', filter: 'drop-shadow(0 0 12px rgba(232, 86, 42, 0.8))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 24px rgba(232, 86, 42, 1))' },
        },
        scrollHint: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transform: 'origin-bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        }
      }
    },
  },
  plugins: [],
}

