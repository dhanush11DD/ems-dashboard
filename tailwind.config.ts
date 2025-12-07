import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom color palette for EMS Dashboard
      colors: {
        // Primary brand colors
        brand: {
          primary: "#22d3ee", // cyan-400
          secondary: "#3b82f6", // blue-500
          accent: "#a855f7", // purple-600
        },
        
        // Status colors
        status: {
          online: {
            DEFAULT: "#4ade80", // green-400
            light: "#86efac", // green-300
            dark: "#22c55e", // green-500
            bg: "rgba(34, 197, 94, 0.2)", // green-500/20
            border: "rgba(34, 197, 94, 0.5)", // green-500/50
          },
          offline: {
            DEFAULT: "#f87171", // red-400
            light: "#fca5a5", // red-300
            dark: "#ef4444", // red-500
            bg: "rgba(239, 68, 68, 0.2)", // red-500/20
            border: "rgba(239, 68, 68, 0.5)", // red-500/50
          },
          warning: {
            DEFAULT: "#facc15", // yellow-400
            light: "#fde047", // yellow-300
            dark: "#eab308", // yellow-500
            bg: "rgba(234, 179, 8, 0.2)", // yellow-500/20
            border: "rgba(234, 179, 8, 0.5)", // yellow-500/50
          },
          standby: {
            DEFAULT: "#60a5fa", // blue-400
            light: "#93c5fd", // blue-300
            dark: "#3b82f6", // blue-500
            bg: "rgba(59, 130, 246, 0.2)", // blue-500/20
            border: "rgba(59, 130, 246, 0.5)", // blue-500/50
          },
          error: {
            DEFAULT: "#f87171", // red-400
            light: "#fca5a5", // red-300
            dark: "#ef4444", // red-500
            bg: "rgba(239, 68, 68, 0.2)", // red-500/20
            border: "rgba(239, 68, 68, 0.5)", // red-500/50
          },
        },

        // Phase colors (for power monitoring)
        phase: {
          red: {
            DEFAULT: "#f87171", // red-400
            light: "#fca5a5", // red-300
            dark: "#ef4444", // red-500
            from: "#ef4444",
            to: "#f87171",
          },
          yellow: {
            DEFAULT: "#facc15", // yellow-400
            light: "#fde047", // yellow-300
            dark: "#eab308", // yellow-500
            from: "#eab308",
            to: "#facc15",
          },
          blue: {
            DEFAULT: "#60a5fa", // blue-400
            light: "#93c5fd", // blue-300
            dark: "#3b82f6", // blue-500
            from: "#3b82f6",
            to: "#60a5fa",
          },
        },

        // Semantic colors
        semantic: {
          success: "#4ade80", // green-400
          info: "#22d3ee", // cyan-400
          danger: "#f87171", // red-400
          alert: "#fb923c", // orange-400
        },

        // Background colors
        background: {
          primary: "#000000", // black
          secondary: "#111827", // gray-900
          tertiary: "#1f2937", // gray-800
          card: "rgba(31, 41, 55, 0.5)", // gray-800/50
          overlay: "rgba(0, 0, 0, 0.3)", // black/30
        },

        // Text colors
        text: {
          primary: "#f3f4f6", // gray-100
          secondary: "#9ca3af", // gray-400
          tertiary: "#6b7280", // gray-500
          accent: "#22d3ee", // cyan-400
          white: "#ffffff",
        },

        // Border colors
        border: {
          primary: "rgba(34, 211, 238, 0.3)", // cyan-500/30
          secondary: "rgba(107, 114, 128, 0.5)", // gray-700/50
          accent: {
            cyan: "rgba(34, 211, 238, 0.3)", // cyan-500/30
            blue: "rgba(59, 130, 246, 0.3)", // blue-500/30
            purple: "rgba(168, 85, 247, 0.3)", // purple-500/30
            green: "rgba(34, 197, 94, 0.3)", // green-500/30
            red: "rgba(239, 68, 68, 0.3)", // red-500/30
            orange: "rgba(249, 115, 22, 0.3)", // orange-500/30
          },
        },
      },

      // Border color utilities
      borderColor: {
        "accent-cyan": "rgba(34, 211, 238, 0.3)",
        "accent-blue": "rgba(59, 130, 246, 0.3)",
        "accent-purple": "rgba(168, 85, 247, 0.3)",
        "accent-green": "rgba(34, 197, 94, 0.3)",
        "accent-red": "rgba(239, 68, 68, 0.3)",
        "accent-orange": "rgba(249, 115, 22, 0.3)",
      },

      // Background gradients
      backgroundImage: {
        "gradient-primary": "linear-gradient(to bottom right, #111827, #000000, #111827)",
        "gradient-card": "linear-gradient(to right, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5))",
        "gradient-card-br": "linear-gradient(to bottom right, rgba(31, 41, 55, 0.5), rgba(17, 24, 39, 0.5))",
        "gradient-title": "linear-gradient(to right, #22d3ee, #3b82f6, #a855f7)",
        "gradient-glow-cyan": "linear-gradient(to bottom right, rgba(34, 211, 238, 0.1), transparent)",
        "gradient-glow-green": "linear-gradient(to bottom right, rgba(34, 197, 94, 0.1), transparent)",
        "gradient-glow-purple": "linear-gradient(to bottom right, rgba(168, 85, 247, 0.1), transparent)",
        "gradient-glow-blue": "linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), transparent)",
      },

      // Box shadows
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.3)",
        "glow-green": "0 0 20px rgba(34, 197, 94, 0.3)",
        "glow-red": "0 0 20px rgba(239, 68, 68, 0.3)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.3)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.3)",
        "card": "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
        "card-hover": "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)",
      },

      // Border radius
      borderRadius: {
        card: "0.5rem", // 8px
        button: "0.375rem", // 6px
        badge: "0.25rem", // 4px
      },

      // Spacing
      spacing: {
        card: "1rem", // 16px
        section: "1.5rem", // 24px
      },

      // Font families
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "Menlo", "Monaco", "Courier New", "monospace"],
      },

      // Font sizes
      fontSize: {
        "display-1": ["4rem", { lineHeight: "1", fontWeight: "700" }], // 64px
        "display-2": ["3rem", { lineHeight: "1", fontWeight: "700" }], // 48px
        "heading-1": ["2.25rem", { lineHeight: "2.5rem", fontWeight: "700" }], // 36px
        "heading-2": ["1.875rem", { lineHeight: "2.25rem", fontWeight: "600" }], // 30px
        "heading-3": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }], // 24px
        "heading-4": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }], // 20px
        "body-lg": ["1.125rem", { lineHeight: "1.75rem", fontWeight: "400" }], // 18px
        "body": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }], // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }], // 14px
        "caption": ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }], // 12px
        "label": ["0.75rem", { lineHeight: "1rem", fontWeight: "500", letterSpacing: "0.05em" }], // 12px
      },

      // Backdrop blur
      backdropBlur: {
        card: "4px",
      },

      // Animations
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },

      // Custom utilities
      letterSpacing: {
        wider: "0.05em",
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};

export default config;
