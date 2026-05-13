"use client"

import { useEffect, useState } from "react"
import { Dice5, Package } from "lucide-react"
import { Podium, type PodiumEntry } from "./podium"
import { LeaderboardTable, type Row } from "./leaderboard-table"
import { LeaderboardSidebar } from "./leaderboard-sidebar"
import { LeaderboardHero } from "./leaderboard-hero"

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
}

function formatMoney(n: number) {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function LeaderboardView() {
  const [leaderboardData, setLeaderboardData] = useState<BetstrikeData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [period, setPeriod] = useState<"weekly" | "monthly">("monthly")

  useEffect(() => {
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
  }

  return (
    <>
      {/* Hero */}
      <LeaderboardHero />

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
    </>
  )
}
