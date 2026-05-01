"use client"

import { useState } from "react"
import { Search, Gift } from "lucide-react"

type Row = {
  rank: number
  name: string
  avatar: string
  wagered: string
  reward: string
}

const A = "/Default PFP.jpg"
const rows: Row[] = [
  { rank: 4, name: "Miles Esther", avatar: A, wagered: "$4,320.00", reward: "$200.00" },
  { rank: 5, name: "Aiden Ghost", avatar: A, wagered: "$3,210.45", reward: "$150.00" },
  { rank: 6, name: "CodeRed", avatar: A, wagered: "$2,890.12", reward: "$100.00" },
  { rank: 7, name: "Zer0Luck", avatar: A, wagered: "$2,450.73", reward: "$75.00" },
  { rank: 8, name: "BetaKing", avatar: A, wagered: "$1,980.33", reward: "$50.00" },
  { rank: 9, name: "VisionX", avatar: A, wagered: "$1,560.21", reward: "$40.00" },
  { rank: 10, name: "ZyynVIP", avatar: A, wagered: "$1,230.66", reward: "$30.00" },
]

const tabs = ["DAILY", "WEEKLY", "MONTHLY"] as const

export function LeaderboardTable() {
  const [active, setActive] = useState<(typeof tabs)[number]>("DAILY")

  return (
    <section className="rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] p-5">
      {/* Tabs + search */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          {tabs.map((t) => {
            const isActive = active === t
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-5 py-2 rounded-md text-[12px] font-bold tracking-[0.18em] transition-colors border ${
                  isActive
                    ? "bg-gradient-to-b from-[#00ff87] to-[#00cc6a] border border-[#00ff87] text-black"
                    : "border-transparent text-[#888888] hover:text-white"
                }`}
              >
                {t}
              </button>
            )
          })}
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search player..."
            className="w-[260px] rounded-md bg-[#1a1a1a] border border-[#1a1a1a] pl-3 pr-9 py-2 text-sm text-white placeholder:text-[#888888] focus:outline-none focus:border-[#00ff87]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
        </div>
      </div>

      {/* Header */}
      <div className="mt-5 grid grid-cols-[80px_1fr_1fr_1fr] items-center px-3 py-3 rounded-md bg-[#1a1a1a] border border-[#1a1a1a] text-[11px] font-bold tracking-[0.18em] text-[#00ff87]">
        <div>RANK</div>
        <div>PLAYER</div>
        <div className="text-right pr-12">WAGERED</div>
        <div className="text-right">REWARD</div>
      </div>

      {/* Rows */}
      <ul className="mt-2 divide-y divide-[#1a1a1a]">
        {rows.map((r) => (
          <li
            key={r.rank}
            className="grid grid-cols-[80px_1fr_1fr_1fr] items-center px-3 py-3 text-sm"
          >
            <div className="text-white font-semibold">{r.rank}</div>
            <div className="flex items-center gap-3">
              <span className="block w-8 h-8 rounded-md overflow-hidden bg-[#1a1a1a]">
                <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
              </span>
              <span className="text-white">{r.name}</span>
            </div>
            <div className="text-right pr-12 text-white">{r.wagered}</div>
            <div className="text-right flex items-center justify-end gap-2 text-[#00ff87] font-semibold">
              <Gift className="w-4 h-4" />
              <span>{r.reward}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center pb-2">
        <button className="px-8 py-3 rounded-md border border-[#00ff87] text-[#00ff87] text-[12px] font-bold tracking-[0.18em] hover:bg-[#00ff87]/10 transition-colors">
          VIEW FULL LEADERBOARD
        </button>
      </div>
    </section>
  )
}
