"use client"

import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function TableauSynthese() {
  const handleDownload = () => {
    window.open(
      "https://drive.usercontent.google.com/u/0/uc?id=1nRDWU9tZYDTwrgV1AWHtZiO5s3mkupzY&export=download",
      "_blank",
    )
  }

  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au dashboard
          </Link>

          <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Tableau de Synthèse BTS SIO</h1>
          <p className="text-green-300 mb-4">Compétences mises en œuvre et réalisations professionnelles</p>
        </div>

        {/* Image du tableau de synthèse */}
        <div className="border border-green-500/30 rounded-lg bg-gray-900/50 p-4 mb-6">
          <div className="w-full">
            <Image
              src="/tableau-synthese-lotfi.jpg"
              alt="Tableau de synthèse BTS SIO - Lotfi Elias"
              width={1200}
              height={1600}
              className="w-full h-auto rounded-lg border border-green-500/20"
              priority
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleDownload}
            className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 neon-glow font-mono px-6 py-3"
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger le tableau de synthèse (PDF)
          </Button>
        </div>

        {/* Terminal Output */}
        <div className="border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>lotfi@portfolio:~$ document --tableau-synthese --status</div>
            <div className="text-green-300 mt-1">
              [✓] Document officiel BTS SIO chargé
              <br />
              [✓] Format: PDF interactif
              <br />
              [✓] Compétences documentées et validées
              <br />
              [i] Téléchargement disponible
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
