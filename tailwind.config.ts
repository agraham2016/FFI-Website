import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Calm, trustworthy palette: deep teal + warm sand accents
        brand: {
          50: "#eef7f7",
          100: "#d6ebec",
          200: "#aed7da",
          300: "#7ebbc0",
          400: "#4f9ba2",
          500: "#367f87",
          600: "#28666d",
          700: "#205359",
          800: "#1c4146",
          900: "#162f33",
          950: "#0c1d20",
        },
        accent: {
          50: "#fdf8f1",
          100: "#f8ecd9",
          200: "#f0d5ad",
          300: "#e6b97b",
          400: "#dc9d52",
          500: "#cc8235",
          600: "#b06829",
          700: "#8c4f23",
          800: "#704022",
          900: "#5c361f",
        },
        ink: {
          DEFAULT: "#111827",
          soft: "#1f2937",
          muted: "#4b5563",
          subtle: "#6b7280",
        },
        surface: {
          DEFAULT: "#ffffff",
          alt: "#f7f5f1",
          sand: "#f3efe7",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      fontSize: {
        // Tighter, more deliberate type scale
        "display-xl": ["clamp(2.75rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
        card: "0 4px 6px -1px rgba(16, 24, 40, 0.06), 0 2px 4px -2px rgba(16, 24, 40, 0.06)",
        lift: "0 20px 40px -20px rgba(16, 24, 40, 0.18), 0 8px 16px -8px rgba(16, 24, 40, 0.08)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "fade-in": "fade-in 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
