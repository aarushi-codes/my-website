import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ThemeToggle from "@/components/ThemeToggle"

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
  // Prevent theme flash: default = light; apply dark only if saved === "dark"
  const noFlashScript = `
    try {
      var saved = localStorage.getItem("theme");
      var isDark = saved === "dark";
      document.documentElement.classList.toggle("dark", isDark);
    } catch {}
  `

  return (
    <html lang="en" className={`${firaCode.variable} ${vt323.variable}`} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground font-mono antialiased">
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}

