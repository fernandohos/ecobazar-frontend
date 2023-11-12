import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        softPrimary: "#84D187",
        primary: "#00B207",
        hardPrimary: "#2C742F",
        warning: "#FF8A00",
        danger: "#EA4B48",
        white: "#FFFFFF",
        gray: {
          900: "#1A1A1A",
          800: "#333333",
          700: "#4D4D4D",
          600: "#666666",
          500: "#808080",
          400: "#999999",
          300: "#B3B3B3",
          200: "#CCCCCC",
          100: "#E6E6E6",
          50: "#F2F2F2",
        },
        greenGray: {
          900: "#002603",
          800: "#173B1A",
          700: "#2B572E",
          600: "#406B42",
          500: "#618062",
          400: "#7A997C",
          300: "#96B297",
          200: "#B4CCB4",
          100: "#DAE5DA",
          50: "#EDF2EE",
        },
      },
      spacing: {
        sm: "0.8rem",
        md: "1.6rem",
        lg: "2.4rem",
        xl: "3.2rem",
        "2xl": "4rem",
        "3xl": "4.8rem",
        "4xl": "5.6rem",
      },
      fontSizes: {
        d1: "7.2rem",
        h1: "5.6rem",
        h2: "4.8rem",
        h3: "4.0rem",
        h4: "3.6rem",
        h5: "3.2rem",
      },
    },
  },
  plugins: [],
};
export default config;
