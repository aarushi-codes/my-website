"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Laugh, Binary, Newspaper, Terminal, ArrowLeft, UserSearch } from "lucide-react"
import { Footer } from "@/components/footer"

const dashboardItems = [
  {
    title: "Projects",
    description: "Personal work in tech",
    icon: Binary,
    href: "/projets",
    color: "from-blue-400 to-cyan-500",
  },
  // {
  //   title: "Skills",
  //   description: "Technical tools and languages",
  //   icon: Laugh,
  //   href: "/competences",
  //   color: "from-green-400 to-emerald-500",
  // },
  {
    title: "Experience",
    description: "Aarushi's resume",
    icon: Newspaper,
    href: "/tableau-synthese",
    color: "from-purple-400 to-green-500",
  },
  {
    title: "Contact",
    description: "Contact information",
    icon: UserSearch,
    href: "/contact",
    color: "from-yellow-400 to-orange-500",
  },
]

export default function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background p-4 scan-lines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:opacity-80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to terminal
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Dashboard - Aarushi Alreja</h1>
          </div>
          <p className="text-[hsl(var(--muted-foreground))]">Computer Science and Statistics student</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card
                className="bg-card/50 border border-[hsl(var(--border))] hover:border-[hsl(var(--ring))] transition-all duration-300 cursor-pointer group h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-primary group-hover:opacity-80 transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[hsl(var(--muted-foreground))]">
                    {item.description}
                  </CardDescription>
                  {hoveredCard === index && (
                    <div className="mt-3 text-primary text-sm animate-fade-in">Click to gain access →</div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* System Info */}
        <div className="mt-12 border border-[hsl(var(--border))] rounded-lg p-4 bg-card/20">
          <div className="text-primary text-sm font-mono">
            <div>system@portfolio:~$ uptime</div>
            <div className="text-[hsl(var(--muted-foreground))] mt-1">
              Active portfolio • Last updated: Oct 2025 • Status:{" "}
              <span className="text-primary">Online</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
