import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      ssm: "320px",
      sm: "420px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1920px"
    },
    extend: {
      colors: {
        "main-blue": "#7A90E2"
      }
    }
  }
};
export default config;
