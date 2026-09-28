/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matrix: {
          bg: '#050505',
          dark: '#070A0F',
          surface: '#0D1117',
          card: '#0A0E14',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(0, 240, 255, 0.3)',
          cyan: '#00F0FF',
          green: '#00FF9D',
          emerald: '#10B981',
          muted: '#8B949E',
          dim: '#484F58',
          text: '#F0F6FC'
        }
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Be Vietnam Pro"', '"Plus Jakarta Sans"', 'sans-serif'],
        tech: ['"Chakra Petch"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'cyan-glow': 'radial-gradient(ellipse at 50% 0%, rgba(0, 240, 255, 0.15) 0%, transparent 60%)',
        'green-glow': 'radial-gradient(ellipse at 50% 0%, rgba(0, 255, 157, 0.12) 0%, transparent 60%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
