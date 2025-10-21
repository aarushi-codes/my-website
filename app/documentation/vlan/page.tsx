"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Network, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function DocumentationVLAN() {
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
            <Network className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Mise en place de VLAN</h1>
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
                Séparer logiquement les réseaux pour sécuriser les services et optimiser les performances en créant des
                VLANs et en configurant le routage inter-VLAN.
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
                  <span className="text-green-300">Planification des VLANs selon les besoins</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Création des VLANs sur les switches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Configuration des ports en mode access et trunk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Configuration du routage inter-VLAN</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Tests de connectivité et isolation</span>
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
                  <span className="text-2xl">🔧</span>
                  <span className="text-green-300">Cisco Packet Tracer</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔗</span>
                  <span className="text-green-300">VLAN 802.1Q</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🌐</span>
                  <span className="text-green-300">Switches Layer 2</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔀</span>
                  <span className="text-green-300">Routage inter-VLAN</span>
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
                <li>• Configuration des VLANs sur équipements Cisco</li>
                <li>• Gestion des ports access et trunk</li>
                <li>• Mise en place du routage inter-VLAN</li>
                <li>• Sécurisation et segmentation réseau</li>
                <li>• Utilisation de Cisco Packet Tracer</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  )
}
