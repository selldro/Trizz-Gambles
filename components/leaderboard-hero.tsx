import { Info, Trophy } from "lucide-react"

const timer = [
  { value: "12", label: "DAYS" },
  { value: "07", label: "HRS" },
  { value: "32", label: "MINS" },
  { value: "18", label: "SECS" },
]

export function LeaderboardHero() {
  return (
    <section className="relative rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] overflow-hidden">
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 p-8 md:p-10">
        {/* Left */}
        <div>
          <h1 className="text-5xl md:text-[56px] font-black tracking-tight text-white leading-none italic font-[family-name:var(--font-heading)]">
            LEADERBOARD
          </h1>
          <p className="mt-5 text-sm font-bold tracking-wide">
            <span className="text-[#00ff87]">WAGER, CLIMB, WIN.</span>{" "}
            <span className="text-white/90">THE MORE YOU WAGER, THE HIGHER YOU RANK.</span>
          </p>
          <div className="mt-8 flex items-center gap-2 text-[13px] text-[#888888]">
            <Info className="w-4 h-4" />
            <span>The leaderboard updates every 24 hours.</span>
          </div>
        </div>

        {/* Right - prize pool & timer */}
        <div className="md:min-w-[340px] md:pl-10 md:border-l md:border-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-[#1a1a1a] border border-[#1a1a1a]">
              <Trophy className="w-6 h-6 text-[#00ff87]" fill="#00ff87" />
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">
                MONTHLY PRIZE POOL
              </div>
              <div className="text-2xl font-extrabold text-[#00ff87]">$10,000.00</div>
            </div>
          </div>

          <div className="mt-5 text-[11px] font-bold tracking-[0.18em] text-[#888888]">
            RACE ENDS IN
          </div>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {timer.map((t) => (
              <div
                key={t.label}
                className="rounded-md bg-[#1a1a1a] border border-[#1a1a1a] py-3 text-center"
              >
                <div className="text-2xl font-extrabold text-white leading-none">{t.value}</div>
                <div className="mt-1 text-[10px] font-bold tracking-[0.18em] text-[#888888]">
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
