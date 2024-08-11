/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          primaryColor: 'hsl(233, 26%, 24%)',
          secondaryColor: 'hsl(136, 65%, 51%)',
          tertiaryColor: 'hsl(192, 70%, 51%)'
        },
        neutral: {
          textColor: 'hsl(233, 8%, 62%)',
          bgColor: 'hsl(220, 16%, 96%)',
          secondaryBgColor: 'hsl(0, 0%, 100%)'
        }
      },
      fontFamily: {
        publicSans: ['Public Sans', 'sans-serif']
      },
      fontWeight: {
        fontLight: '300',
        fontRegular: '400',
        fontBold: '700',
      },
    },
  },
  plugins: [],
}

