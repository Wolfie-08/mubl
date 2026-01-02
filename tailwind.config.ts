import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b1224",
        blush: "#f7c6ff",
        aurora: "#a5b4fc",
        dusk: "#8b5cf6",
      },
      backgroundImage: {
        "grid-light": "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
        "grid-dark": "radial-gradient(circle, rgba(15,23,42,0.25) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
