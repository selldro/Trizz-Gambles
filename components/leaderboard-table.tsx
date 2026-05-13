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

const defaultRows: Row[] = []

const tabs = ["WEEKLY", "MONTHLY"] as const

export function LeaderboardTable({ 
  rows, 
  period = "monthly", 
  onPeriodChange 
}: { 
  rows?: Row[]
  period?: "weekly" | "monthly"
  onPeriodChange?: (period: "weekly" | "monthly") => void
} = {}) {
  const active = period.toUpperCase() as (typeof tabs)[number]
  const [showFull, setShowFull] = useState(false)
  const data = rows ?? defaultRows
  const displayRows = showFull ? data : data.slice(0, 10)

  const handleTabClick = (tab: (typeof tabs)[number]) => {
    if (onPeriodChange) {
      onPeriodChange(tab.toLowerCase() as "weekly" | "monthly")
    }
  }

  return (
    <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-3 md:p-5">
      {/* Tabs + search */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          {tabs.map((t) => {
            const isActive = active === t
            return (
              <button
                key={t}
                onClick={() => handleTabClick(t)}
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
            className="w-full md:w-[260px] rounded-md bg-[#1a1033] border border-[#1a1033] pl-3 pr-9 py-2 text-sm text-white placeholder:text-[#888888] focus:outline-none focus:border-[#8b3dff]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#888888]" />
        </div>
      </div>

      {/* Header */}
      <div className="mt-4 md:mt-5 grid grid-cols-[40px_1fr_auto_auto] md:grid-cols-[80px_1fr_1fr_1fr] items-center gap-2 md:gap-0 px-2 md:px-3 py-2 md:py-3 rounded-md bg-[#1a1033] border border-[#1a1033] text-[10px] md:text-[11px] font-bold tracking-[0.18em] text-[#8b3dff]">
        <div>#</div>
        <div>PLAYER</div>
        <div className="text-right md:pr-12">WAGERED</div>
        <div className="text-right">REWARD</div>
      </div>

      {/* Rows */}
      <ul className="mt-2 divide-y divide-[#1a1033]">
        {displayRows.map((r) => (
          <li
            key={r.rank}
            className="grid grid-cols-[40px_1fr_auto_auto] md:grid-cols-[80px_1fr_1fr_1fr] items-center gap-2 md:gap-0 px-2 md:px-3 py-3 text-xs md:text-sm"
          >
            <div className="text-white font-semibold">{r.rank}</div>
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <span className="shrink-0 block w-7 h-7 md:w-8 md:h-8 rounded-md overflow-hidden bg-[#1a1033]">
                <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
              </span>
              <span className="text-white truncate">{r.name}</span>
            </div>
            <div className="text-right md:pr-12 text-white">{r.wagered}</div>
            <div className="text-right flex items-center justify-end gap-1 md:gap-2 text-[#8b3dff] font-semibold">
              <Gift className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>{r.reward}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center pb-2">
        {data.length > 10 && (
          <button
            onClick={() => setShowFull(!showFull)}
            className="px-8 py-3 rounded-md border border-[#8b3dff] text-[#8b3dff] text-[12px] font-bold tracking-[0.18em] hover:bg-[#8b3dff]/10 transition-colors"
          >
            VIEW FULL LEADERBOARD
          </button>
        )}
      </div>
    </section>
  )
}
