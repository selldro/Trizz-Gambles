"use client"

import { useState } from "react"
import { Coins, X } from "lucide-react"

type StoreItem = {
  id: number
  title: string
  cost: number
  stock: number | null
  status: "in_stock" | "sold_out"
}

const storeItems: StoreItem[] = [
  { id: 1, title: "$40 SHARED BONUS BUY", cost: 7500, stock: 2, status: "in_stock" },
  { id: 2, title: "$100 BLACKJACK HAND", cost: 65000, stock: 2, status: "in_stock" },
  { id: 3, title: "$10 TIP", cost: 9000, stock: null, status: "in_stock" },
  { id: 4, title: "$80 SHARED BONUS BUY", cost: 11000, stock: 1, status: "in_stock" },
  { id: 5, title: "$200 SHARED BONUS B...", cost: 11000, stock: null, status: "in_stock" },
  { id: 6, title: "$20 TIP", cost: 15000, stock: null, status: "in_stock" },
  { id: 7, title: "$50 BLACKJACK HAND", cost: 40000, stock: 2, status: "in_stock" },
  { id: 8, title: "$500 SHARED BONUS BUY", cost: 35000, stock: 1, status: "in_stock" },
]

export function StoreContent() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-4 md:p-6 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {storeItems.map((item) => (
          <div
            key={item.id}
            className="rounded-md bg-[#232b4a] border border-[#2a344a] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-4 pt-3 pb-2">
              <span className="text-[12px] font-bold text-white">{item.title}</span>
            </div>

            {/* Empty Area */}
            <div className="h-40 bg-gradient-to-br from-[#232b4a] to-[#1a1f3a]" />

            {/* Cost */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-t border-[#2a344a]">
              <Coins className="w-4 h-4 text-[#0969b7]" fill="#0969b7" />
              <span className="text-lg font-extrabold text-white">{item.cost.toLocaleString()}</span>
            </div>

            {/* Button */}
            <div className="px-4 pb-4">
              {item.status === "in_stock" ? (
                <button disabled className="w-full py-2 rounded-md bg-[#1a1f3a] text-[#555555] text-[11px] font-bold tracking-[0.18em] cursor-not-allowed">
                  COMING SOON
                </button>
              ) : (
                <button disabled className="w-full py-2 rounded-md bg-[#1a1f3a] text-[#555555] text-[11px] font-bold tracking-[0.18em] cursor-not-allowed">
                  OUT OF STOCK
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg">
          <div className="rounded-xl bg-[#120b26] border border-[#1a1033] p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">REDEEM ITEM</h3>
              <button onClick={() => setShowPopup(false)} className="text-[#888888] hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-[13px] text-[#888888] leading-relaxed">
              To redeem this item, please contact our support team on Discord. They will assist you with the redemption process.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded-md border border-[#8b3dff] text-[#8b3dff] text-[11px] font-bold tracking-[0.18em] hover:bg-[#8b3dff]/10 transition-colors"
              >
                CLOSE
              </button>
              <a
                href="https://discord.gg/zyyn"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md btn-3d-green text-black text-[11px] font-bold tracking-[0.18em] hover:opacity-90 transition-opacity"
              >
                JOIN DISCORD
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
