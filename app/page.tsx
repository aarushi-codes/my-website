"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ChevronRight, Terminal } from "lucide-react"
import { Typewriter } from "@/components/typewriter"

export default function HomePage() {
  const [currentLine, setCurrentLine] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 50 })
  const [velocity, setVelocity] = useState({ x: 2, y: 1.5 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => {
        let newX = prev.x + velocity.x
        let newY = prev.y + velocity.y
        let newVelX = velocity.x
        let newVelY = velocity.y

        if (newX <= 0 || newX >= window.innerWidth - 30) {
          newVelX = -velocity.x
          newX = newX <= 0 ? 0 : window.innerWidth - 30
        }
        if (newY <= 0 || newY >= window.innerHeight - 30) {
          newVelY = -velocity.y
          newY = newY <= 0 ? 0 : window.innerHeight - 30
        }
        setVelocity({ x: newVelX, y: newVelY })
        return { x: newX, y: newY }
      })
    }, 16)
    return () => clearInterval(interval)
  }, [velocity])

  const terminalLines = [
    "root@aarushi's-terminal:~# ./start_portfolio.sh",
    "[✓] Authentication successful",
    "[✓] Running scripts",
    "[✓] Loading Aarushi's portfolio...",
    "System ready. Access granted.",
  ]

  const handleLineComplete = useCallback(() => {
    if (currentLine < terminalLines.length - 1) setCurrentLine(p => p + 1)
    else setShowButton(true)
  }, [currentLine, terminalLines.length])

  const handleImageClick = () => {
    setShowVideo(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.volume = 1.0
        videoRef.current.muted = false
        videoRef.current.play()
        if (videoRef.current.requestFullscreen) videoRef.current.requestFullscreen()
      }
    }, 100)
  }

  const closeVideo = () => {
    setShowVideo(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    if (document.fullscreenElement) document.exitFullscreen()
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 scan-lines">
      <div className="w-full max-w-4xl">
        {/* Terminal Header */}
        <div className="bg-card border border-[hsl(var(--border))] rounded-t-lg p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-[hsl(var(--card))]" />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono">aarushi&apos;s-terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-background border-x border-b border-[hsl(var(--border))] rounded-b-lg p-6 min-h-[400px] font-mono">
          {terminalLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="mb-2">
              {index === currentLine ? (
                <>
                  <Typewriter text={line} delay={15} className="text-primary" onComplete={handleLineComplete} />
                  <span className="terminal-cursor text-primary">_</span>
                </>
              ) : (
                <span className="text-primary">{line}</span>
              )}
            </div>
          ))}

          {showButton && (
            <div className="mt-8">
              <Button
                onClick={() => router.push("/dashboard")}
                className="bg-transparent border-2 border-[hsl(var(--border))] text-primary hover:bg-primary hover:text-[hsl(var(--primary-foreground))] transition-all duration-300 hover:scale-105 hover:neon-glow font-mono text-lg px-8 py-3"
              >
                Access the Dashboard
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          )}
        </div>

        {/* Personal Introduction */}
        {showButton && (
          <div className="mt-12 animate-fade-in delay-500">
            <div className="border border-[hsl(var(--border))] rounded-lg p-6 bg-card/20">
              <h2 className="text-primary font-bold">&gt; whoami</h2>
              <p className="text-primary leading-relaxed">
                Hi, I am <span className="text-primary font-bold">Aarushi Alreja</span>, a Computer Science and
                Statistics student at the <span className="text-primary">University of Toronto.</span> I am super
                passionate about new-age tech and studying its implications on human lives. Feel free to reach out 
                to me if you have similar interests or are interested in my profile. Proceed to the dashboard to learn
                more about me.
              </p>
            </div>
          </div>
        )}

        {/* DVD bounce image */}
        <img
          src="/cat.png"
          alt=""
          className="fixed w-[30px] h-[30px] cursor-pointer z-50 transition-none"
          style={{ left: `${position.x}px`, top: `${position.y}px`, imageRendering: "pixelated" }}
          onClick={handleImageClick}
        />

        {/* Video modal */}
        {showVideo && (
          <div className="fixed inset-0 bg-background/90 flex items-center justify-center z-[9999]" onClick={closeVideo}>
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                className="max-w-full max-h-full"
                controls
                autoPlay
                onClick={(e) => e.stopPropagation()}
              >
                <source src="rickroll.mp4" type="video/mp4" />
                Video is not supported on your device.
              </video>

              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 text-foreground text-2xl bg-card/70 rounded-full w-10 h-10 flex items-center justify-center hover:bg-card"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
