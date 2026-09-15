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
        gold: "#c8a96e",
      },
      typography: {
        invert: {
          css: {
            color: "#888888",
            "h1,h2,h3,h4": { color: "#ffffff" },
            a: { color: "#c8a96e" },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
