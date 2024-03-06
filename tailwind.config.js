module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        light_green: { 900: "#426b1f" },
        gray: { 50: "#fafaf5", 300: "#e6e6e6", 400: "#c2c2c2", 600: "#6d6d6d" },
        black: { 900: "#000000" },
      },
      boxShadow: { xs: "0px 4px  4px 0px #0000003f" },
      fontFamily: { inter: "Inter", newsreader: "Newsreader" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
