import { ShoppingBag } from "lucide-react"

export function DashboardHistory() {
  return (
    <section className="rounded-xl bg-[#112116] border border-[#1a2520] card-glow p-6 mt-5">
      {/* Header */}
      <h2 className="text-[14px] font-bold tracking-[0.18em] text-white mb-6">PURCHASE HISTORY</h2>

      {/* Empty state */}
      <div className="flex justify-center py-10">
        <div className="w-full max-w-[460px] rounded-md bg-[#0d1611] border border-[#1a2520] p-8 flex flex-col items-center text-center">
          <div className="grid place-items-center w-14 h-14 rounded-md bg-[#1a2520] border border-[#00ff87]/30 mb-4">
            <ShoppingBag className="w-6 h-6 text-[#00ff87]" />
          </div>
          <div className="text-[14px] font-bold tracking-[0.18em] text-white mb-2">
            NO PURCHASE HISTORY
          </div>
          <p className="text-[12px] text-[#888888] leading-relaxed">
            You haven't made any purchases yet. Visit the{" "}
            <a href="/store" className="text-[#00ff87] font-bold underline">
              STORE
            </a>{" "}
            to get started!
          </p>
        </div>
      </div>
    </section>
  )
}
