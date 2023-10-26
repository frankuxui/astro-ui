/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: "class",
  theme: {
    extend: {

      // Animation

      animation: {
        popover: 'popover 0.2s linear',
        growing: 'growing .75s linear infinite'
      },
      

      // Colors

      colors: {
        primary: colors.violet[700],
        'primary-dark': colors.violet[800],

        secondary: colors.gray[200],
        'secondary-dark': colors.gray[300],

        error: colors.rose[600],
        'error-dark': colors.rose[700],
        'error-light': colors.rose[100],

        success: colors.emerald[500],
        'success-dark': colors.emerald[600],
        'success-light': colors.emerald[100],

        dark: '#101729'
      },

      
      // Keyframes

      keyframes: {
        popover: {
          '0%': {
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: 1,
          }
        },
        growing: {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'none',
            opacity: 1
          }
        }
      },
    }
    
  },
  plugins: []
}
