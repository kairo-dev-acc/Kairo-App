/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0a2239",
        secondary: "#53a2be",
        accent: "#1d84b5",
        brand: {
          light: "#132e32",
          DEFAULT: "#176087",
          dark: "#000000ff"
        }
      },
      fontFamily: {
        custom: ["Poppins-Bold", "sans-serif"]
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({

        //* Shadow card
        ".cardShadow": {
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 8,
          elevation: 6,
        },

        //* Extra Bold
        //* Headline
        ".extrabold_headline_0": {
          fontFamily: "Poppins-ExtraBold", fontSize: 43, lineHeight: 52
        },
        ".extrabold_headline_1": {
         fontFamily: "Poppins-ExtraBold", fontSize: 35, lineHeight: 44
        },
        ".extrabold_headline_2": {
          fontFamily: "Poppins-ExtraBold", fontSize: 29, lineHeight: 38 
        },
        ".extrabold_headline_3": {
          fontFamily: "Poppins-ExtraBold", fontSize: 24, lineHeight: 32 
        },
        ".extrabold_headline_4": {
          fontFamily: "Poppins-ExtraBold", fontSize: 20, lineHeight: 26
        },
        //* Body
        ".extrabold_Body_1": {
         fontFamily: "Poppins-ExtraBold", fontSize: 17, lineHeight: 22
        },
        ".extrabold_Body_2": {
          fontFamily: "Poppins-ExtraBold", fontSize: 14, lineHeight: 20
        },
        ".extrabold_Body_3": {
          fontFamily: "Poppins-ExtraBold", fontSize: 12, lineHeight: 16
        },
        ".extrabold_Body_4": {
          fontFamily: "Poppins-ExtraBold", fontSize: 10, lineHeight: 14
        },

        //* Bold
        //* Headline
        ".bold_headline_0": {
          fontFamily: "Poppins-Bold", fontSize: 43, lineHeight: 52
        },
        ".bold_headline_1": {
         fontFamily: "Poppins-Bold", fontSize: 35, lineHeight: 44
        },
        ".bold_headline_2": {
          fontFamily: "Poppins-Bold", fontSize: 29, lineHeight: 38 
        },
        ".bold_headline_3": {
          fontFamily: "Poppins-Bold", fontSize: 24, lineHeight: 32 
        },
        ".bold_headline_4": {
          fontFamily: "Poppins-Bold", fontSize: 20, lineHeight: 26
        },
        //* Body
        ".bold_Body_1": {
         fontFamily: "Poppins-Bold", fontSize: 17, lineHeight: 22
        },
        ".bold_Body_2": {
          fontFamily: "Poppins-Bold", fontSize: 14, lineHeight: 20
        },
        ".bold_Body_3": {
          fontFamily: "Poppins-Bold", fontSize: 12, lineHeight: 16
        },
        ".bold_Body_4": {
          fontFamily: "Poppins-Bold", fontSize: 10, lineHeight: 14
        },

        //* SemiBold
        //* Headline
        ".Semibold_headline_0": {
          fontFamily: "Poppins-SemiBold", fontSize: 43, lineHeight: 52
        },
        ".Semibold_headline_1": {
         fontFamily: "Poppins-SemiBold", fontSize: 35, lineHeight: 44
        },
        ".Semibold_headline_2": {
          fontFamily: "Poppins-SemiBold", fontSize: 29, lineHeight: 38 
        },
        ".Semibold_headline_3": {
          fontFamily: "Poppins-SemiBold", fontSize: 24, lineHeight: 32 
        },
        ".Semibold_headline_4": {
          fontFamily: "Poppins-SemiBold", fontSize: 20, lineHeight: 26
        },
        //* Body
        ".Semibold_Body_1": {
         fontFamily: "Poppins-SemiBold", fontSize: 17, lineHeight: 22
        },
        ".Semibold_Body_2": {
          fontFamily: "Poppins-SemiBold", fontSize: 14, lineHeight: 20
        },
        ".Semibold_Body_3": {
          fontFamily: "Poppins-SemiBold", fontSize: 12, lineHeight: 16
        },
        ".Semibold_Body_4": {
          fontFamily: "Poppins-SemiBold", fontSize: 10, lineHeight: 14
        },

        //* Medium
        //* Headline
        ".Medium_headline_0": {
          fontFamily: "Poppins-Medium", fontSize: 43, lineHeight: 52
        },
        ".Medium_headline_1": {
         fontFamily: "Poppins-Medium", fontSize: 35, lineHeight: 44
        },
        ".Medium_headline_2": {
          fontFamily: "Poppins-Medium", fontSize: 29, lineHeight: 38 
        },
        ".Medium_headline_3": {
          fontFamily: "Poppins-Medium", fontSize: 24, lineHeight: 32 
        },
        ".Medium_headline_4": {
          fontFamily: "Poppins-Medium", fontSize: 20, lineHeight: 26
        },
        //* Body
        ".Medium_Body_1": {
         fontFamily: "Poppins-Medium", fontSize: 17, lineHeight: 22
        },
        ".Medium_Body_2": {
          fontFamily: "Poppins-Medium", fontSize: 14, lineHeight: 20
        },
        ".Medium_Body_3": {
          fontFamily: "Poppins-Medium", fontSize: 12, lineHeight: 16
        },
        ".Medium_Body_4": {
          fontFamily: "Poppins-Medium", fontSize: 10, lineHeight: 14
        },

        //* Regular
        //* Headline
        ".Regular_headline_0": {
          fontFamily: "Poppins-Regular", fontSize: 43, lineHeight: 52
        },
        ".Regular_headline_1": {
         fontFamily: "Poppins-Regular", fontSize: 35, lineHeight: 44
        },
        ".Regular_headline_2": {
          fontFamily: "Poppins-Regular", fontSize: 29, lineHeight: 38 
        },
        ".Regular_headline_3": {
          fontFamily: "Poppins-Regular", fontSize: 24, lineHeight: 32 
        },
        ".Regular_headline_4": {
          fontFamily: "Poppins-Regular", fontSize: 20, lineHeight: 26
        },
        //* Body
        ".Regular_Body_1": {
         fontFamily: "Poppins-Regular", fontSize: 17, lineHeight: 22
        },
        ".Regular_Body_2": {
          fontFamily: "Poppins-Regular", fontSize: 14, lineHeight: 20
        },
        ".Regular_Body_3": {
          fontFamily: "Poppins-Regular", fontSize: 12, lineHeight: 16
        },
        ".Regular_Body_4": {
          fontFamily: "Poppins-Regular", fontSize: 10, lineHeight: 14
        },

        //* Light
        //* Headline
        ".Light_headline_0": {
          fontFamily: "Poppins-Light", fontSize: 43, lineHeight: 52
        },
        ".Light_headline_1": {
         fontFamily: "Poppins-Light", fontSize: 35, lineHeight: 44
        },
        ".Light_headline_2": {
          fontFamily: "Poppins-Light", fontSize: 29, lineHeight: 38 
        },
        ".Light_headline_3": {
          fontFamily: "Poppins-Light", fontSize: 24, lineHeight: 32 
        },
        ".Light_headline_4": {
          fontFamily: "Poppins-Light", fontSize: 20, lineHeight: 26
        },
        //* Body
        ".Light_Body_1": {
         fontFamily: "Poppins-Light", fontSize: 17, lineHeight: 22
        },
        ".Light_Body_2": {
          fontFamily: "Poppins-Light", fontSize: 14, lineHeight: 20
        },
        ".Light_Body_3": {
          fontFamily: "Poppins-Light", fontSize: 12, lineHeight: 16
        },
        ".Light_Body_4": {
          fontFamily: "Poppins-Light", fontSize: 10, lineHeight: 14
        },


      });
    }),
  ],
};
