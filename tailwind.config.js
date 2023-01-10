module.exports = {
  content: ["./src/**/*.{html,js}","./src/**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#5E5EDD',
        secondary: '#D453B6',
        warning: "#FFF0F0",
        'ab-disabled': "#C2C2C2",
        'primary-light': "#F2EBFF",
        ab: {
          red: "#EB0000",
          green: "#01944C",
          black: "#484848",
          yellow: "#FFE01B",
          "disabled-yellow": "#FCF5CD",
          gray: {
            light: "#F8F8F8",
            dark: "#DDDDDD",
            medium: "#E0E0E0",
            bold: "#6A737D",
          }
        }
      },
    },
  },
  plugins: [],
}
