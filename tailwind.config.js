/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        LightRed: "hsl(0, 100%, 67%)",
        VeryLightRed: "hsl(0, 100%, 98%)",
        OrangeyYellow: "hsl(39, 100%, 56%)",
        LightOrangeyYellow: "hsl(39, 100%, 98%)",

        GreenTeal: "hsl(166, 100%, 37%)",
        LightGreenTeal: "hsl(166, 100%, 98%)",

        CobeltBlue: "hsl(234, 85%, 45%)",
        LightCobeltBlue: "hsl(234, 85%, 98%)",

        LightSlateBlue: "hsl(252, 100%, 67%)",
        LightRoyalBlue: "hsl(241, 81%, 54%)",
        VioletBlue: "hsla(256, 72%, 46%, 1)",
        PersianBlue: "hsla(241, 72%, 46%, 0)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",
      },
      fontFamily: {
        Hanken: "Hanken Grotesk",
      },
      fontWeight: {
        small: "500",
        medium: "700",
        large: "800",
      },
      fontSize: {
        size: "18px",
      },
    },
  },
  plugins: [],
};
