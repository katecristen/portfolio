/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#0B0B0F',
        surface: '#15151C',
        text: '#FFFFFF',
        muted: '#A1A1AA',
        accent: '#A78BFA',
        'accent-hover': '#C4B5FD',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(167,139,250,0.25), 0 24px 70px rgba(0,0,0,0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        shimmer: 'shimmer 3.5s linear infinite',
        reveal: 'revealUp 0.9s ease both',
      },
    },
  },
  plugins: [],
};