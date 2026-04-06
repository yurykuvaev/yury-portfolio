// tailwind.config.ts
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
        surface: "#0a0a0a",
        primary: "#ffffff",
        muted: "#888888",
        accent: {
          tf: "#844FBA", // Terraform purple
          aws: "#FF9900", // AWS orange
          k8s: "#326CE5", // K8s blue
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
        mono: ['var(--font-fira-code)'],
      },
    },
  },
  plugins: [],
};
export default config;