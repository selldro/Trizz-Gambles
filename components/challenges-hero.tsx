import { Swords, Flame } from "lucide-react"

export function ChallengesHero() {
  return (
    <section className="relative rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] overflow-hidden">
      <div className="relative grid md:grid-cols-[1fr_auto] gap-8 p-8 md:p-10">
        {/* Left */}
        <div>
          <h1 className="text-5xl md:text-[56px] font-bold tracking-tight text-white leading-none italic font-[family-name:var(--font-heading)]">
            CHALLENGES
          </h1>
          <p className="mt-5 text-sm font-bold tracking-wide">
            <span className="text-[#00ff87]">COMPLETE CHALLENGES.</span>{" "}
            <span className="text-white/90">HIT THE TARGET MULTIPLIER TO WIN PRIZES.</span>
          </p>
          <div className="mt-8 flex items-center gap-2 text-[13px] text-[#888888]">
            <Swords className="w-4 h-4" />
            <span>Play eligible games and hit the target to claim your reward.</span>
          </div>
        </div>

        {/* Right */}
        <div className="md:min-w-[340px] md:pl-10 md:border-l md:border-[#1a1a1a]">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-[#1a1a1a] border border-[#1a1a1a]">
              <Flame className="w-6 h-6 text-[#00ff87]" fill="#00ff87" />
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">
                ACTIVE CHALLENGES
              </div>
              <div className="text-2xl font-extrabold text-[#00ff87]">4</div>
            </div>
          </div>

          <div className="mt-5 text-[11px] font-bold tracking-[0.18em] text-[#888888]">
            TOTAL PRIZES
          </div>
          <div className="mt-2 rounded-md bg-[#1a1a1a] border border-[#1a1a1a] py-3 text-center">
            <div className="text-2xl font-extrabold text-white leading-none">$250</div>
            <div className="mt-1 text-[10px] font-bold tracking-[0.18em] text-[#888888]">
              UP FOR GRABS
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
