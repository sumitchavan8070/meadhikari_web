module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.8rem',
        'sm': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        DMSans: ["DM Sans"],
        Arvo: ["Arvo"]
      },
 
      backgroundImage: {
        illustration: "url('/illustration.png')"
      },
      colors: {
        darkblue: '#02073E',
        green: '#00A99D'
      },
      fontWeight: {
        extrabold: 700
      },
      dropShadow: {
        '3xl': '0 25px 25px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
