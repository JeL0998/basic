import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "rgb(var(--brand)/<alpha-value>)" },
        onbrand: { DEFAULT: "rgb(var(--onbrand)/<alpha-value>)" }
      },
      boxShadow: { soft: "0 12px 32px -12px rgba(0,0,0,.3)" }
    }
  },
  plugins: []
};
export default config;
