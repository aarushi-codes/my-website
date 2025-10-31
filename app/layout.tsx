import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeToggle } from "@/components/ThemeToggle"

// Google fonts (kept)
import { Fira_Code, VT323 } from "next/font/google"

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aarushi Alreja — Portfolio",
  description: "Aarushi Alreja's Portfolio",
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // No-flash of incorrect theme on first paint
  const noFlashScript = `
    try {
      const saved = localStorage.getItem("theme");
      const isLight = saved === "light";
      document.documentElement.classList.toggle("light", isLight);
    } catch {}
  `

  return (
    <html
      lang="en"
      className={`${firaCode.variable} ${vt323.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Ensure browser renders both color schemes correctly */}
        <meta name="color-scheme" content="dark light" />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground font-mono antialiased scan-lines">
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
