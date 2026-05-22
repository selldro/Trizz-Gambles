const steps = [
  {
    n: "01",
    title: "SIGN UP",
    desc: "Create your free TRIZZ account in seconds. Link your Discord for instant notifications.",
  },
  {
    n: "02",
    title: "WAGER",
    desc: "Place bets on our partner rainbet sites using the TRIZZ affiliate code to earn points.",
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
<<<<<<< HEAD
    <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-5 md:p-8">
      <div className="mb-6">
        <div className="text-[11px] font-bold tracking-[0.18em] text-[#0969b7]">HOW IT WORKS</div>
=======
    <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-5 md:p-8">
      <div className="mb-6">
        <div className="text-[11px] font-bold tracking-[0.18em] text-[#8b3dff]">HOW IT WORKS</div>
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
        <h2 className="mt-2 text-2xl md:text-4xl font-black italic font-[family-name:var(--font-heading)]">
          FOUR STEPS TO WINNING
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {steps.map((s) => (
          <div
            key={s.n}
<<<<<<< HEAD
            className="relative rounded-xl bg-[#232b4a] border border-[#2a344a] p-5 overflow-hidden"
          >
            <div
              className="absolute -top-6 -right-4 text-[96px] font-black text-[#0969b7]/5 font-[family-name:var(--font-heading)] leading-none select-none"
=======
            className="relative rounded-xl bg-[#06030f] border border-[#1a1033] p-5 overflow-hidden"
          >
            <div
              className="absolute -top-6 -right-4 text-[96px] font-black text-[#8b3dff]/5 font-[family-name:var(--font-heading)] leading-none select-none"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              aria-hidden
            >
              {s.n}
            </div>
            <div className="relative">
<<<<<<< HEAD
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#0969b7]">STEP {s.n}</div>
=======
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#8b3dff]">STEP {s.n}</div>
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              <div className="mt-2 text-lg font-bold text-white">{s.title}</div>
              <p className="mt-2 text-[13px] text-[#888888] leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
