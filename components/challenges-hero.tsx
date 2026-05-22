import { Swords, Flame } from "lucide-react"

export function ChallengesHero() {
  return (
<<<<<<< HEAD
    <section className="relative rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow overflow-hidden">
=======
    <section className="relative rounded-xl bg-[#120b26] border border-[#1a1033] overflow-hidden">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
      <div className="relative grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 p-5 md:p-10">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-[56px] font-bold tracking-tight text-white leading-none italic font-[family-name:var(--font-heading)]">
            CHALLENGES
          </h1>
          <p className="mt-5 text-sm font-bold tracking-wide">
<<<<<<< HEAD
            <span className="text-[#0969b7]">COMPLETE CHALLENGES.</span>{" "}
=======
            <span className="text-[#8b3dff]">COMPLETE CHALLENGES.</span>{" "}
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            <span className="text-white/90">HIT THE TARGET MULTIPLIER TO WIN PRIZES.</span>
          </p>
          <div className="mt-8 flex items-center gap-2 text-[13px] text-[#888888]">
            <Swords className="w-4 h-4" />
            <span>Play eligible games and hit the target to claim your reward.</span>
          </div>
        </div>

        {/* Right */}
<<<<<<< HEAD
        <div className="md:min-w-[340px] md:pl-10 md:border-l md:border-[#2a344a] pt-6 md:pt-0 border-t md:border-t-0 border-[#2a344a]">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-[#1a1f3a] border border-[#2a344a]">
              <Flame className="w-6 h-6 text-[#0969b7]" fill="#0969b7" />
=======
        <div className="md:min-w-[340px] md:pl-10 md:border-l md:border-[#1a1033] pt-6 md:pt-0 border-t md:border-t-0 border-[#1a1033]">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-[#1a1033] border border-[#1a1033]">
              <Flame className="w-6 h-6 text-[#8b3dff]" fill="#8b3dff" />
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">
                ACTIVE CHALLENGES
              </div>
<<<<<<< HEAD
              <div className="text-2xl font-extrabold text-[#0969b7]">4</div>
=======
              <div className="text-2xl font-extrabold text-[#8b3dff]">4</div>
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            </div>
          </div>

          <div className="mt-5 text-[11px] font-bold tracking-[0.18em] text-[#888888]">
            TOTAL PRIZES
          </div>
<<<<<<< HEAD
          <div className="mt-2 rounded-md bg-[#1a1f3a] border border-[#2a344a] py-3 text-center">
=======
          <div className="mt-2 rounded-md bg-[#1a1033] border border-[#1a1033] py-3 text-center">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
