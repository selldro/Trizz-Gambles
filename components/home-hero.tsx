import { Info } from "lucide-react"

export function HomeHero() {
  return (
    <section className="relative rounded-xl bg-[#120b26] border border-[#1a1033] overflow-hidden">
      <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 md:gap-8 p-5 md:p-10">
        {/* Left */}
        <div>
          <h1 className="text-4xl md:text-[56px] font-black tracking-tight text-white leading-none italic font-[family-name:var(--font-heading)]">
            WELCOME TO ZYYN
          </h1>
          <p className="mt-5 text-sm font-bold tracking-wide">
            <span className="text-[#8b3dff]">WAGER, CLIMB, WIN.</span>{" "}
            <span className="text-white/90">THE MORE YOU WAGER, THE HIGHER YOU RANK.</span>
          </p>
          <div className="mt-8 flex items-center gap-2 text-[13px] text-[#888888]">
            <Info className="w-4 h-4" />
            <span>Use the ZYYN code on partner sites to start earning points.</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/leaderboard"
              className="px-6 py-3 rounded-md btn-3d-green text-[13px] font-bold tracking-[0.14em]"
            >
              VIEW LEADERBOARD
            </a>
            <a
              href="/signup"
              className="px-6 py-3 rounded-md border border-[#8b3dff] text-[#8b3dff] text-[13px] font-bold tracking-[0.14em] hover:bg-[#8b3dff]/10 transition-colors"
            >
              SIGN UP FREE
            </a>
          </div>
        </div>

        {/* Right - Zeus gif (reserves width, overflows vertically, clipped by card) */}
        <div className="relative w-[240px] md:w-[300px] lg:w-[340px] h-[180px] md:h-[220px] mx-auto lg:mx-0">
          <img
            src="/Zeus.png"
            alt="Zeus"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[42%] h-[320px] md:h-[400px] lg:h-[460px] max-w-none w-auto object-contain pointer-events-none select-none"
          />
        </div>
      </div>
    </section>
  )
}
