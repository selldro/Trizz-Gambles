import { Star } from "lucide-react"

const steps = [
  {
    n: "01",
    title: "WAGER",
    desc: "Place bets and wager on casino games.",
  },
  {
    n: "02",
    title: "EARN POINTS",
    desc: "Earn leaderboard points based on your wager amount.",
  },
  {
    n: "03",
    title: "CLIMB RANKS",
    desc: "Climb the leaderboard and earn a share of the monthly prize pool.",
  },
]

export function LeaderboardSidebar() {
  return (
    <aside className="rounded-xl bg-[#112116] border border-[#1a2520] p-5">
      {/* How it works */}
      <div className="flex items-center gap-2">
        <span className="grid place-items-center w-7 h-7 rounded-md bg-[#1a2520] border border-[#1a2520]">
          <Star className="w-4 h-4 text-[#00ff87]" fill="#00ff87" />
        </span>
        <h3 className="text-[12px] font-bold tracking-[0.18em] text-[#00ff87]">HOW IT WORKS</h3>
      </div>

      <ol className="mt-5 relative">
                {steps.map((s, index) => (
          <li key={s.n} className="relative pl-12 pb-6 last:pb-0">
            {/* Line to next step (only for steps 1 and 2) */}
            {index < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-[14px] top-7 w-px h-16 bg-[#252525]"
              />
            )}
            <span className="absolute left-0 top-0 grid place-items-center w-7 h-7 rounded-full bg-[#1a2520] border border-[#252525] text-[11px] font-bold text-[#00ff87]">
              {s.n}
            </span>
            <div className="text-[12px] font-bold tracking-[0.16em] text-[#00ff87]">
              {s.title}
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-[#cccccc]">{s.desc}</p>
          </li>
        ))}
      </ol>

    </aside>
  )
}
