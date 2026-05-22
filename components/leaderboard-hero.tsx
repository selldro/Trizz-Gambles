"use client"

import { useState, useEffect } from "react"
import { Info, Trophy } from "lucide-react"

const staticTimer = [
  { value: "00", label: "DAYS" },
  { value: "00", label: "HRS" },
  { value: "00", label: "MINS" },
  { value: "00", label: "SECS" },
]

export function LeaderboardHero() {
  const [timeLeft, setTimeLeft] = useState(staticTimer)

  useEffect(() => {
    // Fixed date range: May 1, 2026 to June 1, 2026
    const endTime = new Date('2026-06-01T00:00:00').getTime()

    const calculateTimeLeft = () => {
      const now = Date.now()
      const diff = endTime - now

      if (diff <= 0) {
        return staticTimer
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      return [
        { value: String(days).padStart(2, '0'), label: "DAYS" },
        { value: String(hours).padStart(2, '0'), label: "HRS" },
        { value: String(minutes).padStart(2, '0'), label: "MINS" },
        { value: String(seconds).padStart(2, '0'), label: "SECS" },
      ]
    }

    setTimeLeft(calculateTimeLeft())
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <section className="relative rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow overflow-hidden">
            <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 md:gap-8 p-5 md:p-10">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-[56px] font-black tracking-tight text-white leading-none italic font-[family-name:var(--font-heading)]">
            LEADERBOARD
          </h1>
          <p className="mt-5 text-sm font-bold tracking-wide">
            <span className="text-[#0969b7]">WAGER, CLIMB, WIN.</span>{" "}
            <span className="text-white/90">THE MORE YOU WAGER, THE HIGHER YOU RANK.</span>
          </p>
          <div className="mt-8 flex items-center gap-2 text-[13px] text-[#888888]">
            <Info className="w-4 h-4" />
            <span>The leaderboard updates every 24 hours.</span>
          </div>
        </div>

        {/* Right - prize pool & timer */}
        <div className="min-w-0 lg:min-w-[340px] lg:pl-10 lg:border-l lg:border-[#2a344a] pt-6 lg:pt-0 border-t lg:border-t-0 border-[#2a344a]">
          <div className="flex items-center gap-3">
            <div className="shrink-0 grid place-items-center w-11 h-11 rounded-md bg-[#1a1f3a] border border-[#2a344a]">
              <Trophy className="w-6 h-6 text-[#0969b7]" fill="#0969b7" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">
                MONTHLY PRIZE POOL
              </div>
              <div className="text-xl md:text-2xl font-extrabold text-[#0969b7]">$400.00</div>
            </div>
          </div>

          <div className="mt-5 text-[11px] font-bold tracking-[0.18em] text-[#888888]">
            RACE ENDS IN
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {timeLeft.map((t) => (
              <div
                key={t.label}
                className="min-w-0 rounded-md bg-[#1a1f3a] border border-[#2a344a] py-2.5 md:py-3 px-1 text-center"
              >
                <div className="text-lg md:text-2xl font-extrabold text-white leading-none">{t.value}</div>
                <div className="mt-1 text-[9px] md:text-[10px] font-bold tracking-[0.14em] md:tracking-[0.18em] text-[#888888]">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
