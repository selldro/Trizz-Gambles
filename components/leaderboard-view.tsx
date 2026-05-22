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

export function LeaderboardView() {
  const [affiliatesData, setAffiliatesData] = useState<AffiliateData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('/api/affiliates')
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
  }, [])

  // Build podium and table data from affiliates
  const sortedData = [...affiliatesData].sort((a, b) => b.wager - a.wager)
  
  const podiumFirst: PodiumEntry | undefined = sortedData[0] ? {
    name: sortedData[0].username,
    avatar: sortedData[0].avatar || "/Default PFP.jpg",
    wagered: formatMoney(sortedData[0].wager),
    reward: formatMoney(200),
  } : undefined

  const podiumSecond: PodiumEntry | undefined = sortedData[1] ? {
    name: sortedData[1].username,
    avatar: sortedData[1].avatar || "/Default PFP.jpg",
    wagered: formatMoney(sortedData[1].wager),
    reward: formatMoney(100),
  } : undefined

  const podiumThird: PodiumEntry | undefined = sortedData[2] ? {
    name: sortedData[2].username,
    avatar: sortedData[2].avatar || "/Default PFP.jpg",
    wagered: formatMoney(sortedData[2].wager),
    reward: formatMoney(50),
  } : undefined

  const tableRows: Row[] = sortedData.slice(3).map((item, index) => ({
    rank: index + 4,
    name: item.username,
    avatar: item.avatar || "/Default PFP.jpg",
    wagered: formatMoney(item.wager),
    reward: formatMoney(index === 0 ? 50 : 0),
  }))

  if (loading) {
    return (
      <>
        <LeaderboardHero />
        <div className="mt-5 rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-6 text-center text-[#888888] text-sm">
          Loading leaderboard...
        </div>
      </>
    )
  }

  if (error) {
    return (
      <>
        <LeaderboardHero />
        <div className="mt-5 rounded-xl bg-[#1a1f3a] border border-red-500/30 p-6 text-center text-red-400 text-sm">
          {error}
        </div>
      </>
    )
  }

  if (affiliatesData.length === 0) {
    return (
      <>
        <LeaderboardHero />
        <div className="mt-5 rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-6 text-center text-[#888888] text-sm">
          No participants yet. Be the first to join the leaderboard!
        </div>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <LeaderboardHero />

      {/* Podium */}
      <Podium first={podiumFirst} second={podiumSecond} third={podiumThird} />

      {/* Table */}
      <div className="mt-5">
        <LeaderboardTable rows={tableRows} />
      </div>
    </>
  )
}
