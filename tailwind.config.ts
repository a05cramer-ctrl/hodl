import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: "#FFD700",
          400: "#D4AF37",
          500: "#B8860B",
          600: "#996515",
          700: "#7A5109",
        },
        dark: {
          900: "#0A0A0A",
          800: "#111111",
          700: "#1A1A1A",
          600: "#222222",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-delay-1": "fadeIn 1s ease-out 0.2s forwards",
        "fade-in-delay-2": "fadeIn 1s ease-out 0.4s forwards",
        "fade-in-delay-3": "fadeIn 1s ease-out 0.6s forwards",
        "fade-in-delay-4": "fadeIn 1s ease-out 0.8s forwards",
        "fade-in-delay-5": "fadeIn 1s ease-out 1.0s forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in-up-delay-1": "fadeInUp 1s ease-out 0.2s forwards",
        "fade-in-up-delay-2": "fadeInUp 1s ease-out 0.4s forwards",
        "fade-in-up-delay-3": "fadeInUp 1s ease-out 0.6s forwards",
        "fade-in-up-delay-4": "fadeInUp 1s ease-out 0.8s forwards",
        "fade-in-up-delay-5": "fadeInUp 1s ease-out 1.0s forwards",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "coin-spin": "coinSpin 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        coinSpin: {
          "0%, 100%": { transform: "rotateY(0deg) scale(1)" },
          "25%": { transform: "rotateY(15deg) scale(1.05)" },
          "75%": { transform: "rotateY(-15deg) scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
