"use client"

import { useState } from "react"
import { Search, Gift } from "lucide-react"

export type Row = {
  rank: number
  name: string
  avatar: string
  wagered: string
  reward: string
}

const A = "/Default PFP.jpg"
const defaultRows: Row[] = [
  { rank: 4, name: "Miles Esther", avatar: A, wagered: "$4,320.00", reward: "$200.00" },
  { rank: 5, name: "Aiden Ghost", avatar: A, wagered: "$3,210.45", reward: "$150.00" },
  { rank: 6, name: "CodeRed", avatar: A, wagered: "$2,890.12", reward: "$100.00" },
  { rank: 7, name: "Zer0Luck", avatar: A, wagered: "$2,450.73", reward: "$75.00" },
  { rank: 8, name: "BetaKing", avatar: A, wagered: "$1,980.33", reward: "$50.00" },
  { rank: 9, name: "VisionX", avatar: A, wagered: "$1,560.21", reward: "$40.00" },
  { rank: 10, name: "ZyynVIP", avatar: A, wagered: "$1,230.66", reward: "$30.00" },
]

const tabs = ["DAILY", "WEEKLY", "MONTHLY"] as const

export function LeaderboardTable({ rows }: { rows?: Row[] } = {}) {
  const [active, setActive] = useState<(typeof tabs)[number]>("DAILY")
  const data = rows ?? defaultRows

  return (
    <section className="rounded-xl bg-[#112116] border border-[#1a2520] p-3 md:p-5">
      {/* Tabs + search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          {tabs.map((t) => {
            const isActive = active === t
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`px-5 py-2 rounded-md text-[12px] font-bold tracking-[0.18em] ${
                  isActive
                    ? "btn-3d-green"
                    : "border-b-4 border-transparent text-[#888888] hover:text-white transition-colors"
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
            className="w-full md:w-[260px] rounded-md bg-[#1a2520] border border-[#1a2520] pl-3 pr-9 py-2 text-sm text-white placeholder:text-[#888888] focus:outline-none focus:border-[#00ff87]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
        </div>
      </div>

      {/* Header */}
      <div className="mt-4 md:mt-5 grid grid-cols-[40px_1fr_auto_auto] md:grid-cols-[80px_1fr_1fr_1fr] items-center gap-2 md:gap-0 px-2 md:px-3 py-2 md:py-3 rounded-md bg-[#1a2520] border border-[#1a2520] text-[10px] md:text-[11px] font-bold tracking-[0.18em] text-[#00ff87]">
        <div>#</div>
        <div>PLAYER</div>
        <div className="text-right md:pr-12">WAGERED</div>
        <div className="text-right">REWARD</div>
      </div>

      {/* Rows */}
      <ul className="mt-2 divide-y divide-[#1a2520]">
        {data.map((r) => (
          <li
            key={r.rank}
            className="grid grid-cols-[40px_1fr_auto_auto] md:grid-cols-[80px_1fr_1fr_1fr] items-center gap-2 md:gap-0 px-2 md:px-3 py-3 text-xs md:text-sm"
          >
            <div className="text-white font-semibold">{r.rank}</div>
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <span className="shrink-0 block w-7 h-7 md:w-8 md:h-8 rounded-md overflow-hidden bg-[#1a2520]">
                <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
              </span>
              <span className="text-white truncate">{r.name}</span>
            </div>
            <div className="text-right md:pr-12 text-white">{r.wagered}</div>
            <div className="text-right flex items-center justify-end gap-1 md:gap-2 text-[#00ff87] font-semibold">
              <Gift className="w-3.5 h-3.5 md:w-4 md:h-4" />
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
