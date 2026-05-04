import { Coins } from "lucide-react"

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
  return (
    <section className="rounded-xl bg-[#112116] border border-[#1a2520] p-4 md:p-6 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {storeItems.map((item) => (
          <div
            key={item.id}
            className="rounded-md bg-[#0d1611] border border-[#1a2520] overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-4 pt-3 pb-2">
              <span className="text-[12px] font-bold text-white">{item.title}</span>
            </div>

            {/* Empty Area */}
            <div className="h-40 bg-gradient-to-br from-[#0d1611] to-[#111111]" />

            {/* Cost */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-t border-[#1a2520]">
              <Coins className="w-4 h-4 text-[#00ff87]" fill="#00ff87" />
              <span className="text-lg font-extrabold text-white">{item.cost.toLocaleString()}</span>
            </div>

            {/* Button */}
            <div className="px-4 pb-4">
              {item.status === "in_stock" ? (
                <button className="w-full py-2 rounded-md btn-3d-green text-black text-[11px] font-bold tracking-[0.18em] hover:opacity-90 transition-opacity">
                  REDEEM
                </button>
              ) : (
                <button disabled className="w-full py-2 rounded-md bg-[#1a2520] text-[#555555] text-[11px] font-bold tracking-[0.18em] cursor-not-allowed">
                  OUT OF STOCK
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
