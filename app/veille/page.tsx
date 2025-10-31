// "use client"

// import Link from "next/link"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import {
//   ArrowLeft,
//   Shield,
//   Eye,
//   TrendingUp,
//   AlertTriangle,
//   ExternalLink,
//   Calendar,
//   Search,
//   Target,
//   Globe,
//   Rss,
// } from "lucide-react"
// import { Footer } from "@/components/footer"
// import { useState } from "react"

// const fonctionnalites = [
//   {
//     title: "Collecte en continu",
//     description: "Surveillance permanente des endpoints",
//     icon: "📊",
//   },
//   {
//     title: "Détection comportementale",
//     description: "Intelligence artificielle et machine learning",
//     icon: "🧠",
//   },
//   {
//     title: "Réponse automatique",
//     description: "Isolation, rollback, alertes instantanées",
//     icon: "⚡",
//   },
//   {
//     title: "Investigation forensic",
//     description: "Analyse post-incident détaillée",
//     icon: "🔍",
//   },
//   {
//     title: "Console centralisée",
//     description: "Tableau de bord unifié",
//     icon: "🖥️",
//   },
// ]

// const avantages = [
//   {
//     title: "Protection avancée sans SOC interne",
//     icon: "🛡️",
//   },
//   {
//     title: "Détection des menaces zero-day",
//     icon: "🎯",
//   },
//   {
//     title: "Conformité RGPD & NIS2",
//     icon: "📋",
//   },
//   {
//     title: "Réduction du temps de réponse",
//     icon: "⏱️",
//   },
//   {
//     title: "Intégration offres managées",
//     icon: "🔗",
//   },
// ]

// const timeline = [
//   {
//     date: "Avril 2025",
//     title: "Le marché EDR atteindra 22 milliards USD d'ici 2031 selon les prévisions",
//     source: "globenewswire.com",
//     color: "bg-red-500",
//     url: "https://globenewswire.com",
//   },
//   {
//     date: "Mai 2025",
//     title: "Microsoft Defender for Endpoint obtient la certification Anti-Tampering 2025",
//     source: "techcommunity.microsoft.com",
//     color: "bg-blue-500",
//     url: "https://techcommunity.microsoft.com",
//   },
//   {
//     date: "Juin 2025",
//     title: "SentinelOne devient partenaire de lancement AWS Security Hub",
//     source: "sentinelone.com",
//     color: "bg-green-500",
//     url: "https://sentinelone.com",
//   },
//   {
//     date: "Juin 2025",
//     title: "Microsoft déplace l'EDR hors du noyau Windows pour plus de stabilité",
//     source: "theverge.com",
//     color: "bg-orange-500",
//     url: "https://theverge.com",
//   },
// ]

// const timelineExtra = [
//   {
//     date: "Juin 2025",
//     title: "Kaseya 365 propose une solution EDR unifiée avec IA intégrée",
//     source: "itpro.com",
//     color: "bg-purple-500",
//     url: "https://itpro.com",
//   },
//   {
//     date: "Juin 2025",
//     title: 'Les "EDR Killers" gagnent en complexité selon Cybersec Asia',
//     source: "cybersecasia.net",
//     color: "bg-pink-500",
//     url: "https://cybersecasia.net",
//   },
//   {
//     date: "Juin 2025",
//     title: "Bitdefender enrichit sa plateforme GravityZone XDR avec SOC cloud",
//     source: "bitdefender.com",
//     color: "bg-indigo-500",
//     url: "https://bitdefender.com",
//   },
//   {
//     date: "Mai 2025",
//     title: "Stormshield lance un EDR simplifié pour les PME avec console live",
//     source: "solutions-numeriques.com",
//     color: "bg-teal-500",
//     url: "https://solutions-numeriques.com",
//   },
//   {
//     date: "Mai 2025",
//     title: "Top 10 des solutions EDR pour PME en 2025 publié par Uzcert",
//     source: "uzcert.uz",
//     color: "bg-cyan-500",
//     url: "https://uzcert.uz",
//   },
//   {
//     date: "Mai 2025",
//     title: "CrowdStrike nommé Leader du Gartner MQ 2025 pour la sécurité endpoint",
//     source: "crowdstrike.com",
//     color: "bg-yellow-500",
//     url: "https://crowdstrike.com",
//   },
// ]

// const outilsVeille = [
//   {
//     nom: "Google Alerts",
//     description: "Alertes email sur mots-clés",
//     type: "Gratuit",
//     url: "https://google.com/alerts",
//     icon: "🔔",
//   },
//   {
//     nom: "Feedly",
//     description: "Agrégateur RSS pour ZDNet, The Hacker News, CERT-FR",
//     type: "Freemium",
//     url: "https://feedly.com",
//     icon: "📰",
//   },
//   {
//     nom: "Inoreader",
//     description: "Alternative avancée à Feedly",
//     type: "Freemium",
//     url: "https://inoreader.com",
//     icon: "📖",
//   },
//   {
//     nom: "IFTTT / Zapier",
//     description: "Automatise l'envoi d'alertes vers Slack ou mail",
//     type: "Automation",
//     url: "https://ifttt.com",
//     icon: "🤖",
//   },
//   {
//     nom: "Talkwalker Alerts",
//     description: "Alertes multilingues gratuites",
//     type: "Gratuit",
//     url: "https://alerts.talkwalker.com",
//     icon: "🌍",
//   },
// ]

// const solutions = [
//   {
//     nom: "CrowdStrike Falcon",
//     type: "Premium",
//     pointsForts: "Cloud-native, IA avancée",
//     badge: "Leader",
//     color: "bg-purple-500",
//   },
//   {
//     nom: "SentinelOne",
//     type: "PME",
//     pointsForts: "Réponse autonome, rollback",
//     badge: "Recommandé",
//     color: "bg-green-500",
//   },
//   {
//     nom: "Microsoft Defender for Endpoint",
//     type: "Économique",
//     pointsForts: "Intégré Microsoft 365",
//     badge: "Économique",
//     color: "bg-blue-500",
//   },
//   {
//     nom: "Bitdefender GravityZone",
//     type: "Visionnaire",
//     pointsForts: "Modules XDR/SOC cloud",
//     badge: "Visionnaire",
//     color: "bg-indigo-500",
//   },
//   {
//     nom: "Tehtris Cyberia Protect",
//     type: "🇫🇷 Souverain",
//     pointsForts: "Console simplifiée pour PME",
//     badge: "Souverain",
//     color: "bg-red-500",
//   },
// ]

// const sources = [
//   "https://www.epsight.fr",
//   "https://www.solutions-numeriques.com",
//   "https://www.bitdefender.com",
//   "https://www.esevel.com",
//   "https://thehackernews.com",
//   "https://www.crowdstrike.com",
// ]

// export default function Veille() {
//   const [expandedTool, setExpandedTool] = useState<number | null>(null)
//   const [showMoreNews, setShowMoreNews] = useState(false)

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

//           <div className="flex items-center gap-3 mb-4">
//             <Shield className="w-8 h-8 text-green-400" />
//             <h1 className="text-3xl font-bold text-green-400 neon-text">Veille Technologique</h1>
//           </div>
//           <h2 className="text-xl text-green-300 mb-4">
//             L'essor des solutions EDR (Endpoint Detection and Response) pour les PME
//           </h2>

//           {/* Lien vers actualités en temps réel */}
//           <div className="mb-6">
//             <Link href="/actualites">
//               <Button className="bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-all duration-300 neon-glow">
//                 <Rss className="w-4 h-4 mr-2" />
//                 Actualités en temps réel
//               </Button>
//             </Link>
//           </div>
//         </div>

//         {/* Introduction */}
//         <Card className="mb-8 bg-gray-900/50 border-green-500/30">
//           <CardHeader>
//             <CardTitle className="text-green-400 flex items-center gap-2">
//               <AlertTriangle className="w-5 h-5" />
//               Introduction
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-green-300 leading-relaxed mb-4">
//               Face à la montée des cyberattaques (ransomwares, phishing, menaces persistantes), les PME adoptent des
//               solutions EDR, véritables antivirus nouvelle génération. Ces outils surveillent les postes (serveurs, PC,
//               mobiles) en continu, détectent les comportements anormaux et déclenchent automatiquement des mesures de
//               sécurité.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
//                 <div className="text-red-400 font-semibold">📈 +38% d'attaques mondiales</div>
//                 <div className="text-red-300 text-sm">Source: epsight.fr (2023)</div>
//               </div>
//               <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-3">
//                 <div className="text-orange-400 font-semibold">🏢 12% des PME françaises utilisent un EDR</div>
//                 <div className="text-orange-300 text-sm">Source: solutions-numeriques.com</div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Fonctionnement des EDR */}
//         <Card className="mb-8 bg-gray-900/50 border-green-500/30">
//           <CardHeader>
//             <CardTitle className="text-green-400 flex items-center gap-2">
//               <Eye className="w-5 h-5" />
//               Fonctionnement des EDR
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {fonctionnalites.map((func, index) => (
//                 <div
//                   key={index}
//                   className="bg-gray-800/50 border border-green-500/20 rounded-lg p-4 hover:border-green-400 transition-colors"
//                 >
//                   <div className="text-2xl mb-2">{func.icon}</div>
//                   <h4 className="text-green-400 font-semibold mb-1">{func.title}</h4>
//                   <p className="text-green-300/80 text-sm">{func.description}</p>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Avantages pour les PME */}
//         <Card className="mb-8 bg-gray-900/50 border-green-500/30">
//           <CardHeader>
//             <CardTitle className="text-green-400 flex items-center gap-2">
//               <TrendingUp className="w-5 h-5" />
//               Avantages pour les PME
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               {avantages.map((avantage, index) => (
//                 <div key={index} className="flex items-center gap-3 text-green-300">
//                   <span className="text-xl">{avantage.icon}</span>
//                   <span>{avantage.title}</span>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Timeline des nouveautés */}
//         <Card className="mb-8 bg-gray-900/50 border-green-500/30">
//           <CardHeader>
//             <CardTitle className="text-green-400 flex items-center gap-2">
//               <Calendar className="w-5 h-5" />
//               Nouveautés récentes
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               {timeline.map((event, index) => (
//                 <div key={index} className="flex items-start gap-4">
//                   <div className={`w-3 h-3 rounded-full ${event.color} mt-2 flex-shrink-0`}></div>
//                   <div className="flex-1">
//                     <div className="text-green-400 font-semibold">{event.date}</div>
//                     <div
//                       className="text-green-300 hover:text-green-200 cursor-pointer"
//                       onClick={() => window.open(event.url, "_blank")}
//                     >
//                       {event.title}
//                     </div>
//                     <div className="text-green-300/60 text-sm">Source: {event.source}</div>
//                   </div>
//                 </div>
//               ))}

//               {showMoreNews && (
//                 <div className="space-y-4 mt-6 pt-4 border-t border-green-500/20">
//                   {timelineExtra.map((event, index) => (
//                     <div key={`extra-${index}`} className="flex items-start gap-4">
//                       <div className={`w-3 h-3 rounded-full ${event.color} mt-2 flex-shrink-0`}></div>
//                       <div className="flex-1">
//                         <div className="text-green-400 font-semibold">{event.date}</div>
//                         <div
//                           className="text-green-300 hover:text-green-200 cursor-pointer"
//                           onClick={() => window.open(event.url, "_blank")}
//                         >
//                           {event.title}
//                         </div>
//                         <div className="text-green-300/60 text-sm">Source: {event.source}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               <div className="mt-6 text-center">
//                 <Button
//                   onClick={() => setShowMoreNews(!showMoreNews)}
//                   className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300"
//                 >
//                   {showMoreNews ? "Afficher moins" : "Afficher plus"}
//                 </Button>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Outils de veille */}
//         <Card className="mb-8 bg-gray-900/50 border-green-500/30">
//           <CardHeader>
//             <CardTitle className="text-green-400 flex items-center gap-2">
//               <Search className="w-5 h-5" />
//               Outils de veille en temps réel
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3">
//               {outilsVeille.map((outil, index) => (
//                 <div
//                   key={index}
//                   className="border border-green-500/30 rounded-lg p-4 hover:border-green-400 transition-colors cursor-pointer"
//                   onClick={() => setExpandedTool(expandedTool === index ? null : index)}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <span className="text-xl">{outil.icon}</span>
//                       <div>
//                         <h4 className="text-green-400 font-semibold">{outil.nom}</h4>
//                         <Badge className="bg-blue-500/20 text-blue-400 text-xs">{outil.type}</Badge>
//                       </div>
//                     </div>
//                     <ExternalLink className="w-4 h-4 text-green-400" />
//                   </div>
//                   {expandedTool === index && (
//                     <div className="mt-3 pt-3 border-t border-green-500/20">
//                       <p className="text-green-300/80 text-sm mb-2">{outil.description}</p>
//                       <Button
//                         onClick={(e) => {
//                           e.stopPropagation()
//                           window.open(outil.url, "_blank")
//                         }}
//                         className="bg-transparent border border-green-400 text-green-400 hover:bg-green-400 hover:text-black text-xs px-3 py-1"
//                       >
//                         Accéder à l'outil
//                       </Button>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Solutions du marché */}
//         <Card className="mb-8 bg-gray-900/50 border-green-500/30">
//           <CardHeader>
//             <CardTitle className="text-green-400 flex items-center gap-2">
//               <Target className="w-5 h-5" />
//               Marché & solutions adaptées aux PME
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {solutions.map((solution, index) => (
//                 <div
//                   key={index}
//                   className="border border-green-500/30 rounded-lg p-4 hover:border-green-400 transition-colors"
//                 >
//                   <div className="flex items-center justify-between mb-2">
//                     <h4 className="text-green-400 font-semibold">{solution.nom}</h4>
//                     <Badge className={`${solution.color} text-white text-xs`}>{solution.badge}</Badge>
//                   </div>
//                   <div className="text-green-300/80 text-sm mb-1">{solution.type}</div>
//                   <div className="text-green-300 text-sm">{solution.pointsForts}</div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         {/* Conclusion personnelle */}
//         <Card className="mb-8 bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-500/50">
//           <CardHeader>
//             <CardTitle className="text-green-400">Conclusion personnelle</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
//               <div className="text-green-400">lotfi@portfolio:~$ analyse --edr</div>
//               <div className="text-green-300 mt-2">
//                 [✓] Sujet analysé : EDR pour les PME
//                 <br />
//                 [✓] Risques identifiés
//                 <br />
//                 [✓] Outils de suivi configurés
//                 <br />
//                 [i] Ma recommandation : Pour une PME comme BraveStar, Microsoft Defender for Endpoint est le meilleur
//                 choix en 2025 pour sa simplicité, son coût, et son intégration native à Windows.
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Sources et références */}
//         <Card className="mb-8 bg-gray-900/50 border-green-500/30">
//           <CardHeader>
//             <CardTitle className="text-green-400 flex items-center gap-2">
//               <Globe className="w-5 h-5" />
//               Sources et références
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//               {sources.map((source, index) => (
//                 <Button
//                   key={index}
//                   onClick={() => window.open(source, "_blank")}
//                   className="bg-transparent border border-green-500/30 text-green-400 hover:border-green-400 hover:bg-green-400/10 text-sm justify-start"
//                 >
//                   <ExternalLink className="w-3 h-3 mr-2" />
//                   {source}
//                 </Button>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         <Footer />
//       </div>
//     </div>
//   )
// }
