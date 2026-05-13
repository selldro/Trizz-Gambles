import { Coins, User, Clock, Gift } from "lucide-react"

const steps = [
  {
    icon: User,
    title: "SIGN UP",
    description: "Create your free ZYYN account to get started",
  },
  {
    icon: User,
    title: "LINK KICK ACCOUNT",
    description: "Connect your Kick account in the dashboard",
  },
  {
    icon: Clock,
    title: "WATCH STREAMS",
    description: "Every minute you watch the stream you gain 10 points",
  },
  {
    icon: Gift,
    title: "REDEEM REWARDS",
    description: "Exchange your points for cash, bonuses, and exclusive merch",
  },
]

export function HomePointsSystem() {
  return (
    <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-5 md:p-8">
      <div className="mb-6">
        <div className="text-[11px] font-bold tracking-[0.18em] text-[#8b3dff]">POINT SYSTEM</div>
        <h2 className="mt-2 text-2xl md:text-4xl font-black italic font-[family-name:var(--font-heading)]">
          EARN POINTS, GET REWARDS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={index}
              className="relative rounded-xl bg-[#06030f] border border-[#1a1033] p-5 overflow-hidden"
            >
              <div
                className="absolute -top-6 -right-4 text-[96px] font-black text-[#8b3dff]/5 font-[family-name:var(--font-heading)] leading-none select-none"
                aria-hidden
              >
                {index + 1}
              </div>
              <div className="relative">
                <div className="grid place-items-center w-12 h-12 rounded-md bg-[#1a1033] border border-[#8b3dff]/30 mb-4">
                  <Icon className="w-6 h-6 text-[#8b3dff]" />
                </div>
                <div className="text-[11px] font-bold tracking-[0.18em] text-[#8b3dff] mb-2">STEP {index + 1}</div>
                <div className="text-lg font-bold text-white mb-2">{step.title}</div>
                <p className="text-[13px] text-[#888888] leading-relaxed">{step.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
