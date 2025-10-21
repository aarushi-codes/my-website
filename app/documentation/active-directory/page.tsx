"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Users, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export default function DocumentationActiveDirectory() {
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
            <Users className="w-8 h-8 text-green-400" />
            <h1 className="text-3xl font-bold text-green-400 neon-text">Gestion Active Directory</h1>
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
                Créer et gérer des utilisateurs, groupes et unités d'organisation dans Active Directory pour structurer
                l'annuaire d'entreprise et appliquer des stratégies de groupe.
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
                  <span className="text-green-300">Création de la structure des Unités d'Organisation (OU)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Création des comptes utilisateurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Configuration des groupes de sécurité</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Mise en place de GPO de base</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">Tests d'authentification et de permissions</span>
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
                  <span className="text-2xl">👥</span>
                  <span className="text-green-300">Active Directory</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔒</span>
                  <span className="text-green-300">Group Policy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚙️</span>
                  <span className="text-green-300">ADUC</span>
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
                <li>• Administration d'Active Directory</li>
                <li>• Gestion des utilisateurs et groupes</li>
                <li>• Structuration des unités d'organisation</li>
                <li>• Configuration des stratégies de groupe (GPO)</li>
                <li>• Sécurisation des accès et permissions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  )
}
