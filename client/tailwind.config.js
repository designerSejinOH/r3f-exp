module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: '640px',

        tablet: '768px',

        desktop: '1024px',
      },
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
      },
      gridTemplateRows: {
        layout: '100px auto 100px',
        layoutMobile: '1fr 2fr 1.5fr 1fr',
        content: '1fr 3fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
