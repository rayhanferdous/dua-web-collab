/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,jsx,ts,tsx,html}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "scale-down": "scale-down 0.2s linear",
        "scale-up": "scale-up 0.2s linear",
      },
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scale-down": {
          "0%": {
            opacity: "0",
            
          },
          "100%": {
            opacity: '1',
          },
        },
        "scale-up": {
          "0%": {
            opacity: "1",
            
          },
          "100%": {
            opacity: '0',
          },
        },
      },
      screens: {
        "xs-min": { min: "220px" },
        "sm-min": { min: "640px" },
        "md-min": { min: "768px" },
        "lg-min": { min: "1024px" },
        "xl-min": { min: "1280px" },
        "2xl-min": { min: "1535px" },

        "xs-max": { max: "639px" },
        "sm-max": { max: "767px" },
        "md-max": { max: "1023px" },
        "lg-max": { max: "1279px" },
        "xl-max": { max: "1534px" },
        "2xl-max": { max: "1919px" },





        xs: { max: "639px"},
        sm: { min: "640px", max: "767px" },
        md: { min: "768px", max: "1139px" },
        lg: { min: "1140px", max: "1279px" },
        xl: { min: "1280px", max: "1639px" },
        "2xl": { min: "1640px", max: "1919px" },
        "3xl": { min: "1920px" },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        kgfq: ["kgfq", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
      },
      dropShadow: {
       'bg' : "0 10px 14px rgba(31,164,91,0.15)",
      },

      fontSize: {
        ms: "0.8rem",
        mss: "0.9375rem",
        "2xs": "0.8125rem",
      },
      colors: {
        "regal-blue": "#FF0000",
        "scroll-bar": "#E2E2E2",
        "mute-grey": "#7E7E7E",
        "mute-grey-200": "#868686",
        "dua-bg": "#F7F8FA",
        "icon-2bg": "#F7F8FA",
        "icon-bg": "#E8F0F5",
       "bgss" : "#1FA45B",
        title: "#393939",
        devider: "#efefef",
        "body-bg": "#ebeef2",
        "text-title": "#373737",
        "momorize-rgba": "rgba(255,248,234,0.15)",
      },
      margin: {
        4.5: "1.2rem",
        15: "3.75rem",
        62: "15.5rem",
        18: "4.84rem",
        top: "5.5rem",
        left: "18.3%",
      },
      minHeight: {
        "6/6": "89.9%",
        18: "4.84rem",
        22: "5.2rem",
        13: "3.2rem",
        15: "3.75rem",
        17: "4.2rem",
        82: "22rem",
        100: "82vh",
        170: "45rem",
      },
      height: {
        "6/6": "89.9%",
        18: "4.84rem",
        22: "5.2rem",
        13: "3.2rem",
        15: "3.75rem",
        17: "4.2rem",
        82: "22rem",
        100: "82vh",
        170: "45rem",
      },

      width: {
        home: "62.7%",
        "0.5/12": "5.5%",
        // "2.2/12": "17.266667%",
        "2.2/12": "17.266667%",
        "2.5/12": "18.666667%",
        "3.5/12": "30%",
        "7.5/12": "64.666667%",
        "9.1/12": "75.833333%",
        "10.1/12": "85%",
        15: "3.75rem",
        13: "3.2rem",
        17: "4.2rem",
        25: "6.3rem",
        26: "6.7rem",
        29: "7.55rem",
        30: "7.6875rem",
        0.1: "0.08rem",
        82: "22rem",
      },
      borderRadius: {
        "2lg": "0.625rem",
        "4xl": "2rem",
      },
      scale: {
        200: "2.3",
      },
      boxShadow: {
        top: "0px -2.05128px 10.2564px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded', 'dark'],
    
},
};
