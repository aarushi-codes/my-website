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

  // Animation DVD bouncing
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x
        let newY = prev.y + velocity.y
        let newVelX = velocity.x
        let newVelY = velocity.y

        // Rebond horizontal
        if (newX <= 0 || newX >= window.innerWidth - 30) {
          newVelX = -velocity.x
          newX = newX <= 0 ? 0 : window.innerWidth - 30
        }

        // Rebond vertical
        if (newY <= 0 || newY >= window.innerHeight - 30) {
          newVelY = -velocity.y
          newY = newY <= 0 ? 0 : window.innerHeight - 30
        }

        setVelocity({ x: newVelX, y: newVelY })
        return { x: newX, y: newY }
      })
    }, 16) // ~60fps

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
    if (currentLine < terminalLines.length - 1) {
      setCurrentLine((prev) => prev + 1)
    } else {
      setShowButton(true)
    }
  }, [currentLine, terminalLines.length])

  const handleImageClick = () => {
    setShowVideo(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.volume = 1.0 // son à fond
        videoRef.current.muted = false
        videoRef.current.play()

        // Forcer le plein écran
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen()
        }
      }
    }, 100)
  }

  const closeVideo = () => {
    setShowVideo(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    // Sortir du plein écran si nécessaire
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 scan-lines">
      <div className="w-full max-w-4xl">
        {/* Terminal Header */}
        <div className="bg-gray-900 border border-green-500/30 rounded-t-lg p-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-mono">aarushi's-terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="bg-black border-x border-b border-green-500/30 rounded-b-lg p-6 min-h-[400px] font-mono">
          {/* Terminal Lines with Typewriter Effect */}
          {terminalLines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className="mb-2">
              {index === currentLine ? (
                <>
                  <Typewriter text={line} delay={15} className="text-green-400" onComplete={handleLineComplete} />
                  <span className="terminal-cursor text-green-400">_</span>
                </>
              ) : (
                <span className="text-green-400">{line}</span>
              )}
            </div>
          ))}

          {showButton && (
            <div className="mt-8">
              <Button
                onClick={() => router.push("/dashboard")}
                className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 hover:scale-105 hover:neon-glow font-mono text-lg px-8 py-3"
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
            <div className="border border-green-500/30 rounded-lg p-6 bg-gray-900/20">
              <h2 className="text-green-400 font-bold">&gt; whoami</h2>
              <p className="text-green-300 leading-relaxed">
                Hi, I am <span className="text-green-400 font-bold">Aarushi Alreja</span>, a Computer Science and Statistics student at the{" "}
                <span className="text-green-400">University of Toronto. </span>
                I am super passionate about 
              </p>
            </div>
          </div>
        )}

        {/* Image qui rebondit comme DVD */}
        <img
          src="/meme.png"
          alt=""
          className="fixed w-[30px] h-[30px] cursor-pointer z-50 transition-none"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            imageRendering: "pixelated",
          }}
          onClick={handleImageClick}
        />

        {/* Modal vidéo */}
        {showVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
            onClick={closeVideo}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              className="max-w-full max-h-full"
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              <source src="media.mp4" type="video/mp4" />
              Video is not supported on your device.
            </video>

              <button
                onClick={closeVideo}
                className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
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
