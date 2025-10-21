"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, FolderOpen, BarChart3, Search, Mail, Terminal, ArrowLeft } from "lucide-react"


const dashboardItems = [
  {
    title: "Skills",
    description: "Technical tools and languages",
    icon: Brain,
    href: "/competences",
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Projects",
    description: "Personal work in tech",
    icon: FolderOpen,
    href: "/projets",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Tableau de synthèse",
    description: "Compétences BTS SIO",
    icon: BarChart3,
    href: "/tableau-synthese",
    color: "from-purple-400 to-green-500",
  },
  {
    title: "Veille technologique",
    description: "EDR en PME",
    icon: Search,
    href: "/veille",
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Contact",
    description: "Informations de contact",
    icon: Mail,
    href: "/contact",
    color: "from-yellow-400 to-orange-500",
  },
]

export default function Dashboard() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to terminal
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Dashboard - Aarushi Alreja</h1>
          </div>
          <p className="text-green-300">Computer Science and Statistics student</p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <Card
                className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300 cursor-pointer group h-full"
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
                      <CardTitle className="text-green-400 group-hover:text-green-300 transition-colors">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-300/80">{item.description}</CardDescription>
                  {hoveredCard === index && (
                    <div className="mt-3 text-green-400 text-sm animate-fade-in">Click to gain access →</div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* System Info */}
        <div className="mt-12 border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>system@portfolio:~$ uptime</div>
            <div className="text-green-300 mt-1">
              Active portfolio • Last updated: Oct 2025 • Status: {""}
              <span className="text-green-400">Online</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
