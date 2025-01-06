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
    dark: true,
    colors: {
      primary: '#0070f3',
      secondary: '#f81ce5',
      success: '#28a745',
      warning: '#ffc107',
      error: '#dc3545',
      light: '#f8f9fa',
      dark: '#343a40',
      background: '#ffffff',
      foreground: '#000000',
    }
  })],
}
