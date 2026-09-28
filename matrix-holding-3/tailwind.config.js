/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FAF9F6',
          100: '#F5F3EE', // Primary warm ivory background
          200: '#EFECE6',
          300: '#E4DFD5', // Hairline borders
          400: '#CEC8BC',
          500: '#A49F94',
          600: '#6B6B65', // Secondary text
          700: '#474742',
          800: '#282825',
          900: '#111111', // Primary dark text
        },
        burgundy: {
          light: '#782335',
          DEFAULT: '#5A1827',
          deep: '#3D0E19',
        },
        olive: {
          light: '#4E5549',
          DEFAULT: '#383D34',
          dark: '#242821',
        },
      },
      fontFamily: {
        serif: ['"Lora"', '"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        tight: '-0.015em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.08em',
        widest: '0.15em',
        ultra: '0.22em',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
    },
  },
  plugins: [],
}
