"use client"

import { useState } from "react"
import { Star, Zap, Trophy, Crown, Lock, X } from "lucide-react"

type Milestone = {
  id: number
  title: string
  wager: string
  reward: string
  icon: typeof Star
  claimable?: boolean
}

type Tier = {
  name: string
  color: string
  milestones: Milestone[]
}

const tiers: Tier[] = [
  {
    name: "ROOKIE",
    color: "#f97316",
    milestones: [
      { id: 1, title: "Rookie I", wager: "$5K", reward: "$5", icon: Star, claimable: true },
      { id: 2, title: "Rookie II", wager: "$10K", reward: "$10", icon: Star },
      { id: 3, title: "Rookie III", wager: "$20K", reward: "$15", icon: Star },
    ],
  },
  {
    name: "GRINDER",
    color: "#a855f7",
    milestones: [
      { id: 4, title: "Grinder I", wager: "$30K", reward: "$20", icon: Zap },
      { id: 5, title: "Grinder II", wager: "$50K", reward: "$25", icon: Zap },
      { id: 6, title: "Grinder III", wager: "$75K", reward: "$30", icon: Zap },
    ],
  },
  {
    name: "HIGH ROLLER",
    color: "#facc15",
    milestones: [
      { id: 7, title: "High Roller I", wager: "$100K", reward: "$40", icon: Trophy },
      { id: 8, title: "High Roller II", wager: "$150K", reward: "$50", icon: Trophy },
      { id: 9, title: "High Roller III", wager: "$200K", reward: "$75", icon: Trophy },
    ],
  },
  {
    name: "ELITE",
    color: "#8b3dff",
    milestones: [
      { id: 10, title: "Elite I", wager: "$250K", reward: "$100", icon: Crown },
      { id: 11, title: "Elite II", wager: "$500K", reward: "$300", icon: Crown },
      { id: 12, title: "Elite III", wager: "$1M", reward: "$700", icon: Crown },
    ],
  },
]

export function MilestonesContent() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="mt-5 space-y-6">
      {tiers.map((tier) => (
        <section
          key={tier.name}
          className="rounded-xl bg-[#120b26] border border-[#1a1033] p-4 md:p-6"
        >
          {/* Milestone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tier.milestones.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.id}
                  className="rounded-md bg-[#06030f] border border-[#1a1033] overflow-hidden"
                >
                  {/* Top row */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5" style={{ color: tier.color }} />
                      <div>
                        <div className="text-[14px] font-bold text-white">{m.title}</div>
                        <div className="text-[11px] text-[#888888]">{m.wager} Wager</div>
                      </div>
                    </div>
                    {!m.claimable && <Lock className="w-4 h-4 text-[#555555]" />}
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between px-5 py-3 border-t border-[#1a1033]">
                    <span className="text-[11px] font-bold tracking-[0.16em] text-[#888888]">REWARD</span>
                    <span className="text-xl font-extrabold" style={{ color: tier.color }}>{m.reward}</span>
                  </div>

                  <div className="px-5 pb-4">
                    {m.claimable ? (
                      <button onClick={() => setShowPopup(true)} className="w-full py-2 rounded-md btn-3d-green hover:opacity-90 transition-opacity text-black text-[11px] font-bold tracking-[0.18em]">
                        CLAIM
                      </button>
                    ) : (
                      <button disabled className="w-full py-2 rounded-md bg-[#1a1033] text-[#555555] text-[11px] font-bold tracking-[0.18em] cursor-not-allowed">
                        LOCKED
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg">
          <div className="rounded-xl bg-[#120b26] border border-[#1a1033] p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">CLAIM MILESTONE</h3>
              <button onClick={() => setShowPopup(false)} className="text-[#888888] hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[13px] text-[#888888] leading-relaxed">
              To claim this milestone reward, please contact our support team on Discord. They will assist you with the redemption process.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded-md border border-[#8b3dff] text-[#8b3dff] text-[11px] font-bold tracking-[0.18em] hover:bg-[#8b3dff]/10 transition-colors"
              >
                CLOSE
              </button>
              <a
                href="https://discord.gg/zyyn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md btn-3d-green text-black text-[11px] font-bold tracking-[0.18em] hover:opacity-90 transition-opacity"
              >
                JOIN DISCORD
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
