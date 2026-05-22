import { Gift } from "lucide-react"

export type Row = {
  rank: number
  name: string
  avatar: string
  wagered: string
  reward: string
}

const A = "/Default PFP.jpg"
const defaultRows: Row[] = [
  { rank: 4, name: "Miles Esther", avatar: A, wagered: "$4,320.00", reward: "$50.00" },
  { rank: 5, name: "Aiden Ghost", avatar: A, wagered: "$3,210.45", reward: "$0.00" },
  { rank: 6, name: "CodeRed", avatar: A, wagered: "$2,890.12", reward: "$0.00" },
  { rank: 7, name: "Zer0Luck", avatar: A, wagered: "$2,450.73", reward: "$0.00" },
  { rank: 8, name: "BetaKing", avatar: A, wagered: "$1,980.33", reward: "$0.00" },
]

export function LeaderboardTable({ rows }: { rows?: Row[] } = {}) {
  const data = rows ?? defaultRows

  return (
    <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-3 md:p-5">
      {/* Header */}
      <div className="grid grid-cols-[40px_1fr_auto_auto] md:grid-cols-[80px_1fr_1fr_1fr] items-center gap-2 md:gap-0 px-2 md:px-3 py-2 md:py-3 rounded-md bg-[#1a1f3a] border border-[#2a344a] text-[10px] md:text-[11px] font-bold tracking-[0.18em] text-[#0969b7]">
        <div>#</div>
        <div>PLAYER</div>
        <div className="text-right md:pr-12">WAGERED</div>
        <div className="text-right">REWARD</div>
      </div>

      {/* Rows */}
      <ul className="mt-2 divide-y divide-[#2a344a]">
        {data.map((r) => (
          <li
            key={r.rank}
            className="grid grid-cols-[40px_1fr_auto_auto] md:grid-cols-[80px_1fr_1fr_1fr] items-center gap-2 md:gap-0 px-2 md:px-3 py-3 text-xs md:text-sm"
          >
            <div className="text-white font-semibold">{r.rank}</div>
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <span className="shrink-0 block w-7 h-7 md:w-8 md:h-8 rounded-md overflow-hidden bg-[#1a1f3a]">
                <img src={r.avatar} alt={r.name} className="w-full h-full object-cover" />
              </span>
              <span className="text-white truncate">{r.name}</span>
            </div>
            <div className="text-right md:pr-12 text-white">{r.wagered}</div>
            <div className="text-right flex items-center justify-end gap-1 md:gap-2 text-[#0969b7] font-semibold">
              <Gift className="w-3.5 h-3.5 md:w-4 md:h-4" />
              <span>{r.reward}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center pb-2">
        <button className="px-8 py-3 rounded-md border border-[#0969b7] text-[#0969b7] text-[12px] font-bold tracking-[0.18em] hover:bg-[#0969b7]/10 transition-colors">
          VIEW FULL LEADERBOARD
        </button>
      </div>
    </section>
  )
}
