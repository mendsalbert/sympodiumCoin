module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "'Montserrat', sans-serif",
        LeagueGothis: "'League Gothic', sans-serif",
      },
      backgroundImage: {
        "main-background": "url('/images/mainBackground.jpg')",
        "main-background-dark": "url('/images/mainBackgroundDark.jpg')",
        "main-logo": "url('/images/logo.png')",
        "image-avtr": "url('/images/avtr.png')",
        "card-logo": "url('/images/cardlogo.png')",
        "circle-one": "url('/images/circle1.png')",
        "circle-two": "url('/images/circle2.png')",
        "twitter-logo": "url('/images/twitter.png')",
        "discord-logo": "url('/images/discord.png')",
        "linkedln-logo": "url('/images/linkedln.png')",
        cube: "url('/images/cube.png')",
        nft: "url('/images/nft.png')",
        "nft-image1": "url('/images/0x0.png')",
        "nft-image2": "url('/images/01.jpg')",
        "nft-image3": "url('/images/02.png')",
      },
    },
  },
  plugins: [],
};
