/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        back: "#202020",
        secondary: "#313131",
        "light-secondary": "rgb(39,46,57, 0.1)",
        "light-tsecondary": "rgb(102, 102, 102)",

        tsecondary: "rgb(197, 202, 212)"
      }
    },
  },
  plugins: [],
}
