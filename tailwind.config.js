/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "390px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
        roadEmpty: "url('../public/landing/RoadMapEmpty.png')",
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
