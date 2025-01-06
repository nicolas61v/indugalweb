import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: '#28338c',
          },
          secondary: {
            DEFAULT: '#727a8b',
          },
          success: {
            DEFAULT: '#28a745',
          },
          warning: {
            DEFAULT: '#ffc107',
          },
          error: {
            DEFAULT: '#dc3545',
          },
          background: {
            DEFAULT: '#ffffff',
          },
          foreground: {
            DEFAULT: '#ffffff',
          },
        }
      }
    }
  })],
}