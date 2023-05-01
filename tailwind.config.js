/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        gray : {
          400 : '#969798',
          500 : '#666666',
          700 : '#262626',
          900 : '#171818'
        }
      }
      },
    },
  plugins: [],
}
