import { Crown, Gift } from "lucide-react"

export type PodiumEntry = {
  name: string
  avatar: string
  wagered: string
  reward: string
}

const defaultEntries: { first: PodiumEntry; second: PodiumEntry; third: PodiumEntry } = {
  first: { name: "Prashant Deepak", avatar: "/Default PFP.jpg", wagered: "$8,900.14", reward: "$1,000.00" },
  second: { name: "Towshif Rakib", avatar: "/Default PFP.jpg", wagered: "$6,500.23", reward: "$600.00" },
  third: { name: "Rohit Katariya", avatar: "/Default PFP.jpg", wagered: "$5,800.45", reward: "$300.00" },
}

export function Podium({
  first,
  second,
  third,
}: {
  first?: PodiumEntry
  second?: PodiumEntry
  third?: PodiumEntry
} = {}) {
  const p1 = first ?? defaultEntries.first
  const p2 = second ?? defaultEntries.second
  const p3 = third ?? defaultEntries.third
  return (
    <section className="relative rounded-xl bg-[#120b26] border border-[#1a1033] overflow-hidden mt-5">
            
      {/* Trapezoid gold pedestal - spans full card height */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[26%]"
          style={{
            clipPath: "polygon(18% 0, 82% 0, 100% 100%, 0% 100%)",
            background:
              "linear-gradient(180deg, rgba(251,191,36,0.32) 0%, rgba(251,191,36,0.18) 55%, rgba(251,191,36,0.04) 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[26%]"
          style={{
            clipPath:
              "polygon(18% 0, 18.6% 0, 0.6% 100%, 0% 100%, 0% 99.5%, 18% 0)",
            background: "rgba(251,191,36,0.55)",
          }}
        />
        <div
          className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[26%]"
          style={{
            clipPath:
              "polygon(81.4% 0, 82% 0, 100% 100%, 99.4% 100%, 81.4% 0)",
            background: "rgba(251,191,36,0.55)",
          }}
        />
      </div>

      <div className="relative z-10 px-3 md:px-12 pt-16 md:pt-20 pb-8 md:pb-10">
        <div className="grid grid-cols-3 items-end gap-2 md:gap-6 max-w-[900px] mx-auto">
          {/* #2 */}
          <PodiumCard
            rank={2}
            name={p2.name}
            wagered={p2.wagered}
            reward={p2.reward}
            avatar={p2.avatar}
            ringColor="#c0c0c0"
            wageredColor="#c0c0c0"
            badgeColor="#9aa0b3"
          />

          {/* #1 - center */}
          <div className="relative -mt-8 md:-mt-12 flex flex-col items-center text-center">
            {/* Crown */}
            <Crown
              className="absolute -top-10 md:-top-16 left-1/2 -translate-x-1/2 w-8 h-8 md:w-12 md:h-12 text-[#fbbf24]"
              fill="#fbbf24"
            />
            {/* Avatar in gold */}
            <div className="relative">
              <div className="w-[64px] h-[64px] md:w-[88px] md:h-[88px] rounded-md ring-2 md:ring-4 ring-[#fbbf24] overflow-hidden bg-[#fbbf24]">
                <img src={p1.avatar} alt={p1.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="mt-2 md:mt-3 text-white font-semibold text-[12px] md:text-base truncate max-w-full">{p1.name}</div>
            <div className="mt-1 text-[9px] md:text-[10px] font-bold tracking-[0.18em] text-[#888888]">
              WAGERED
            </div>
            <div className="mt-1 text-base md:text-2xl font-extrabold text-[#fbbf24]">{p1.wagered}</div>
          <div className="mt-1 md:mt-2 flex items-center gap-1 text-[#8b3dff] font-semibold">
        <Gift className="w-3 h-3 md:w-4 md:h-4" />
        <span className="text-xs md:text-base">{p1.reward}</span>
      </div>

          </div>

          {/* #3 */}
          <PodiumCard
            rank={3}
            name={p3.name}
            wagered={p3.wagered}
            reward={p3.reward}
            avatar={p3.avatar}
            ringColor="#cd7f32"
            wageredColor="#cd7f32"
            badgeColor="#b45309"
          />
        </div>
      </div>
    </section>
  )
}

function PodiumCard({
  rank,
  name,
  wagered,
  reward,
  avatar,
  ringColor,
  wageredColor,
  badgeColor,
}: {
  rank: number
  name: string
  wagered: string
  reward: string
  avatar: string
  ringColor: string
  wageredColor: string
  badgeColor: string
}) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Hex badge */}
      <div className="relative">
        <HexBadge color={badgeColor} number={rank} />
      </div>
      <div
        className="mt-2 md:mt-3 w-[52px] h-[52px] md:w-[76px] md:h-[76px] rounded-md overflow-hidden"
        style={{ boxShadow: `0 0 0 3px ${ringColor}` }}
      >
        <img src={avatar} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="mt-2 md:mt-3 text-white font-semibold text-[11px] md:text-[15px] truncate max-w-full">{name}</div>
      <div className="mt-1 text-[9px] md:text-[10px] font-bold tracking-[0.18em] text-[#888888]">
        WAGERED
      </div>
      <div className="mt-1 text-sm md:text-xl font-extrabold" style={{ color: wageredColor }}>
        {wagered}
      </div>
      <div className="mt-1 md:mt-2 flex items-center gap-1 text-[#8b3dff] font-semibold">
        <Gift className="w-3 h-3" />
        <span className="text-[11px] md:text-sm">{reward}</span>
      </div>
    </div>
  )
}

function HexBadge({ color, number }: { color: string; number: number }) {
  return (
    <div className="relative w-9 h-10 grid place-items-center">
      <svg viewBox="0 0 36 40" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <polygon
          points="18,2 34,11 34,29 18,38 2,29 2,11"
          fill={color}
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="1"
        />
      </svg>
      <span className="relative text-white font-bold text-sm">{number}</span>
    </div>
  )
}
