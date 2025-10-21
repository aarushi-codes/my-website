"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Monitor, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function DocumentationClientsWindowsLinux() {
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
            <Monitor className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Clients Windows et Linux</h1>
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
                Déployer des postes client Windows et Linux et les intégrer au domaine Active Directory pour une gestion
                centralisée des utilisateurs et des ressources.
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
                  <span className="text-green-300">Installation de Windows 11 sur machine virtuelle</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Installation de Debian et Ubuntu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Configuration des adresses IP statiques</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Tests de connectivité réseau</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Intégration au domaine Active Directory</span>
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
                  <span className="text-green-300">Windows 11</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🐧</span>
                  <span className="text-green-300">Debian</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🐧</span>
                  <span className="text-green-300">Ubuntu</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📦</span>
                  <span className="text-green-300">VirtualBox</span>
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
                <li>• Installation et configuration de systèmes d'exploitation</li>
                <li>• Configuration réseau sur Windows et Linux</li>
                <li>• Intégration de clients dans un domaine AD</li>
                <li>• Tests de connectivité et dépannage réseau</li>
                <li>• Gestion multi-plateforme (Windows/Linux)</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  )
}
