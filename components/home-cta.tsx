import { ArrowRight } from "lucide-react"

export function HomeCta() {
  return (
    <section className="relative rounded-xl bg-[#120b26] border border-[#1a1033] p-6 md:p-10">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md btn-3d-green text-[13px] font-bold tracking-[0.14em]"
          >
            SIGN UP
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/leaderboard"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#8b3dff] text-[#8b3dff] text-[13px] font-bold tracking-[0.14em] hover:bg-[#8b3dff]/10 transition-colors"
          >
            VIEW LEADERBOARD
          </a>
        </div>
      </div>
    </section>
  )
}
