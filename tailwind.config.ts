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
        "purple-bg": "#290742",
        "purple-text": "#9E6DC2",
        "white-text": "#FFFFFF",
        "lime": "#4FFF4B",
        "white-bg": "#FBF6FF",
        "purple-input": "#170027",
        "purple-search": "#F2E7FA",
      },
    },
  },
  plugins: [],
};
export default config;
