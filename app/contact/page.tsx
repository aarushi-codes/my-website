"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Linkedin, Github } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-primary hover:opacity-80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Dashboard
          </Link>

          <h1 className="text-3xl font-bold text-primary  mb-2">Contact</h1>
        </div>

        {/* Thank you message */}
        <Card className="mb-8 bg-card/50 border border-[hsl(var(--border))]">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4 ">
              Thanks for checking out my portfolio!
            </h2>
            <p className="text-[hsl(var(--muted-foreground))] text-lg leading-relaxed">
              Feel free to reach out to me. I would love to connect!
            </p>
          </CardContent>
        </Card>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <Card className="bg-card/50 border border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-transparent border-2 border-[hsl(var(--ring))] text-primary hover:bg-primary hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 "
                onClick={() => (window.location.href = "mailto:aarushi.alreja@mail.utoronto.ca")}
              >
                <Mail className="w-4 h-4 mr-2" />
                aarushi.alreja@mail.utoronto.ca
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn */}
          <Card className="bg-card/50 border border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full bg-transparent border-2 border-[hsl(var(--ring))] text-primary hover:bg-primary hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 "
              >
                <a
                  href="https://www.linkedin.com/in/aarushi-alreja/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Aarushi Alreja's LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  linkedin.com/in/aarushi-alreja
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card className="bg-card/50 border border-[hsl(var(--border))]">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full bg-transparent border-2 border-[hsl(var(--ring))] text-primary hover:bg-primary hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 "
              >
                <a
                  href="https://github.com/aarushi-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Aarushi Alreja's GitHub profile"
                >
                  <Github className="w-4 h-4 mr-2" />
                  github.com/aarushi-codes
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>


        {/* Terminal Output */}
        <div className="border border-[hsl(var(--border))] rounded-lg p-4 bg-card/20">
          <div className="text-primary text-sm font-mono">
            <div>aarushi@portfolio:~$ contact --info</div>
            <div className="text-[hsl(var(--muted-foreground))] mt-1">
              [✓] Email: aarushi.alreja@mail.utoronto.ca
              <br />
              [✓] Statut: Student - University of Toronto
              <br />
              [i] Portfolio last seen {new Date().toLocaleDateString("fr-FR")}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
