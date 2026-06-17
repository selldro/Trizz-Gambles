"use client"

import { useEffect, useState } from "react"
import { Podium, type PodiumEntry } from "./podium"
import { LeaderboardTable, type Row } from "./leaderboard-table"
import { LeaderboardHero } from "./leaderboard-hero"

type AffiliateData = {
  username: string
  wager: number
  avatar?: string
}

type ApiResponse = {
  data?: AffiliateData[]
  error?: boolean
  message?: string
}

function formatMoney(n: number) {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

type Site = "rainbet" | "luxdrop" | "krush"

export function LeaderboardView() {
  const [affiliatesData, setAffiliatesData] = useState<AffiliateData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [site, setSite] = useState<Site>("rainbet")

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const endpoint = site === "luxdrop" ? '/api/luxdrop' : site === "krush" ? '/api/krush' : '/api/affiliates'
        const response = await fetch(endpoint)
        const json: ApiResponse = await response.json()

        if (json.error || !json.data) {
          throw new Error(json.message || 'Failed to fetch data')
        }

        setAffiliatesData(json.data)
      } catch (err) {
        console.error('Error fetching affiliates:', err)
        setError(err instanceof Error ? err.message : 'Failed to load leaderboard data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [site])

  // Build podium and table data from affiliates
  const sortedData = [...affiliatesData].sort((a, b) => b.wager - a.wager)

  // Prize structure per site
  const prizes = site === "krush"
    ? { first: 250, second: 150, third: 50, fourth: 50, fifth: 0 } // Krush: $500 total
    : { first: 500, second: 250, third: 150, fourth: 50, fifth: 50 } // Rainbet/Luxdrop: $1000 total

  const podiumFirst: PodiumEntry | undefined = sortedData[0] ? {
    name: sortedData[0].username,
    avatar: sortedData[0].avatar || "/Default PFP.jpg",
    wagered: formatMoney(sortedData[0].wager),
    reward: formatMoney(prizes.first),
  } : undefined

  const podiumSecond: PodiumEntry | undefined = sortedData[1] ? {
    name: sortedData[1].username,
    avatar: sortedData[1].avatar || "/Default PFP.jpg",
    wagered: formatMoney(sortedData[1].wager),
    reward: formatMoney(prizes.second),
  } : undefined

  const podiumThird: PodiumEntry | undefined = sortedData[2] ? {
    name: sortedData[2].username,
    avatar: sortedData[2].avatar || "/Default PFP.jpg",
    wagered: formatMoney(sortedData[2].wager),
    reward: formatMoney(prizes.third),
  } : undefined

  const tableRows: Row[] = sortedData.slice(3).map((item, index) => ({
    rank: index + 4,
    name: item.username,
    avatar: item.avatar || "/Default PFP.jpg",
    wagered: formatMoney(item.wager),
    reward: formatMoney(index === 0 ? prizes.fourth : index === 1 ? prizes.fifth : 0),
  }))

  if (loading) {
    return (
      <>
        <LeaderboardHero site={site} />
        <SiteSwitcher site={site} onChange={setSite} />
        <div className="mt-5 rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-6 text-center text-[#888888] text-sm">
          Loading leaderboard...
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <LeaderboardHero site={site} />
        <SiteSwitcher site={site} onChange={setSite} />
        <div className="mt-5 rounded-xl bg-[#1a1f3a] border border-red-500/30 p-6 text-center text-red-400 text-sm">
          {error}
        </div>
      </>
    )
  }

  if (affiliatesData.length === 0) {
    return (
      <>
        <LeaderboardHero site={site} />
        <SiteSwitcher site={site} onChange={setSite} />
        <div className="mt-5 rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-6 text-center text-[#888888] text-sm">
          No participants yet. Be the first to join the leaderboard!
        </div>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <LeaderboardHero site={site} />

      {/* Site switcher */}
      <SiteSwitcher site={site} onChange={setSite} />

      {/* Podium */}
      <Podium first={podiumFirst} second={podiumSecond} third={podiumThird} />

      {/* Table */}
      <div className="mt-5">
        <LeaderboardTable rows={tableRows} />
      </div>
    </>
  )
}

function SiteSwitcher({ site, onChange }: { site: Site; onChange: (s: Site) => void }) {
  const tabs: { key: Site; label: string }[] = [
    { key: "rainbet", label: "RAINBET" },
    { key: "luxdrop", label: "LUXDROP" },
    { key: "krush", label: "KRUSH" },
  ]
  return (
    <div className="mt-5 grid grid-cols-3 gap-1 rounded-md bg-[#1a1f3a] border border-[#2a344a] p-1">
      {tabs.map((t) => {
        const active = site === t.key
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`w-full px-4 py-2.5 rounded text-[11px] font-bold tracking-[0.18em] transition-colors ${
              active ? "btn-3d-blue text-white" : "text-[#888888] hover:text-white"
            }`}
          >
            {t.label}
          </button>
        )
      })}
    </div>
  )
}
