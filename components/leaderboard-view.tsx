"use client"

import { useEffect, useState } from "react"
import { Dice5, Package } from "lucide-react"
import { Podium, type PodiumEntry } from "./podium"
import { LeaderboardTable, type Row } from "./leaderboard-table"
import { LeaderboardSidebar } from "./leaderboard-sidebar"

type LeaderboardType = "casino" | "cases"

type CasesWager = {
  rank: number
  username: string
  avatar: string
  wager: number
}

type CasesReward = {
  place: number
  winnings: number
}

type CasesApiData = {
  error: boolean
  wagers?: CasesWager[]
  leaderboard?: {
    leaderboardRewards?: CasesReward[]
  }
}

function formatMoney(n: number) {
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function LeaderboardView() {
  const [active, setActive] = useState<LeaderboardType>("casino")
  const [casesData, setCasesData] = useState<CasesApiData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (active !== "cases" || casesData) return
    setLoading(true)
    setError(null)
    fetch("/api/cases-leaderboard")
      .then(async (r) => {
        const json = await r.json()
        console.log("Cases API Response:", JSON.stringify(json, null, 2))
        if (!r.ok || json.error) throw new Error(json.message || "Failed to load")
        setCasesData(json)
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [active, casesData])

  const tabs: { id: LeaderboardType; label: string; icon: typeof Dice5 }[] = [
    { id: "casino", label: "CASINO", icon: Dice5 },
    { id: "cases", label: "CASES", icon: Package },
  ]

  // Build podium + rows from cases data when active
  let podiumFirst: PodiumEntry | undefined
  let podiumSecond: PodiumEntry | undefined
  let podiumThird: PodiumEntry | undefined
  let tableRows: Row[] | undefined

  if (active === "cases" && casesData?.wagers) {
    console.log("Processing cases data:", casesData)
    const rewardsByPlace = new Map<number, number>()
    casesData.leaderboard?.leaderboardRewards?.forEach((r) => {
      rewardsByPlace.set(r.place, r.winnings)
    })
    console.log("Rewards map:", Object.fromEntries(rewardsByPlace))

    const toEntry = (w: CasesWager): PodiumEntry => ({
      name: w.username,
      avatar: w.avatar || "/Default PFP.jpg",
      wagered: formatMoney(w.wager),
      reward: formatMoney(rewardsByPlace.get(w.rank) ?? 0),
    })

    const sorted = [...casesData.wagers].sort((a, b) => a.rank - b.rank)
    podiumFirst = sorted.find((w) => w.rank === 1) ? toEntry(sorted.find((w) => w.rank === 1)!) : undefined
    podiumSecond = sorted.find((w) => w.rank === 2) ? toEntry(sorted.find((w) => w.rank === 2)!) : undefined
    podiumThird = sorted.find((w) => w.rank === 3) ? toEntry(sorted.find((w) => w.rank === 3)!) : undefined

    tableRows = sorted
      .filter((w) => w.rank > 3)
      .map((w) => ({
        rank: w.rank,
        name: w.username,
        avatar: w.avatar || "/Default PFP.jpg",
        wagered: formatMoney(w.wager),
        reward: formatMoney(rewardsByPlace.get(w.rank) ?? 0),
      }))
  }

  return (
    <>
      {/* Switcher */}
      <section className="mt-5 rounded-xl bg-[#112116] border border-[#1a2520] card-glow p-2">
        <div className="grid grid-cols-2 gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = active === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center justify-center gap-2 py-3 px-2 rounded-md text-[11px] md:text-[12px] font-bold tracking-[0.14em] md:tracking-[0.18em] transition-colors ${
                  isActive
                    ? "btn-3d-green text-black"
                    : "bg-[#0d1611] text-[#888888] hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}<span className="hidden sm:inline"> LEADERBOARD</span></span>
              </button>
            )
          })}
        </div>
      </section>

      {/* Loading / error for cases */}
      {active === "cases" && loading && (
        <div className="mt-5 rounded-xl bg-[#112116] border border-[#1a2520] card-glow p-6 text-center text-[#888888] text-sm">
          Loading cases leaderboard...
        </div>
      )}
      {active === "cases" && error && (
        <div className="mt-5 rounded-xl bg-[#112116] border border-red-500/30 p-6 text-center text-red-400 text-sm">
          {error}
        </div>
      )}
      {active === "cases" && !loading && !error && casesData && (!casesData.wagers || casesData.wagers.length === 0) && (
        <div className="mt-5 rounded-xl bg-[#112116] border border-[#1a2520] card-glow p-6 text-center text-[#888888] text-sm">
          No wagers data available
        </div>
      )}

      {/* Podium */}
      <Podium first={podiumFirst} second={podiumSecond} third={podiumThird} />

      {/* Table + Sidebar */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
        <LeaderboardTable rows={tableRows} />
        <LeaderboardSidebar />
      </div>
    </>
  )
}
