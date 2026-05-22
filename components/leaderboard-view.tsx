"use client"

import { useEffect, useState } from "react"
import { Podium, type PodiumEntry } from "./podium"
import { LeaderboardTable, type Row } from "./leaderboard-table"
import { LeaderboardHero } from "./leaderboard-hero"

<<<<<<< HEAD
type AffiliateData = {
  username: string
  wager: number
  avatar?: string
}

type ApiResponse = {
  data?: AffiliateData[]
  error?: boolean
  message?: string
=======
type BetstrikeData = {
  error: boolean
  data?: {
    affiliate?: {
      totalWagered: string
    }
    summarizedBets?: Array<{
      user: {
        username: string
        avatar?: string
      }
      wager: string
      bets: number
    }>
    summary?: {
      totalUsers: number
      totalWager: string
    }
  }
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
}

function formatMoney(n: number) {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function LeaderboardView() {
<<<<<<< HEAD
  const [affiliatesData, setAffiliatesData] = useState<AffiliateData[]>([])
=======
  const [leaderboardData, setLeaderboardData] = useState<BetstrikeData | null>(null)
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [period, setPeriod] = useState<"weekly" | "monthly">("monthly")

  useEffect(() => {
<<<<<<< HEAD
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
=======
    setLoading(true)
    fetch(`/api/leaderboard?period=${period}`)
      .then(async (r) => {
        const json = await r.json()
        console.log("Leaderboard API Response:", JSON.stringify(json, null, 2))
        if (!r.ok || json.error) throw new Error(json.message || "Failed to load")
        setLeaderboardData(json)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [period])

  let podiumFirst: PodiumEntry | undefined
  let podiumSecond: PodiumEntry | undefined
  let podiumThird: PodiumEntry | undefined
  let tableRows: Row[] | undefined

  if (leaderboardData?.data?.summarizedBets) {
    const sorted = [...leaderboardData.data.summarizedBets].sort((a, b) => parseFloat(b.wager) - parseFloat(a.wager))

    const toEntry = (w: any, rank: number): PodiumEntry => ({
      name: w.user.username,
      avatar: w.user.avatar || "/Default PFP.jpg",
      wagered: formatMoney(parseFloat(w.wager)),
      reward: formatMoney(parseFloat(w.wager) * 0.05), // 5% reward calculation
    })

    podiumFirst = sorted[0] ? toEntry(sorted[0], 1) : undefined
    podiumSecond = sorted[1] ? toEntry(sorted[1], 2) : undefined
    podiumThird = sorted[2] ? toEntry(sorted[2], 3) : undefined

    tableRows = sorted.slice(3).map((w, i) => ({
      rank: i + 4,
      name: w.user.username,
      avatar: w.user.avatar || "/Default PFP.jpg",
      wagered: formatMoney(parseFloat(w.wager)),
      reward: formatMoney(parseFloat(w.wager) * 0.05),
    }))
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
  }

  return (
    <>
      {/* Hero */}
      <LeaderboardHero />

<<<<<<< HEAD
      {/* Podium */}
      <Podium first={podiumFirst} second={podiumSecond} third={podiumThird} />

      {/* Table */}
      <div className="mt-5">
        <LeaderboardTable rows={tableRows} />
      </div>
=======
      {/* Switcher */}
      <section className="mt-5 rounded-xl bg-[#120b26] border border-[#1a1033] p-2">
        <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-2 py-3 px-2 rounded-md text-[11px] md:text-[12px] font-bold tracking-[0.14em] md:tracking-[0.18em] transition-colors btn-3d-green text-black">
            <Dice5 className="w-4 h-4" />
            <span>CASINO<span className="hidden sm:inline"> LEADERBOARD</span></span>
          </button>
          <button disabled className="flex items-center justify-center gap-2 py-3 px-2 rounded-md text-[11px] md:text-[12px] font-bold tracking-[0.14em] md:tracking-[0.18em] transition-colors bg-[#06030f] text-[#444444] cursor-not-allowed">
            <Package className="w-4 h-4" />
            <span>COMING SOON</span>
          </button>
        </div>
      </section>

      {/* Loading / error */}
      {loading && (
        <div className="mt-5 rounded-xl bg-[#120b26] border border-[#1a1033] p-6 text-center text-[#888888] text-sm">
          Loading leaderboard...
        </div>
      )}
      {error && (
        <div className="mt-5 rounded-xl bg-[#120b26] border border-red-500/30 p-6 text-center text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Podium and Table */}
      {!loading && !error && (
        <>
          <Podium first={podiumFirst} second={podiumSecond} third={podiumThird} />

          {/* Table + Sidebar */}
          <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
            <LeaderboardTable rows={tableRows} period={period} onPeriodChange={setPeriod} />
            <LeaderboardSidebar />
          </div>
        </>
      )}
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
    </>
  )
}
