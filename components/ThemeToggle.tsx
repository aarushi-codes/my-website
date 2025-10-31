"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false)
  
    // Apply saved theme on mount (default = light; add .dark only if saved === "dark")
    useEffect(() => {
      const saved = localStorage.getItem("theme") // "light" | "dark" | null
      const dark = saved === "dark"
      setIsDark(dark)
      document.documentElement.classList.toggle("dark", dark)
    }, [])
  
    const toggle = () => {
      const next = !isDark
      setIsDark(next)
      document.documentElement.classList.toggle("dark", next)
      localStorage.setItem("theme", next ? "dark" : "light")
    }
  
    return (
      <button
        onClick={toggle}
        title="Toggle theme"
        aria-label="Toggle light/dark theme"
        className="fixed top-4 right-4 z-[3000] rounded-full border border-[hsl(var(--border))] bg-card/80 backdrop-blur px-3 py-2
                   text-foreground flex items-center gap-2 transition
                   hover:shadow-[0_0_10px_hsl(var(--ring))]
                   focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 focus:ring-offset-[hsl(var(--background))]"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        <span className="text-sm">{isDark ? "Light" : "Dark"}</span>
      </button>
    )
  }
