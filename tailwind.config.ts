import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        bg: '#0b0b0b',
        surface: '#141414',
        elevated: '#1e1e1e',
        border: '#262626',
        'text-primary': '#e8e4dc',
        'text-muted': '#5a5a5a',
        accent: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          dim: '#c9a84c26',
        },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease forwards',
        'fade-up-delay-1': 'fade-up 0.7s 0.1s ease forwards',
        'fade-up-delay-2': 'fade-up 0.7s 0.2s ease forwards',
        'fade-up-delay-3': 'fade-up 0.7s 0.3s ease forwards',
        'fade-up-delay-4': 'fade-up 0.7s 0.4s ease forwards',
        'fade-in': 'fade-in 1s ease forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
