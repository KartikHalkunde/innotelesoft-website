import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        preloaderLine: 'preloaderLine 2s ease-in-out infinite',
        underline: 'underline 0.8s ease-in-out forwards',
        bounceArrow: 'bounceArrow 1s ease-in-out infinite',
      },
      keyframes: {
        underline: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: 'left',
          },
          '100%': {
            transform: 'scaleX(1)',
            transformOrigin: 'left',
          },
        },
        bounceArrow: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(8px)',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config 