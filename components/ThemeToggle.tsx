"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isLight, setIsLight] = useState(false)

  // Apply saved theme on mount (default = dark)
  useEffect(() => {
    const saved = localStorage.getItem("theme") // "light" | "dark"
    const preferLight = saved === "light"
    setIsLight(preferLight)
    document.documentElement.classList.toggle("light", preferLight)
  }, [])

  const toggle = () => {
    const next = !isLight
    setIsLight(next)
    document.documentElement.classList.toggle("light", next)
    localStorage.setItem("theme", next ? "light" : "dark")
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-[3000] rounded-full border border-border px-3 py-2 bg-card/80 backdrop-blur
                 hover:shadow-[0_0_10px] hover:shadow-[hsl(var(--accent))]
                 text-foreground flex items-center gap-2"
      aria-label="Toggle light/dark theme"
    >
      {isLight ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="text-sm">{isLight ? "Light" : "Dark"}</span>
    </button>
  )
}
