"use client"

import { useState } from "react"
import { Search, Trophy, Users } from "lucide-react"

type Challenge = {
  id: number
  name: string
  image: string
  prize: string
  minBet: string
  target: string
  slotsLeft: number | null
  claimed: string
  claimedPercent: number
  winners: string[]
  status: "active" | "completed"
}

const challenges: Challenge[] = [
  {
    id: 1,
    name: "SWEET BONANZA 1000",
    image: "/SB.png",
    prize: "$50",
    minBet: "$0.2",
    target: "300X",
    slotsLeft: 1,
    claimed: "0/1",
    claimedPercent: 0,
    winners: [],
    status: "active",
  },
  {
    id: 2,
    name: "SUGAR RUSH 1000",
    image: "/SR.jpg",
    prize: "$50",
    minBet: "$0.2",
    target: "500X",
    slotsLeft: 1,
    claimed: "0/1",
    claimedPercent: 0,
    winners: [],
    status: "active",
  },
  {
    id: 3,
    name: "DUCK HUNTERS",
    image: "/DH.webp",
    prize: "$50",
    minBet: "$0.1",
    target: "500X",
    slotsLeft: 1,
    claimed: "0/1",
    claimedPercent: 0,
    winners: [],
    status: "active",
  },
  {
    id: 4,
    name: "SUGAR SUPREME",
    image: "/SS.webp",
    prize: "$100",
    minBet: "$1",
    target: "350X",
    slotsLeft: 1,
    claimed: "0/1",
    claimedPercent: 0,
    winners: [],
    status: "active",
  },
]

export function ChallengesContent() {
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all")
  const [search, setSearch] = useState("")

  const filtered = challenges.filter((c) => {
    if (filter === "active" && c.status !== "active") return false
    if (filter === "completed" && c.status !== "completed") return false
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const activeCount = challenges.filter((c) => c.status === "active").length
  const completedCount = challenges.filter((c) => c.status === "completed").length

  return (
    <div className="mt-5 space-y-5">
      {/* Search + Tabs */}
<<<<<<< HEAD
      <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 rounded-md bg-[#232b4a] border border-[#2a344a] px-4 py-2 max-w-sm w-full">
=======
      <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2 rounded-md bg-[#06030f] border border-[#1a1033] px-4 py-2 max-w-sm w-full">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            <Search className="w-4 h-4 text-[#555555]" />
            <input
              type="text"
              placeholder="Search challenges..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-white placeholder-[#555555] outline-none w-full"
            />
          </div>

<<<<<<< HEAD
          <div className="flex items-center gap-1 rounded-md bg-[#232b4a] border border-[#2a344a] p-1 overflow-x-auto">
=======
          <div className="flex items-center gap-1 rounded-md bg-[#06030f] border border-[#1a1033] p-1 overflow-x-auto">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            {([
              { key: "all", label: `ALL ${challenges.length}` },
              { key: "active", label: `ACTIVE ${activeCount}` },
              { key: "completed", label: `COMPLETED ${completedCount}` },
            ] as const).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-1.5 rounded text-[11px] font-bold tracking-[0.16em] transition-colors ${
                  filter === tab.key
<<<<<<< HEAD
                    ? "bg-[#0969b7] text-black"
=======
                    ? "bg-[#8b3dff] text-black"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                    : "text-[#888888] hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center gap-2 mt-5">
          <Trophy className="w-4 h-4 text-[#888888]" />
          <span className="text-[12px] font-bold tracking-[0.16em] text-[#888888]">
            ALL CHALLENGES
          </span>
<<<<<<< HEAD
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] bg-[#1a1f3a] px-2 py-0.5 rounded">
=======
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] bg-[#1a1033] px-2 py-0.5 rounded">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            {filtered.length} Results
          </span>
        </div>
      </section>

      {/* Cards Grid */}
<<<<<<< HEAD
      <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-4 md:p-6">
=======
      <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-4 md:p-6">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((c) => (
            <div
              key={c.id}
<<<<<<< HEAD
              className="rounded-md bg-[#232b4a] border border-[#2a344a] overflow-hidden flex flex-col"
            >
              {/* Image area */}
              <div className="relative h-40 bg-[#232b4a] overflow-hidden">
=======
              className="rounded-md bg-[#06030f] border border-[#1a1033] overflow-hidden flex flex-col"
            >
              {/* Image area */}
              <div className="relative h-40 bg-[#06030f] overflow-hidden">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              {/* Title */}
              <h3 className="text-[14px] font-bold text-white mb-3">{c.name}</h3>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 mb-4">
<<<<<<< HEAD
                <div className="rounded-md bg-[#232b4a] border border-[#2a344a] py-2 text-center">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-[#555555]">PRIZE</div>
                  <div className="text-[14px] font-extrabold text-[#0969b7]">{c.prize}</div>
                </div>
                <div className="rounded-md bg-[#232b4a] border border-[#2a344a] py-2 text-center">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-[#555555]">MIN BET</div>
                  <div className="text-[14px] font-extrabold text-[#0969b7]">{c.minBet}</div>
                </div>
                <div className="rounded-md bg-[#232b4a] border border-[#2a344a] py-2 text-center">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-[#555555]">TARGET</div>
                  <div className="text-[14px] font-extrabold text-[#0969b7]">{c.target}</div>
=======
                <div className="rounded-md bg-[#06030f] border border-[#1a1033] py-2 text-center">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-[#555555]">PRIZE</div>
                  <div className="text-[14px] font-extrabold text-[#8b3dff]">{c.prize}</div>
                </div>
                <div className="rounded-md bg-[#06030f] border border-[#1a1033] py-2 text-center">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-[#555555]">MIN BET</div>
                  <div className="text-[14px] font-extrabold text-[#8b3dff]">{c.minBet}</div>
                </div>
                <div className="rounded-md bg-[#06030f] border border-[#1a1033] py-2 text-center">
                  <div className="text-[9px] font-bold tracking-[0.16em] text-[#555555]">TARGET</div>
                  <div className="text-[14px] font-extrabold text-[#8b3dff]">{c.target}</div>
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                </div>
              </div>

              {/* Claimed progress */}
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5 text-[11px] text-[#888888]">
                  <Users className="w-3 h-3" />
                  <span>{c.claimed} Claimed</span>
                </div>
                <span className="text-[11px] text-[#888888]">{c.claimedPercent}%</span>
              </div>
<<<<<<< HEAD
              <div className="w-full bg-[#1a1f3a] rounded-full h-1.5 mb-3 overflow-hidden">
                <div
                  className="h-full bg-[#0969b7] rounded-full"
=======
              <div className="w-full bg-[#1a1033] rounded-full h-1.5 mb-3 overflow-hidden">
                <div
                  className="h-full bg-[#8b3dff] rounded-full"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                  style={{ width: `${c.claimedPercent}%` }}
                />
              </div>

              {/* Winners */}
              <div className="text-[11px] text-[#888888] mb-4">
                {c.winners.length > 0 ? (
                  <div>
                    <span className="text-[#555555]">Recent Winners:</span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {c.winners.map((w, i) => (
                        <span
                          key={i}
<<<<<<< HEAD
                          className="bg-[#1a1f3a] border border-[#2a344a] px-2 py-0.5 rounded text-[10px] font-bold text-[#0969b7]"
=======
                          className="bg-[#1a1033] border border-[#1a1033] px-2 py-0.5 rounded text-[10px] font-bold text-[#8b3dff]"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <span className="text-[#555555]">No winners yet</span>
                )}
              </div>

              {/* Button */}
              <div className="mt-auto">
                {c.status === "active" ? (
                  <button className="w-full py-2.5 rounded-md btn-3d-blue hover:opacity-90 transition-opacity text-black text-[12px] font-bold tracking-[0.18em]">
                    PLAY NOW
                  </button>
                ) : (
                  <button
                    disabled
<<<<<<< HEAD
                    className="w-full py-2.5 rounded-md bg-[#1a1f3a] text-[#555555] text-[12px] font-bold tracking-[0.18em] cursor-not-allowed"
=======
                    className="w-full py-2.5 rounded-md bg-[#1a1033] text-[#555555] text-[12px] font-bold tracking-[0.18em] cursor-not-allowed"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                  >
                    CHALLENGE ENDED
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>
    </div>
  )
}
