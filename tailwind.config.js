module.exports = {
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
        "main-background": "url('/images/mainBackground.png')",
        "main-logo": "url('/images/logo.png')",
        "image-avtr": "url('/images/avtr.png')",
        "card-logo": "url('/images/cardlogo.png')",
        "circle-one": "url('/images/circle1.png')",
        "circle-two": "url('/images/circle2.png')",
        "twitter-logo": "url('/images/twitter.png')",
        "discord-logo": "url('/images/discord.png')",
        "linkedln-logo": "url('/images/linkedln.png')",
      },
    },
  },
  plugins: [],
};
