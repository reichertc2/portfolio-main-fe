/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme:{
    extend: {
      colors: {
        primary: {
          DEFAULT: "#57534e", // stone-600 — warm mid-tone accent
          light: "#78716c",   // stone-500 — hover / lighter states
          dark: "#44403c",    // stone-700 — pressed / dark-mode accent
        },
        secondary: {
          DEFAULT: "#64748b", // slate-500 — cool mid-tone accent
          light: "#94a3b8",   // slate-400 — hover (matches original light bg)
          dark: "#475569",    // slate-600 — dark-mode accent
        },
        background: {
          DEFAULT: "#94a3b8", // slate-400 — light mode (original)
          dark: "#292524",    // stone-800 — dark mode (original)
          medium: "#a8a29e",  // stone-400 — mid surfaces / cards
        },
        text: {
          DEFAULT: "#292524", // stone-800 — light mode body (original)
          dark: "#e2e8f0",    // slate-200 — dark mode body (original)
          light: "#f5f5f4",   // stone-100 — headers / inverted text (original header)
        },
        border: {
          DEFAULT: "#57534e", // stone-600 — light mode
          dark: "#e2e8f0",    // slate-200 — dark mode
          light: "#94a3b8",   // slate-400 — subtle / accent
          primary: "#57534e",
        },
      },
      animation: {
        'moveline': 'moveline 6s linear forwards',
      },
      keyframes: {
        moveline: {
          '0%': { height: '0%' },
          '100%': { height:'100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  },
  plugins: [],
}
