import { Trophy, Star } from "lucide-react"

export function MilestonesHero() {
  const completedMilestones = 0
  const totalMilestones = 12
  const completionPercentage = Math.round((completedMilestones / totalMilestones) * 100)

  return (
    <section className="relative rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] overflow-hidden">
      <div className="relative grid md:grid-cols-[1fr_auto] gap-8 p-8 md:p-10">
        {/* Left */}
        <div>
          <h1 className="text-5xl md:text-[56px] font-bold tracking-tight text-white leading-none italic font-[family-name:var(--font-heading)]">
            MILESTONES
          </h1>
          <p className="mt-5 text-sm font-bold tracking-wide">
            <span className="text-[#00ff87]">COMPLETE CHALLENGES.</span>{" "}
            <span className="text-white/90">UNLOCK REWARDS AS YOU PROGRESS THROUGH YOUR GAMING JOURNEY.</span>
          </p>
          <div className="mt-8 flex items-center gap-2 text-[13px] text-[#888888]">
            <Star className="w-4 h-4" />
            <span>Complete milestones to unlock exclusive rewards and bonuses.</span>
          </div>
        </div>

        {/* Right - Progress Overview */}
        <div className="md:min-w-[340px] md:pl-10 md:border-l md:border-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-[#1a1a1a] border border-[#1a1a1a]">
              <Trophy className="w-6 h-6 text-[#00ff87]" fill="#00ff87" />
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">
                YOUR PROGRESS
              </div>
              <div className="text-2xl font-extrabold text-[#00ff87]">{completionPercentage}%</div>
            </div>
          </div>

          <div className="mt-5 text-[11px] font-bold tracking-[0.18em] text-[#888888]">
            MILESTONES COMPLETE
          </div>
          <div className="mt-2 rounded-md bg-[#1a1a1a] border border-[#1a1a1a] py-3 text-center">
            <div className="text-2xl font-extrabold text-white leading-none">{completedMilestones}</div>
            <div className="mt-1 text-[10px] font-bold tracking-[0.18em] text-[#888888]">
              OF {totalMilestones}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
