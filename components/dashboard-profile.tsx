import { LogOut, Wallet } from "lucide-react"

export function DashboardProfile() {
  return (
    <section className="rounded-xl bg-[#112116] border border-[#1a2520] card-glow p-6">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left - User Info */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-md overflow-hidden bg-[#1a2520] border border-[#1a2520]">
            <img
              src="/Default PFP.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-2xl font-black italic tracking-tight text-white leading-none">YIXTRA</div>
            <div className="mt-1 text-[12px] font-bold tracking-[0.16em] text-[#888888]">*********@HOTMAIL.COM</div>
          </div>
        </div>

        {/* Right - Actions */}
        <div className="flex flex-col gap-3 w-full lg:w-auto">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#1a2520] border border-[#1a2520] hover:bg-[#222222] transition-colors text-white text-[12px] font-bold tracking-[0.16em]">
              <Wallet className="w-4 h-4" />
              MANAGE WALLETS
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#1a2520] border border-[#1a2520] hover:bg-[#222222] transition-colors text-white text-[12px] font-bold tracking-[0.16em]">
              <LogOut className="w-4 h-4" />
              SIGN OUT
            </button>
          </div>

          {/* Kick Connection */}
          <div className="flex items-center justify-between gap-4 rounded-md bg-[#0d1611] border border-[#1a2520] p-3 min-w-[340px]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-md overflow-hidden">
                <img src="/Kick.jpeg" alt="Kick" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white">KICK ACCOUNT</div>
                <div className="text-[11px] text-[#888888]">NOT CONNECTED</div>
              </div>
            </div>
            <button className="px-4 py-2 rounded-md btn-3d-green hover:opacity-90 transition-opacity text-black text-[11px] font-bold tracking-[0.18em]">
              CONNECT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
