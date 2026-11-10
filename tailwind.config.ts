import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        conduit: ["var(--font-conduitITC)"],
        conduitbold: ["var(--font-conduitITC-bold)"],
        yantramanav: ["var(--font-yantramanav-regular)"],
      },
    },
  },
  plugins: [],
};
export default config;
