module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // './app/**/*.{js,ts,jsx,tsx}', // Add this if using the /app directory in Next.js 13+

  ],
  theme: {
   
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
