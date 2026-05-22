import { ArrowRight } from "lucide-react"

export function HomeCta() {
  return (
    <section className="relative rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow overflow-hidden p-6 md:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(800px circle at 50% 120%, rgba(10, 120, 209, 0.25) 0%, transparent 60%)",
        }}
      />
      <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-4xl font-black italic font-[family-name:var(--font-heading)] text-white">
            READY TO CLIMB?
          </h2>
          <p className="mt-2 text-sm md:text-base text-[#888888] max-w-xl">
            Sign up in seconds and start earning leaderboard points on every wager.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-3d-blue text-[13px] font-bold tracking-[0.14em]"
          >
            SIGN UP
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/leaderboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#0969b7] text-[#0969b7] text-[13px] font-bold tracking-[0.14em] hover:bg-[#0969b7]/10 transition-colors"
          >
            VIEW LEADERBOARD
          </a>
        </div>
      </div>
    </section>
  )
}
