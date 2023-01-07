/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "48rem",
      },
      backgroundImage: {
        logo: "url(`../public/logo.png`)",
        firstbg: "url('../public/landing/first.gif')",
        main: "url('../public/landing/main.png')",
        mainwrapper: " url('../public/landing/wrapper.png')",
        Comments: "url('../public/landing/Comments.png')",
        gamewrapper: " url('../public/game/gamewrapper1.png')",
        wallet: "url('../public/game/wallet.png') ",
        roadmap2: "url('../public/landing/Roadbg.png')",
      },
      fontFamily: {
        Diplomata: ["cursive"],
        NanumMyeongo: ["Nanum Myeongjo", "serif"],
        Nosifer: ["Nosifer", "cursive"],
        Wood: ["Holtwood One SC", "serif"],
        Paint: ["Finger Paint", "cursive"],
      },
    },
  },
  plugins: [],
};
