"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Server, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function DocumentationWindowsServer() {
  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href="/projets"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour aux projets
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <Server className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Installation Windows Server 2022</h1>
          </div>
          <p className="text-green-300">Documentation technique du projet</p>
        </div>

        <div className="space-y-6">
          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">Objectif du projet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-300">
                Mettre en œuvre un serveur Windows Server 2022 pour l'annuaire d'entreprise, incluant la configuration
                des services essentiels comme Active Directory et DNS.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">Étapes de réalisation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Installation de Windows Server 2022 sur VirtualBox</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Configuration de l'adresse IP statique</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Installation du rôle Active Directory Domain Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Configuration du service DNS</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Tests de fonctionnement et validation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">Technologies utilisées</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🪟</span>
                  <span className="text-green-300">Windows Server 2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  <span className="text-green-300">VirtualBox</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <span className="text-green-300">Active Directory</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  <span className="text-green-300">DNS</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-green-500/30">
            <CardHeader>
              <CardTitle className="text-green-400">Compétences développées</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-green-300">
                <li>• Administration de serveurs Windows</li>
                <li>• Configuration des services réseau</li>
                <li>• Gestion des annuaires d'entreprise</li>
                <li>• Virtualisation avec VirtualBox</li>
                <li>• Résolution de noms DNS</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  )
}
