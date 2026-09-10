import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}","./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Barlow Condensed'","sans-serif"],
        body:    ["'Barlow'","sans-serif"],
        mono:    ["'JetBrains Mono'","monospace"],
      },
      colors: {
        orange: { 400:"#FF8833", 500:"#FF5500", 600:"#E04800" },
      },
    },
  },
  plugins: [],
};
export default config;
