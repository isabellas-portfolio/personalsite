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
        "bella-pink" : "#ffd6f5",
        "my-pink" : "#de5fbe",
        "my-gray" : "#555759",
        "anjana" : "#6b194d",
        "anjana-2" : "#821159",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite", // 🌸 ← Add this
      },
      fontFamily: {
        jost: ['"Jost"', "sans-serif"],
      },
    },
  },
  plugins: [],

};

export default config;