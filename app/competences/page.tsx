// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowLeft, Award, CheckCircle, BookOpen } from "lucide-react"
// import { Footer } from "@/components/footer"

// const competences = [
//   {
//     name: "Cisco",
//     description: "Initiation à la configuration de routeurs et switches Cisco (Packet Tracer)",
//     details: "Premiers pas avec les VLAN, RIP, et l'adressage IP",
//     logo: "🔧",
//     niveau: "En cours d'apprentissage",
//     color: "bg-blue-500/20",
//     borderColor: "border-blue-500/30",
//     textColor: "text-blue-400",
//   },
//   {
//     name: "Linux (Debian/Ubuntu)",
//     description: "Découverte des commandes de base, installation de paquets, configuration réseau",
//     details: "Utilisation de la console, création d'utilisateurs, scripts simples",
//     logo: "🐧",
//     niveau: "Débutant / pratique encadrée",
//     color: "bg-orange-500/20",
//     borderColor: "border-orange-500/30",
//     textColor: "text-orange-400",
//   },
//   {
//     name: "Microsoft Windows Server",
//     description: "Installation de Windows Server 2022, configuration de rôles AD DS/DHCP",
//     details: "Gestion de l'Active Directory et des stratégies de sécurité locales",
//     logo: "🪟",
//     niveau: "Technicien débutant",
//     color: "bg-green-500/20",
//     borderColor: "border-green-500/30",
//     textColor: "text-green-400",
//   },
//   {
//     name: "PowerShell",
//     description: "Scripts simples d'administration Windows (création utilisateurs, logs)",
//     details: "Compréhension des commandes de base, automatisation de tâches simples",
//     logo: "💻",
//     niveau: "En cours d'apprentissage",
//     color: "bg-indigo-500/20",
//     borderColor: "border-indigo-500/30",
//     textColor: "text-indigo-400",
//   },
//   {
//     name: "VirtualBox",
//     description: "Création de machines virtuelles pour les TP réseau et systèmes",
//     details: "Configuration réseau en mode NAT, pont, test d'ISO Windows/Linux",
//     logo: "📦",
//     niveau: "Pratique scolaire",
//     color: "bg-purple-500/20",
//     borderColor: "border-purple-500/30",
//     textColor: "text-purple-400",
//   },
//   {
//     name: "VMware Workstation / ESXi",
//     description: "Découverte des solutions de virtualisation professionnelle",
//     details: "Mise en œuvre de scénarios simples en environnement simulé",
//     logo: "☁️",
//     niveau: "Initiation",
//     color: "bg-gray-500/20",
//     borderColor: "border-gray-500/30",
//     textColor: "text-gray-400",
//   },
// ]

// export default function Competences() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null)

//   return (
//     <div className="min-h-screen bg-black p-4 scan-lines">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <Link
//             href="/dashboard"
//             className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
//           >
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Retour au dashboard
//           </Link>

//           <div className="flex items-center gap-3 mb-2">
//             <BookOpen className="w-8 h-8 text-green-400" />
//             <h1 className="text-3xl font-bold text-green-400 neon-text">Compétences Techniques</h1>
//           </div>
//           <p className="text-green-300">Compétences en cours d'acquisition - BTS SIO SISR 1ère année</p>
//         </div>

//         {/* Compétences Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {competences.map((comp, index) => (
//             <Card
//               key={index}
//               className={`bg-gray-900/50 ${comp.borderColor} hover:border-green-400 transition-all duration-300 group`}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <CardHeader className="pb-3">
//                 <div className="flex items-start gap-3">
//                   <div className="text-4xl">{comp.logo}</div>
//                   <div className="flex-1">
//                     <CardTitle className="text-green-400 group-hover:text-green-300 transition-colors text-lg">
//                       {comp.name}
//                     </CardTitle>
//                     <Badge
//                       className={`${comp.color} ${comp.textColor} border ${comp.borderColor} mt-2`}
//                       variant="outline"
//                     >
//                       {comp.niveau}
//                     </Badge>
//                   </div>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-green-300/80 mb-3 leading-relaxed">{comp.description}</CardDescription>
//                 <div
//                   className={`text-sm ${comp.textColor} bg-gray-800/30 rounded-lg p-3 border-l-2 ${comp.borderColor}`}
//                 >
//                   ➤ {comp.details}
//                 </div>
//                 {hoveredCard === index && (
//                   <div className="mt-3 text-green-400 text-sm animate-fade-in flex items-center gap-1">
//                     <CheckCircle className="w-4 h-4" />
//                     Compétence en développement
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Certification Section */}
//         <div className="border border-green-500/30 rounded-lg p-6 bg-gray-900/20 mb-8">
//           <div className="flex items-center gap-3 mb-6">
//             <Award className="w-6 h-6 text-yellow-400" />
//             <h2 className="text-2xl font-bold text-green-400 neon-text">Certification</h2>
//           </div>

//           <Card className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-yellow-500/50">
//             <CardHeader>
//               <div className="flex items-start justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="text-3xl">📜</div>
//                   <div>
//                     <CardTitle className="text-yellow-400 text-xl">Cisco Introduction to Cybersecurity</CardTitle>
//                     <CardDescription className="text-yellow-300/80 mt-2">
//                       Organisme: Cisco Networking Academy
//                     </CardDescription>
//                   </div>
//                 </div>
//                 <Badge className="bg-yellow-500 text-black font-bold">Janvier 2025</Badge>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 <p className="text-green-300 leading-relaxed">
//                   Cette certification aborde les fondamentaux de la cybersécurité, les types de menaces, la sécurité des
//                   réseaux et les bonnes pratiques pour les utilisateurs et les entreprises.
//                 </p>
//                 <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
//                   <p className="text-green-400 text-sm">
//                     ✓ Elle valide les connaissances théoriques acquises en début de parcours BTS SIO.
//                   </p>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Progression Section */}
//         <Card className="mb-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
//           <CardHeader>
//             <CardTitle className="text-green-400 text-xl">Progression et objectifs</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4 text-green-300">
//               <p>
//                 <strong className="text-green-400">Contexte de formation :</strong> Ces compétences sont développées
//                 dans le cadre des travaux pratiques et projets du BTS SIO option SISR. L'accent est mis sur la
//                 découverte progressive des technologies et l'acquisition de bases solides.
//               </p>
//               <p>
//                 <strong className="text-green-400">Objectifs 2ème année :</strong> Approfondissement des connaissances
//                 réseau, préparation aux certifications professionnelles (CCNA, Microsoft), et mise en situation réelle
//                 lors des stages en entreprise.
//               </p>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Terminal Output */}
//         <div className="border border-green-500/30 rounded-lg p-4 bg-gray-900/20">
//           <div className="text-green-400 text-sm font-mono">
//             <div>lotfi@portfolio:~$ skills --status --level</div>
//             <div className="text-green-300 mt-1">
//               [✓] 6 compétences techniques en cours d'acquisition
//               <br />
//               [✓] 1 certification obtenue
//               <br />
//               [✓] Niveau: Étudiant BTS SIO SISR - 1ère année
//               <br />
//               [i] Progression: Formation théorique et pratique encadrée
//             </div>
//           </div>
//         </div>

//         <Footer />
//       </div>
//     </div>
//   )
// }
