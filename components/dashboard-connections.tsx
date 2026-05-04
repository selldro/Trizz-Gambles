import { Eye, HelpCircle } from "lucide-react"

const sites = [
  { id: 1, name: "Qzino", connected: false },
]

export function DashboardConnections() {
  return (
    <section className="rounded-xl bg-[#112116] border border-[#1a2520] p-6 mt-5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <h2 className="text-[14px] font-bold tracking-[0.18em] text-white">SITE CONNECTIONS</h2>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#00ff87]/40 text-[#00ff87] text-[11px] font-bold tracking-[0.18em] hover:bg-[#00ff87]/10 transition-colors">
            <Eye className="w-3.5 h-3.5" />
            SHOW USERNAMES
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#00ff87]/40 text-[#00ff87] text-[11px] font-bold tracking-[0.18em] hover:bg-[#00ff87]/10 transition-colors">
            <HelpCircle className="w-3.5 h-3.5" />
            CONNECTION GUIDE
          </button>
        </div>
      </div>

      {/* Subheader */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff87]" />
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">AVAILABLE SITES</span>
      </div>

      {/* Sites grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sites.map((site) => (
          <div
            key={site.id}
            className="rounded-md bg-[#0d1611] border border-[#1a2520] overflow-hidden"
          >
            <div className="px-5 pt-4 pb-3">
              <div className="text-2xl font-black italic tracking-tight text-white leading-none uppercase">{site.name}</div>
            </div>
            <div className="flex items-center justify-between px-5 py-3 border-t border-[#1a2520]">
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">
                NOT CONNECTED
              </span>
              <button className="px-4 py-1.5 rounded-md btn-3d-green hover:opacity-90 transition-opacity text-black text-[11px] font-bold tracking-[0.18em]">
                CONNECT
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
