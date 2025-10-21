"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, User, GraduationCap, MapPin } from "lucide-react"
import { Footer } from "@/components/footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au dashboard
          </Link>

          <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Contact</h1>
        </div>

        {/* Thank you message */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-4 neon-text">Merci d'avoir consulté mon portfolio</h2>
            <p className="text-green-300 text-lg leading-relaxed">
              N'hésitez pas à me contacter pour toute question ou collaboration future. Je suis ouvert aux opportunités
              de stage, d'alternance ou d'emploi dans le domaine des infrastructures réseau et de la cybersécurité.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Personal Info */}
          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <User className="w-5 h-5" />
                Informations personnelles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-green-400 font-semibold">Formation</div>
                  <div className="text-green-300 text-sm">BTS SIO SISR - 1ère année</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400" />
                <div>
                  <div className="text-green-400 font-semibold">École</div>
                  <div className="text-green-300 text-sm">IPSSI</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Me contacter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 neon-glow"
                onClick={() => (window.location.href = "mailto:elias.lotfi7@gmail.com")}
              >
                <Mail className="w-4 h-4 mr-2" />
                elias.lotfi7@gmail.com
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Experience Summary */}
        <Card className="mb-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
          <CardHeader>
            <CardTitle className="text-green-400 text-xl">Expérience professionnelle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <h4 className="text-green-400 font-semibold">Stage - BraveStar</h4>
                <p className="text-green-300 text-sm">Entreprise d'import-export</p>
                <p className="text-green-300/80 text-sm mt-1">Administration et sécurisation du système informatique</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Summary */}
        <Card className="mb-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400">Domaines d'expertise</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="text-green-300">• Infrastructures réseau</div>
              <div className="text-green-300">• Cybersécurité</div>
              <div className="text-green-300">• Virtualisation</div>
              <div className="text-green-300">• Administration système</div>
              <div className="text-green-300">• Support technique</div>
              <div className="text-green-300">• Documentation technique</div>
            </div>
          </CardContent>
        </Card>

        {/* Terminal Output */}
        <div className="border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>lotfi@portfolio:~$ contact --info</div>
            <div className="text-green-300 mt-1">
              [✓] Email: elias.lotfi7@gmail.com
              <br />
              [✓] Formation: BTS SIO SISR 2025
              <br />
              [✓] Statut: Étudiant - Recherche stage/alternance
              <br />
              [✓] Spécialités: Réseaux, Cybersécurité, Administration
              <br />
              [i] Portfolio généré le {new Date().toLocaleDateString("fr-FR")}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
