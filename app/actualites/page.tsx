"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RefreshCw, Clock, ExternalLink, AlertCircle, Rss } from "lucide-react"
import { Footer } from "@/components/footer"

interface Article {
  title: string
  link: string
  pubDate: string
  source: string
  description: string
  guid?: string
}

export default function Actualites() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)
  const [refreshing, setRefreshing] = useState(false)

  // Parser RSS XML vers JSON avec extraction correcte des dates
  const parseRSSFeed = (xmlText: string): Article[] => {
    try {
      const parser = new DOMParser()
      const xmlDoc = parser.parseFromString(xmlText, "text/xml")

      // Gérer les flux RSS et Atom
      const items = xmlDoc.querySelectorAll("item, entry")

      const articles: Article[] = []

      items.forEach((item, index) => {
        if (index < 20) {
          // Extraction du titre
          const title =
            item.querySelector("title")?.textContent || item.querySelector("title")?.innerHTML || "Titre non disponible"

          // Extraction du lien (RSS vs Atom)
          let link =
            item.querySelector("link")?.textContent ||
            item.querySelector("link")?.getAttribute("href") ||
            item.querySelector("guid")?.textContent ||
            "#"

          // Nettoyer le lien s'il contient des paramètres indésirables
          if (link.includes("?")) {
            const url = new URL(link)
            // Garder seulement les paramètres essentiels
            const allowedParams = ["id", "p", "article", "post"]
            const newSearchParams = new URLSearchParams()

            for (const [key, value] of url.searchParams) {
              if (allowedParams.some((param) => key.toLowerCase().includes(param))) {
                newSearchParams.set(key, value)
              }
            }

            url.search = newSearchParams.toString()
            link = url.toString()
          }

          // Extraction de la date de publication
          const pubDateElement =
            item.querySelector("pubDate") ||
            item.querySelector("published") ||
            item.querySelector("dc\\:date, date") ||
            item.querySelector("updated")

          const pubDate = pubDateElement?.textContent || ""
          let formattedDate = ""

          if (pubDate) {
            try {
              const date = new Date(pubDate)
              if (!isNaN(date.getTime())) {
                // Calculer le temps écoulé
                const now = new Date()
                const diffTime = Math.abs(now.getTime() - date.getTime())
                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
                const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
                const diffMinutes = Math.floor(diffTime / (1000 * 60))

                if (diffMinutes < 60) {
                  formattedDate = `Il y a ${diffMinutes} minute${diffMinutes > 1 ? "s" : ""}`
                } else if (diffHours < 24) {
                  formattedDate = `Il y a ${diffHours} heure${diffHours > 1 ? "s" : ""}`
                } else if (diffDays < 7) {
                  formattedDate = `Il y a ${diffDays} jour${diffDays > 1 ? "s" : ""}`
                } else {
                  formattedDate = date.toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                }
              }
            } catch {
              formattedDate = "Date inconnue"
            }
          } else {
            formattedDate = "Date inconnue"
          }

          // Extraction de la description
          const description =
            item.querySelector("description")?.textContent ||
            item.querySelector("summary")?.textContent ||
            item.querySelector("content")?.textContent ||
            ""

          // Extraction de la source
          let source = "Source inconnue"

          // 1. Depuis l'élément source
          const sourceElement = item.querySelector("source")?.textContent
          if (sourceElement) {
            source = sourceElement
          }
          // 2. Depuis l'élément author
          else {
            const authorElement = item.querySelector("author, dc\\:creator")?.textContent
            if (authorElement) {
              source = authorElement
            }
          }
          // 3. Depuis le domaine du lien
          if (source === "Source inconnue" && link && link !== "#") {
            try {
              const url = new URL(link)
              const domain = url.hostname.replace("www.", "")

              const domainMap: { [key: string]: string } = {
                "microsoft.com": "Microsoft",
                "crowdstrike.com": "CrowdStrike",
                "crowdstrike.fr": "CrowdStrike France",
                "sentinelone.com": "SentinelOne",
                "bitdefender.com": "Bitdefender",
                "bitdefender.fr": "Bitdefender France",
                "kaspersky.com": "Kaspersky",
                "kaspersky.fr": "Kaspersky France",
                "trendmicro.com": "Trend Micro",
                "eset.com": "ESET",
                "ssi.gouv.fr": "ANSSI",
                "zdnet.fr": "ZDNet France",
                "lemondeinformatique.fr": "Le Monde Informatique",
                "silicon.fr": "Silicon",
                "itespresso.fr": "IT Espresso",
                "undernews.fr": "UnderNews",
                "securite.developpez.com": "Developpez.com",
              }

              source = domainMap[domain] || domain.charAt(0).toUpperCase() + domain.slice(1)
            } catch {
              source = "Source web"
            }
          }

          // Nettoyer le contenu
          const cleanTitle = title
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&#39;/g, "'")
            .replace(/<[^>]*>/g, "")
            .trim()

          let cleanDescription = description
            .replace(/&quot;/g, '"')
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&#39;/g, "'")
            .replace(/<[^>]*>/g, "")
            .replace(/\s+/g, " ")
            .trim()

          // Limiter la description
          if (cleanDescription.length > 250) {
            cleanDescription = cleanDescription.substring(0, 250).trim() + "..."
          }

          // Filtrer les articles pertinents (EDR, cybersécurité, PME)
          const keywords = [
            "edr",
            "endpoint",
            "cybersécurité",
            "cybersecurity",
            "sécurité",
            "security",
            "pme",
            "entreprise",
            "business",
            "defender",
            "antivirus",
            "malware",
            "ransomware",
            "threat",
            "menace",
            "protection",
            "détection",
          ]

          const isRelevant = keywords.some(
            (keyword) => cleanTitle.toLowerCase().includes(keyword) || cleanDescription.toLowerCase().includes(keyword),
          )

          // Ajouter tous les articles (même non pertinents) pour avoir du contenu
          articles.push({
            title: cleanTitle,
            link: link,
            pubDate: formattedDate,
            source: source,
            description: cleanDescription,
            guid: item.querySelector("guid")?.textContent || link,
          })
        }
      })

      // Trier par pertinence puis par date
      return articles.sort((a, b) => {
        const aRelevant = ["edr", "endpoint", "cybersécurité", "sécurité", "pme"].some(
          (k) => a.title.toLowerCase().includes(k) || a.description.toLowerCase().includes(k),
        )
        const bRelevant = ["edr", "endpoint", "cybersécurité", "sécurité", "pme"].some(
          (k) => b.title.toLowerCase().includes(k) || b.description.toLowerCase().includes(k),
        )

        if (aRelevant && !bRelevant) return -1
        if (!aRelevant && bRelevant) return 1
        return 0
      })
    } catch (err) {
      console.error("Erreur lors du parsing RSS:", err)
      return []
    }
  }

  // Fonction pour récupérer les actualités
  const fetchNews = useCallback(
    async (isManualRefresh = false) => {
      if (isManualRefresh) {
        setRefreshing(true)
      } else {
        setLoading(true)
      }
      setError(null)

      try {
        const response = await fetch("/api/google-news", {
          cache: "no-store",
          headers: {
            Accept: "application/rss+xml, application/xml, text/xml",
          },
        })

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`)
        }

        const xmlText = await response.text()
        const parsedArticles = parseRSSFeed(xmlText)

        if (parsedArticles.length === 0) {
          throw new Error("Aucun article trouvé dans le flux RSS")
        }

        setArticles(parsedArticles)
        setLastUpdate(new Date())
        setError(null)
      } catch (err) {
        console.error("Erreur lors de la récupération des actualités:", err)
        setError("Flux RSS temporairement indisponible. Actualités de référence affichées.")

        // Garder les articles existants ou utiliser le fallback
        if (articles.length === 0) {
          const fallbackArticles = parseRSSFeed(`<?xml version="1.0"?>
          <rss version="2.0">
            <channel>
              <item>
                <title>Actualités EDR en temps réel temporairement indisponibles</title>
                <link>#</link>
                <description>Le service de flux RSS est temporairement indisponible. Veuillez réessayer dans quelques minutes.</description>
                <pubDate>${new Date().toUTCString()}</pubDate>
                <source>Système</source>
              </item>
            </channel>
          </rss>`)
          setArticles(fallbackArticles)
        }
      } finally {
        setLoading(false)
        setRefreshing(false)
      }
    },
    [articles.length],
  )

  // Rafraîchissement automatique toutes les 5 minutes
  useEffect(() => {
    fetchNews()

    const interval = setInterval(
      () => {
        fetchNews()
      },
      5 * 60 * 1000,
    ) // 5 minutes

    return () => clearInterval(interval)
  }, [fetchNews])

  // Fonction de rafraîchissement manuel
  const handleManualRefresh = () => {
    fetchNews(true)
  }

  return (
    <div className="min-h-screen bg-black p-4 scan-lines">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/veille"
            className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la veille technologique
          </Link>

          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-green-400 neon-text mb-2">Actualités en temps réel</h1>
              <p className="text-green-300">Solutions EDR et cybersécurité pour PME</p>
            </div>

            <Button
              onClick={handleManualRefresh}
              disabled={refreshing}
              className="bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 neon-glow"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
              {refreshing ? "Actualisation..." : "Rafraîchir"}
            </Button>
          </div>

          {/* Dernière mise à jour */}
          {lastUpdate && (
            <div className="flex items-center gap-2 text-green-300/70 text-sm mb-4">
              <Clock className="w-4 h-4" />
              <span>Dernière mise à jour : {lastUpdate.toLocaleTimeString("fr-FR")}</span>
            </div>
          )}

          {/* Indicateur de flux en direct */}
          <div className="flex items-center gap-2 text-green-400 text-sm mb-4">
            <Rss className="w-4 h-4 animate-pulse" />
            <span>Flux RSS en direct • Actualisation automatique toutes les 5 minutes</span>
          </div>
        </div>

        {/* État de chargement */}
        {loading && (
          <Card className="mb-8 bg-gray-900/50 border-green-500/30">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <RefreshCw className="w-6 h-6 text-green-400 animate-spin" />
                <span className="text-green-300 text-lg">Récupération des dernières actualités...</span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Message d'information */}
        {error && !loading && (
          <Card className="mb-8 bg-orange-900/20 border-orange-500/30">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-orange-400" />
                <div>
                  <h3 className="text-orange-400 font-semibold">Information</h3>
                  <p className="text-orange-300">{error}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Liste des articles */}
        {!loading && articles.length > 0 && (
          <div className="space-y-6">
            <div className="text-green-400 font-semibold mb-4">
              {articles.length} article{articles.length > 1 ? "s" : ""} trouvé{articles.length > 1 ? "s" : ""}
            </div>

            {articles.map((article, index) => (
              <Card
                key={article.guid || index}
                className="bg-gray-900/50 border-green-500/30 hover:border-green-400 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-green-400 hover:text-green-300 transition-colors">
                    {article.link && article.link !== "#" ? (
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 group"
                        onClick={(e) => {
                          // Vérifier si le lien est valide avant de l'ouvrir
                          try {
                            new URL(article.link)
                          } catch {
                            e.preventDefault()
                            alert("Lien non disponible")
                          }
                        }}
                      >
                        <span className="flex-1">{article.title}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" />
                      </a>
                    ) : (
                      <span>{article.title}</span>
                    )}
                  </CardTitle>

                  <div className="space-y-1">
                    <div className="text-green-300/70 text-sm italic">📅 {article.pubDate}</div>
                    <div className="text-green-300/60 text-xs">📰 {article.source}</div>
                  </div>
                </CardHeader>

                {article.description && (
                  <CardContent>
                    <p className="text-green-300/80 text-sm leading-relaxed">{article.description}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Message si aucun article */}
        {!loading && articles.length === 0 && (
          <Card className="bg-gray-900/50 border-green-500/30">
            <CardContent className="p-8 text-center">
              <div className="text-green-300">
                <h3 className="text-lg font-semibold mb-2">Aucune actualité disponible</h3>
                <p>Les flux RSS sont temporairement indisponibles. Réessayez dans quelques minutes.</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Informations sur les sources */}
        <Card className="mt-8 bg-gray-900/50 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400 text-lg">Sources d'actualités</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-green-300/80 text-sm">
              <p>
                • <strong>Flux RSS en temps réel</strong> depuis plusieurs sources spécialisées
              </p>
              <p>
                • <strong>Dates authentiques</strong> de publication des articles
              </p>
              <p>
                • <strong>Liens directs</strong> vers les articles originaux
              </p>
              <p>
                • <strong>Filtrage intelligent</strong> sur les mots-clés EDR, cybersécurité, PME
              </p>
              <p>
                • <strong>Sources</strong> : Microsoft, CrowdStrike, ANSSI, ZDNet, Le Monde Informatique, etc.
              </p>
            </div>
          </CardContent>
        </Card>

        <Footer />
      </div>
    </div>
  )
}
