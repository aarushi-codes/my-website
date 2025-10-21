"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Server, Monitor, Database, Network, FileText, Building } from "lucide-react"
import { Footer } from "@/components/footer"

const projets = [
  {
    id: 1,
    title: "Installation et configuration d'un Windows Server 2022",
    objectif: "Mettre en œuvre un serveur Windows Server pour l'annuaire d'entreprise.",
    taches: ["Installation", "Configuration IP", "Rôle Active Directory", "DNS"],
    technologies: ["Windows Server 2022", "VMware"],
    icon: Server,
    color: "from-blue-500 to-cyan-500",
    documentationUrl: "https://drive.google.com/drive/folders/1yoFsv1NmLy-v9_aes30wHJzWHTZBzXxK?usp=drive_link",
    isExternal: true,
  },
  {
    id: 2,
    title: "Installation et configuration des clients Windows et Linux",
    objectif: "Déployer des postes client Windows et Linux et les intégrer au domaine.",
    taches: ["Installation", "Configuration IP", "Test réseau", "Intégration AD"],
    technologies: ["Windows 11", "Debian", "Ubuntu", "VMware"],
    icon: Monitor,
    color: "from-green-500 to-emerald-500",
    documentationUrl:
      "https://testipformation.sharepoint.com/:f:/r/sites/MLVBTSSIO26.1-GROUPE1/Supports%20de%20cours/SISR/Windows%20Client?csf=1&web=1&e=jdK4CG",
    isExternal: true,
  },
  {
    id: 3,
    title: "Installation et configuration d'un outil d'inventaire et ticketing (GLPI)",
    objectif: "Installer GLPI avec FusionInventory sur Debian.",
    taches: ["Mise en place serveur LAMP", "LDAP", "Gestion du parc informatique"],
    technologies: ["GLPI", "Apache", "MariaDB", "FusionInventory"],
    icon: Database,
    color: "from-purple-500 to-pink-500",
    documentationUrl:
      "https://drive.usercontent.google.com/u/0/uc?id=1RIds-08EFAQ5p75DNhze4VL0eGo5KUAS&export=download",
    isExternal: true,
  },
  {
    id: 4,
    title: "Mise en place de VLAN",
    objectif: "Séparer logiquement les réseaux pour sécuriser les services.",
    taches: ["Création de VLANs", "Configuration des ports", "Routage inter-VLAN"],
    technologies: ["Cisco Packet Tracer"],
    icon: Network,
    color: "from-indigo-500 to-purple-500",
    documentationUrl:
      "https://drive.usercontent.google.com/u/0/uc?id=1kQIhIZ6sfZhGuey6Wm_gco-ulu1_k2s6&export=download",
    isExternal: true,
  },
  {
    id: 5,
    title: "Cas GSB : AP1 Proposition Commerciale GSB",
    objectif: "Répondre à une demande commerciale d'infrastructure réseau.",
    taches: ["Choix de matériel", "Topologie réseau", "Proposition chiffrée"],
    technologies: ["Analyse commerciale", "Infrastructure réseau"],
    icon: FileText,
    color: "from-yellow-500 to-orange-500",
    documentationUrls: [
      "https://drive.usercontent.google.com/u/0/uc?id=1KA66g2YNynuFSDIYGeWSf_R-YhAYEDjs&export=download",
      "https://drive.usercontent.google.com/u/0/uc?id=1q8BW3njOzmnpjhVCsCuD8tsuxG42OuTf&export=download",
    ],
    isExternal: true,
    hasMultipleDocs: true,
  },
  {
    id: 6,
    title: "Cas GSB : AP2 Plan d'infrastructure réseau",
    objectif: "Concevoir un plan IP et une architecture réseau complète.",
    taches: ["Plan d'adressage", "Schéma réseau (YED)", "Analyse des besoins"],
    technologies: ["YED", "Plan d'adressage IP", "Architecture réseau"],
    icon: Building,
    color: "from-teal-500 to-green-500",
    documentationUrls: [
      "https://drive.usercontent.google.com/u/0/uc?id=1doEXY-uRvhSr624wBXlaohyRzs2-yTvj&export=download",
      "https://drive.usercontent.google.com/u/0/uc?id=1zxUw-952IQyxPy9Mwc3dw2h5iVPY0rBV&export=download",
    ],
    isExternal: true,
    hasMultipleDocs: true,
  },
]

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase()
  if (techLower.includes("windows")) return "🪟"
  if (techLower.includes("linux") || techLower.includes("debian") || techLower.includes("ubuntu")) return "🐧"
  if (techLower.includes("cisco")) return "🔧"
  if (techLower.includes("virtualbox")) return "📦"
  if (techLower.includes("vmware")) return "☁️"
  if (techLower.includes("glpi")) return "🎫"
  if (techLower.includes("apache")) return "🌐"
  if (techLower.includes("mariadb")) return "🗄️"
  if (techLower.includes("active directory") || techLower.includes("ad")) return "👥"
  if (techLower.includes("vlan")) return "🔗"
  if (techLower.includes("yed")) return "📊"
  return "⚙️"
}

export default function Projets() {
  const handleDocumentationClick = (projet: any) => {
    if (projet.hasMultipleDocs) {
      window.open(projet.documentationUrls[0], "_blank")
    } else if (projet.isExternal) {
      if (projet.documentationUrl && projet.documentationUrl !== "LIEN_A_FOURNIR") {
        window.open(projet.documentationUrl, "_blank")
      } else {
        alert("Documentation en cours de préparation")
      }
    } else {
      window.location.href = projet.documentationUrl
    }
  }

  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au dashboard
          </Link>

          <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Projets Techniques</h1>
          <p className="text-green-300">Réalisations dans le cadre de la formation BTS SIO SISR</p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projets.map((projet) => (
            <Card
              key={projet.id}
              className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${projet.color} flex-shrink-0`}>
                    <projet.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-green-400 text-xl mb-2">
                      {projet.id}. {projet.title}
                    </CardTitle>
                    <div className="space-y-2">
                      <div>
                        <span className="text-green-300 font-semibold">Objectif:</span>
                        <span className="text-green-300/80 ml-2">{projet.objectif}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tâches */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Tâches réalisées:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projet.taches.map((tache, index) => (
                      <Badge
                        key={index}
                        className="bg-green-500/20 text-green-300 border border-green-500/30"
                        variant="outline"
                      >
                        {tache}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-green-400 font-semibold mb-2">Technologies utilisées:</h4>
                  <div className="flex flex-wrap gap-3">
                    {projet.technologies.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-lg border border-green-500/20"
                      >
                        <span className="text-lg">{getTechIcon(tech)}</span>
                        <span className="text-green-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documentation Button */}
                <div className="pt-2">
                  {projet.hasMultipleDocs ? (
                    <div className="space-y-2">
                      {projet.documentationUrls.map((url: string, index: number) => (
                        <Button
                          key={index}
                          onClick={() => window.open(url, "_blank")}
                          className="w-full bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 neon-glow font-mono"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger la documentation {index + 1}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <Button
                      onClick={() => handleDocumentationClick(projet)}
                      className="w-full bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 neon-glow font-mono"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger la documentation
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal Output */}
        <div className="mt-8 border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
          <div className="text-green-400 text-sm font-mono">
            <div>lotfi@portfolio:~$ projects --count --status</div>
            <div className="text-green-300 mt-1">
              [✓] 6 projets techniques documentés
              <br />
              [✓] Formation BTS SIO SISR 1ère année
              <br />
              [✓] Technologies: Windows Server, Linux, GLPI, Cisco, VLAN
              <br />
              [✓] Documentation disponible pour téléchargement
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
