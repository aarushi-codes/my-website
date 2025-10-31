"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Server,
  Monitor,
  Database,
  Network,
  FileText,
  Building,
  Github,
  Lock,
  Mail,
} from "lucide-react"
import { Footer } from "@/components/footer"

const projects = [
  {
    id: 1,
    title: "KindSite: Make every site a little kinder!",
    objective:
      "KindSite empowers universities to deliver consistent, personalized accessibility at scale, thus reducing cognitive load, unifying support tools, and turning every course resource into a kinder, more inclusive learning experience.",
    tasks: ["Frontend Integration", "Supabase Setup", "ElevenLabs Voice Cloning", "Chrome Extension Development"],
    technologies: ["Next.js", "React", "Tailwind", "Flask", "Supabase", "ElevenLabs"],
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/aarushi-codes/KindSite",
  },
  {
    id: 2,
    title: "AR Museum",
    objective:
      "AR Museum is an interactive augmented reality web app originally built for DeerHacks, where users can leave text and drawings in real-world locations, viewable in augmented reality.",
    tasks: ["OAuth Integration", "FireBase NoSQL Setup", "A-Frame & Ar.js Addition"],
    technologies: ["React", "Ar.js", "A-Frame", "Firebase"],
    icon: Monitor,
    color: "from-green-500 to-emerald-500",
    githubUrl: "https://github.com/aarushi-codes/AR-Museum",
  },
  {
    id: 3,
    title: "WebR Interactive Statistics Tutorials",
    objective:
      "Implement interactive Statistics course tutorials for UofT with auto-grading and hints to improve student learning while practicing R coding with real-time feedback.",
    tasks: ["WebR Integration", "Quarto Setup", "Real-Time GradeThis Implementation"],
    technologies: ["RStudio", "Quarto", "WebR", "JavaScript", "Docker", "CSS", "HTML"],
    icon: Database,
    color: "from-purple-500 to-pink-500",
    githubUrl: "https://github.com/nishanmudalige/STA258_Tutorials",
  },
  {
    id: 4,
    title: "mysh",
    objective: "A fully functional Linux shell in C, built from scratch, supporting built-in commands",
    tasks: ["Process Management", "Port Configuration", "File System Navigation", "Client-Server Networking"],
    technologies: ["C", "Linux", "Bash", "AddressSanitizer", "Cisco"],
    icon: Network,
    color: "from-indigo-500 to-purple-500",
    privateRepo: true, // ← show note instead of GitHub button
  },
  {
    id: 5,
    title: "Othello",
    objective: "A fun game of Othello you can play with friends or a competitive bot!",
    tasks: ["Object Oriented Programming", "Greedy Strategy Integration", "Multiplayer Component"],
    technologies: ["Java"],
    icon: FileText,
    color: "from-yellow-500 to-orange-500",
    privateRepo: true,
  },
  {
    id: 6,
    title: "Paint App",
    objective: "A Paint App with additional fun features recreated from scratch using Java",
    tasks: ["EventListener Integration", "Customizable Paint Tools"],
    technologies: ["Java"],
    icon: Building,
    color: "from-teal-500 to-green-500",
    privateRepo: true,
  },
  {
    id: 7,
    title: "Huffman Trees for Lossless Compression/Decompression",
    objective: "A Python implementation of Huffman coding that builds optimal prefix trees to compress arbitrary bytes and losslessly decompress them",
    tasks: ["Lossless Compression", "Decompression", "Input Serialization"],
    technologies: ["Python"],
    icon: Building,
    color: "from-teal-500 to-green-500",
    privateRepo: true,
  },
]

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase()
  if (techLower.includes("rstudio")) return "📊"
  if (techLower.includes("linux") || techLower.includes("debian") || techLower.includes("ubuntu")) return "🐧"
  if (techLower.includes("cisco")) return "🔧"
  if (techLower.includes("virtualbox")) return "📦"
  if (techLower.includes("html")) return "🟧"
  if (techLower.includes("webr")) return "👩🏽‍💻"
  if (techLower.includes("quarto")) return "🌐"
  if (techLower.includes("javascript")) return "JS"
  if (techLower.includes("docker")) return "🐳"
  if (techLower.includes("css")) return "🥏"
  if (techLower.includes("next.js")) return "N"
  if (techLower.includes("react")) return "⚛️"
  if (techLower.includes("tailwind")) return "〰"
  if (techLower.includes("flask")) return "⚗️"
  if (techLower.includes("supabase")) return "⚡️"
  if (techLower.includes("elevenlabs")) return "⏸️"
  if (techLower.includes("ar.js")) return "🧊"
  if (techLower.includes("firebase")) return "🔥"
  if (techLower.includes("a-frame")) return "💻"
  if (techLower.includes("address")) return "🫧"
  if (techLower.includes("c")) return "⌨️"
  if (techLower.includes("bash")) return "＄"
  if (techLower.includes("java")) return "♨️"
  if (techLower.includes("python")) return "♨️"


  return "⚙️"
}

export default function Projects() {
  const openGithub = (proj: any) => {
    if (!proj.githubUrl) return
    window.open(proj.githubUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-background p-4 scan-lines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-primary hover:opacity-80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to dashboard
          </Link>

          <h1 className="text-3xl font-bold text-primary mb-2">Technical Projects</h1>
          <p className="text-[hsl(var(--muted-foreground))]">Hands-on systems & networking work</p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card/50 border border-[hsl(var(--border))] hover:border-[hsl(var(--ring))] transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} flex-shrink-0`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-primary text-xl mb-2">
                      {project.id}. {project.title}
                    </CardTitle>
                    <div className="space-y-2">
                      <div>
                        <span className="text-primary font-semibold">Objective:</span>
                        <span className="text-[hsl(var(--muted-foreground))] ml-2">{project.objective}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tasks */}
                <div>
                  <h4 className="text-primary font-semibold mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tasks.map((task: string, index: number) => (
                      <Badge
                        key={index}
                        className="bg-card/60 text-[hsl(var(--muted-foreground))] border border-[hsl(var(--border))]"
                        variant="outline"
                      >
                        {task}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-primary font-semibold mb-2">Technologies used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-card/40 px-3 py-2 rounded-lg border border-[hsl(var(--border))]"
                      >
                        <span className="text-lg">{getTechIcon(tech)}</span>
                        <span className="text-[hsl(var(--muted-foreground))] text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA: GitHub or Private Note */}
                <div className="pt-2">
                  {project.privateRepo ? (
                    <div className="w-full rounded-lg border border-[hsl(var(--border))] bg-card/40 p-3 flex items-start gap-3">
                      <Lock className="w-4 h-4 mt-0.5 text-[hsl(var(--muted-foreground))]" />
                      <div className="text-sm text-[hsl(var(--muted-foreground))]">
                        Repository is private. Contact me to request access.
                        <div className="mt-2">
                          <a
                            href="mailto:aarushi.alreja@mail.utoronto.ca?subject=Repo%20Access%20Request%20-%20mysh"
                            className="inline-flex items-center gap-2 text-primary underline hover:opacity-80"
                          >
                            <Mail className="w-4 h-4" />
                            Email me for access
                          </a>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={() => openGithub(project)}
                      className="w-full bg-transparent border-2 border-[hsl(var(--ring))] text-primary hover:bg-primary hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 font-mono"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal Output */}
        <div className="mt-8 border border-[hsl(var(--border))] rounded-lg p-4 bg-card/20">
          <div className="text-primary text-sm font-mono">
            <div>aarushi@portfolio:~$ projects --count --status</div>
            <div className="text-[hsl(var(--muted-foreground))] mt-1">
              [✓] 6 technical projects listed
              <br />
              [✓] Domains: Next.js, React, WebR, Linux/C, networking
              <br />
              [✓] GitHub or contact info provided
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
