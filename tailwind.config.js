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
        text: {
          DEFAULT: "#292524", // stone-800 — light mode body
          dark: "#e2e8f0",    // slate-200 — dark mode body
          header: "#f5f5f4",  // stone-100 — dark mode headers
        },
        background: {
          DEFAULT: "#94a3b8", // slate-400 — light mode
          dark: "#292524",    // stone-800 — dark mode
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
