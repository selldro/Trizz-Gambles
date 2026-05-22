import { ShoppingBag, Coins } from "lucide-react"

export function StoreHero() {
  const userPoints = 10
  const totalSpent = 0

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
            STORE
          </h1>
          <p className="mt-5 text-sm font-bold tracking-wide">
<<<<<<< HEAD
            <span className="text-[#0969b7]">REDEEM YOUR POINTS.</span>{" "}
=======
            <span className="text-[#8b3dff]">REDEEM YOUR POINTS.</span>{" "}
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            <span className="text-white/90">SPEND POINTS ON EXCLUSIVE BONUSES AND REWARDS.</span>
          </p>
          <div className="mt-8 flex items-center gap-2 text-[13px] text-[#888888]">
            <ShoppingBag className="w-4 h-4" />
            <span>Earn points by wagering and redeem them for amazing rewards.</span>
          </div>
        </div>

        {/* Right - Points Overview */}
<<<<<<< HEAD
        <div className="md:min-w-[340px] md:pl-10 md:border-l md:border-[#2a344a] pt-6 md:pt-0 border-t md:border-t-0 border-[#2a344a]">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-[#1a1f3a] border border-[#2a344a]">
              <Coins className="w-6 h-6 text-[#0969b7]" fill="#0969b7" />
=======
        <div className="md:min-w-[340px] md:pl-10 md:border-l md:border-[#1a1033] pt-6 md:pt-0 border-t md:border-t-0 border-[#1a1033]">
          <div className="flex items-center gap-3">
            <div className="grid place-items-center w-11 h-11 rounded-md bg-[#1a1033] border border-[#1a1033]">
              <Coins className="w-6 h-6 text-[#8b3dff]" fill="#8b3dff" />
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">
                YOUR BALANCE
              </div>
<<<<<<< HEAD
              <div className="text-2xl font-extrabold text-[#0969b7]">{userPoints} pts</div>
=======
              <div className="text-2xl font-extrabold text-[#8b3dff]">{userPoints} pts</div>
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            </div>
          </div>

          <div className="mt-5 text-[11px] font-bold tracking-[0.18em] text-[#888888]">
            TOTAL REDEEMED
          </div>
<<<<<<< HEAD
          <div className="mt-2 rounded-md bg-[#1a1f3a] border border-[#2a344a] py-3 text-center">
=======
          <div className="mt-2 rounded-md bg-[#1a1033] border border-[#1a1033] py-3 text-center">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            <div className="text-2xl font-extrabold text-white leading-none">{totalSpent}</div>
            <div className="mt-1 text-[10px] font-bold tracking-[0.18em] text-[#888888]">
              POINTS SPENT
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
