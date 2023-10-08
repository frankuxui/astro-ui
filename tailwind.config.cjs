/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {

      //
      // Colors

      colors: {
        primary: '#6d28d9',
        error: '#d30b5f',
        dark: '#101729'
      }
    }
  },
  plugins: []
}
