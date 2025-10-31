"use client"

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TableauSynthese() {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/website_resume.pdf"
    link.download = "Aarushi_Alreja_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className="min-h-screen bg-background p-4 scan-lines">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-primary hover:opacity-80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Dashboard
          </Link>

          <h1 className="text-3xl font-bold text-primary mb-2">
            Aarushi&apos;s Relevant Experiences
          </h1>
          <p className="text-[hsl(var(--muted-foreground))] mb-4"></p>
        </div>

         {/* Download Button */}
         <div className="text-center mb-8">
          <Button
            onClick={handleDownload}
            className="bg-transparent border-2 border-[hsl(var(--ring))] text-primary hover:bg-primary hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 neon-glow font-mono px-6 py-3"
          >
            <Download className="w-4 h-4 mr-2" />
            Download my resume! (PDF)
          </Button>
        </div>

        {/* TEXT RESUME */}
        <article
          className="border border-[hsl(var(--border))] rounded-lg bg-card/50 p-6 mb-6 text-foreground"
          aria-label="Resume content"
        >
          {/* Top line / contact */}
          <header className="mb-6">
            <h2 className="text-2xl font-semibold text-primary">Aarushi Alreja</h2>
            <div className="text-sm text-[hsl(var(--muted-foreground))] mt-1 space-x-2">
              <span>Toronto, ON</span>
              <span>•</span>
              <a className="underline hover:text-primary" href="mailto:aarushi.alreja@mail.utoronto.ca">
                aarushi.alreja@mail.utoronto.ca
              </a>
              <span>•</span>
              <a className="underline hover:text-primary" href="https://linkedin.com/in/aarushi-alreja" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <span>•</span>
              <a className="underline hover:text-primary" href="https://github.com/aarushi-codes" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>•</span>
              <a className="underline hover:text-primary" href="https://aarushialreja.com" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </header>

          {/* Education */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <p className="font-medium">HBSc, Computer Science & Statistics — University of Toronto</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Sep 2023 — Present</p>
            </div>
            <ul className="list-disc list-inside text-sm mt-2 space-y-1 text-[hsl(var(--muted-foreground))]">
              <li>cGPA ~3.60/4.0</li>
              <li>
                Relevant Coursework: Software Engineering, Systems Programming, Algorithm Design & Analysis, Information
                Security, Software Design, Regression Analysis, Object-Oriented Programming
              </li>
            </ul>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h3 className="text-xl font-semibold text-primary mb-2">Experience</h3>

            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">Teaching Assistant — University of Toronto</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Aug 2025 — Present</p>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-[hsl(var(--muted-foreground))]">
                <li>Lead weekly tutorials for over 35 students and regular office hours for Introduction to the Theory of Computation.</li>
                <li>Collaborate with faculty to improve course delivery, sharing insights on common student challenges and potential curriculum refinements.</li>
                <li>Grade 200+ assignments and exams with attention to detail and accuracy, ensuring consistent results.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">Research Assistant — University of Toronto</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Aug 2025 — Present</p>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-[hsl(var(--muted-foreground))]">
                <li>Research socially responsible computing pedagogy in introductory CS, analyzing 70+ academic sources to identify effective curriculum practices.</li>
                <li>Conduct qualitative coding of 300+ student responses to evaluate how ethics can be integrated into CS education.</li>
                <li>Collaborate with faculty on research design and contribute to drafts for conference publications.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-medium">IBM SkillsBuild Data Science Intern</p>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">Jun 2024 — Aug 2024</p>
              </div>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1 text-[hsl(var(--muted-foreground))]">
                <li>Built a supervised ML model in Python (scikit-learn, pandas, NumPy) to analyze energy consumption data and tie findings to sustainability goals.</li>
                <li>Performed EDA and visualized patterns with Matplotlib, Seaborn, Tableau, and IBM Watson Studio.</li>
              </ul>
            </div>
          </section>
        </article>


        {/* Terminal Output */}
        <div className="border border-[hsl(var(--border))] rounded-lg p-4 bg-card/20">
          <div className="text-primary text-sm font-mono">
            <div>aarushi@portfolio:~$ document --aarushi-resume --status</div>
            <div className="text-[hsl(var(--muted-foreground))] mt-1">
              [✓] Aarushi&apos;s Resume
              <br />
              [✓] Format: PDF
              <br />
              [i] Download available
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
