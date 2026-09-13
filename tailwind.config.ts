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
        background: "#050505",
        surface: "#090D16",
        cyber: {
          cyan: "#00F0FF",
          blue: "#0070F3",
          violet: "#7928CA",
          pink: "#FF007F",
        },
      },
      boxShadow: {
        glow: "0 0 20px -3px rgba(0, 240, 255, 0.3)",
        "glow-violet": "0 0 20px -3px rgba(121, 40, 202, 0.3)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;