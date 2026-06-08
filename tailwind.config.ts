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
        "bg-primary": "#0d1117",
        "bg-secondary": "#161b22",
        "bg-card": "#1a2232",
        "bg-card-alt": "#1e2a3a",
        "border-color": "#2a3a4a",
        "accent-cyan": "#00d4c8",
        "accent-cyan-dim": "#00b8ad",
        "text-primary": "#e6edf3",
        "text-secondary": "#8b9cb6",
        "text-muted": "#6a7a8e",
        "status-active": "#22c55e",
        "status-expiring": "#f59e0b",
        "status-review": "#3b82f6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
