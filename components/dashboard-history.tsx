import { ShoppingBag } from "lucide-react"

export function DashboardHistory() {
  return (
<<<<<<< HEAD
    <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-6 mt-5">
=======
    <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-6 mt-5">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
      {/* Header */}
      <h2 className="text-[14px] font-bold tracking-[0.18em] text-white mb-6">PURCHASE HISTORY</h2>

      {/* Empty state */}
      <div className="flex justify-center py-10">
<<<<<<< HEAD
        <div className="w-full max-w-[460px] rounded-md bg-[#232b4a] border border-[#2a344a] p-8 flex flex-col items-center text-center">
          <div className="grid place-items-center w-14 h-14 rounded-md bg-[#1a1f3a] border border-[#0969b7]/30 mb-4">
            <ShoppingBag className="w-6 h-6 text-[#0969b7]" />
=======
        <div className="w-full max-w-[460px] rounded-md bg-[#06030f] border border-[#1a1033] p-8 flex flex-col items-center text-center">
          <div className="grid place-items-center w-14 h-14 rounded-md bg-[#1a1033] border border-[#8b3dff]/30 mb-4">
            <ShoppingBag className="w-6 h-6 text-[#8b3dff]" />
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
          </div>
          <div className="text-[14px] font-bold tracking-[0.18em] text-white mb-2">
            NO PURCHASE HISTORY
          </div>
          <p className="text-[12px] text-[#888888] leading-relaxed">
            You haven't made any purchases yet. Visit the{" "}
<<<<<<< HEAD
            <a href="/store" className="text-[#0969b7] font-bold underline">
=======
            <a href="/store" className="text-[#8b3dff] font-bold underline">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              STORE
            </a>{" "}
            to get started!
          </p>
        </div>
      </div>
    </section>
  )
}
