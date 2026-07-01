/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          // Backgrounds
          bg: "#F0E7D5",          // Main page background
          surface: "#FFFFFF",     // Cards
          surfaceSoft: "#F7F1E5", // Slightly lighter surface
          overlay: "#E8DCCB",     // Optional only for modals

          // Primary Brand
          primary: "#4B3935",     // Deep Brown
          secondary: "#C8A97E",   // Gold Accent

          // Text
          text: "#4B3935",
          muted: "#7A6A65",

          // Border
          border: "#D9CBB6",
        },

        dark: {
          bg: "#111111",
          surface: "#1E1E1E",
          primary: "#FFFFFF",
          secondary: "#C8A97E",
          text: "#FFFFFF",
          muted: "#CFCFCF",
          border: "#2E2E2E",
        },

        accent: {
          success: "#22C55E",
          warning: "#F59E0B",
          error: "#EF4444",
        },
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },

      boxShadow: {
        card: "0 8px 25px rgba(75,57,53,0.08)",
        hover: "0 12px 30px rgba(75,57,53,0.15)",
      },

      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
      },

      keyframes: {
        glow: {
          "0%": {
            boxShadow: "0 0 8px rgba(200,169,126,0.3)",
          },
          "100%": {
            boxShadow: "0 0 22px rgba(200,169,126,0.55)",
          },
        },
      },
    },
  },

  plugins: [],
};