const steps = [
  {
    n: "01",
    title: "SIGN UP",
    desc: "Create your free ZYYN account in seconds. Link your Discord for instant notifications.",
  },
  {
    n: "02",
    title: "WAGER",
    desc: "Place bets on our partner casino sites using the ZYYN affiliate code to earn points.",
  },
  {
    n: "03",
    title: "CLIMB & EARN",
    desc: "Track your rank live and claim rewards as you hit milestones and complete challenges.",
  },
  {
    n: "04",
    title: "CASH OUT",
    desc: "Redeem points in the store for cash, bonuses, or exclusive merch — paid out weekly.",
  },
]

export function HomeHowItWorks() {
  return (
    <section className="rounded-xl bg-[#112116] border border-[#1a2520] card-glow p-5 md:p-8">
      <div className="mb-6">
        <div className="text-[11px] font-bold tracking-[0.18em] text-[#00ff87]">HOW IT WORKS</div>
        <h2 className="mt-2 text-2xl md:text-4xl font-black italic font-[family-name:var(--font-heading)]">
          FOUR STEPS TO WINNING
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="relative rounded-xl bg-[#0d1611] border border-[#1a2520] p-5 overflow-hidden"
          >
            <div
              className="absolute -top-6 -right-4 text-[96px] font-black text-[#00ff87]/5 font-[family-name:var(--font-heading)] leading-none select-none"
              aria-hidden
            >
              {s.n}
            </div>
            <div className="relative">
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#00ff87]">STEP {s.n}</div>
              <div className="mt-2 text-lg font-bold text-white">{s.title}</div>
              <p className="mt-2 text-[13px] text-[#888888] leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
