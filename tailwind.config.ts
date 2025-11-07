import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        stepper: {
          gold: '#F9B400',
          purple: '#5328A1',
          black: '#1C1C1C',
          white: '#FFFFFF',
          solar: '#FFEB6E',
          green: '#4ADE80',
          red: '#EF4444',
          blue: '#60A5FA',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'walk': 'walk 10s linear infinite',
      },
      keyframes: {
        walk: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
