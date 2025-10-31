import type { Config } from "tailwindcss"

const config: Config = {
  // We theme via CSS variables and a `.light` class on <html>.
  // `darkMode` can stay "class" (harmless), but we won't use `.dark` here.
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core tokens mapped to CSS variables (defined in globals.css)
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        // Optional buckets; safe to keep if you reference them
        chart: {
          "1": "hsl(var(--chart-1, 210 100% 50%))",
          "2": "hsl(var(--chart-2, 160 100% 40%))",
          "3": "hsl(var(--chart-3, 45 100% 50%))",
          "4": "hsl(var(--chart-4, 280 100% 60%))",
          "5": "hsl(var(--chart-5, 340 100% 60%))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background, var(--card)))",
          foreground: "hsl(var(--sidebar-foreground, var(--foreground)))",
          primary: "hsl(var(--sidebar-primary, var(--primary)))",
          "primary-foreground":
            "hsl(var(--sidebar-primary-foreground, var(--primary-foreground)))",
          accent: "hsl(var(--sidebar-accent, var(--accent)))",
          "accent-foreground":
            "hsl(var(--sidebar-accent-foreground, var(--accent-foreground)))",
          border: "hsl(var(--sidebar-border, var(--border)))",
          ring: "hsl(var(--sidebar-ring, var(--ring)))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      fontFamily: {
        mono: ["var(--font-fira)", "ui-monospace", "SFMono-Regular", "monospace"],
        vt323: ["var(--font-vt323)", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
