import { Eye, HelpCircle } from "lucide-react"

const sites = [
<<<<<<< HEAD
  { id: 1, name: "Rainbet", connected: false },
=======
  { id: 1, name: "Betstrike", connected: false },
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
]

export function DashboardConnections() {
  return (
<<<<<<< HEAD
    <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-6 mt-5">
=======
    <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-6 mt-5">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <h2 className="text-[14px] font-bold tracking-[0.18em] text-white">SITE CONNECTIONS</h2>
        <div className="flex items-center gap-3">
<<<<<<< HEAD
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#0969b7]/40 text-[#0969b7] text-[11px] font-bold tracking-[0.18em] hover:bg-[#0969b7]/10 transition-colors">
            <Eye className="w-3.5 h-3.5" />
            SHOW USERNAMES
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#0969b7]/40 text-[#0969b7] text-[11px] font-bold tracking-[0.18em] hover:bg-[#0969b7]/10 transition-colors">
=======
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#8b3dff]/40 text-[#8b3dff] text-[11px] font-bold tracking-[0.18em] hover:bg-[#8b3dff]/10 transition-colors">
            <Eye className="w-3.5 h-3.5" />
            SHOW USERNAMES
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#8b3dff]/40 text-[#8b3dff] text-[11px] font-bold tracking-[0.18em] hover:bg-[#8b3dff]/10 transition-colors">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            <HelpCircle className="w-3.5 h-3.5" />
            CONNECTION GUIDE
          </button>
        </div>
      </div>

      {/* Subheader */}
      <div className="flex items-center gap-2 mb-4">
<<<<<<< HEAD
        <div className="w-1.5 h-1.5 rounded-full bg-[#0969b7]" />
=======
        <div className="w-1.5 h-1.5 rounded-full bg-[#8b3dff]" />
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
        <span className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">AVAILABLE SITES</span>
      </div>

      {/* Sites grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sites.map((site) => (
          <div
            key={site.id}
<<<<<<< HEAD
            className="rounded-md bg-[#232b4a] border border-[#2a344a] overflow-hidden"
=======
            className="rounded-md bg-[#06030f] border border-[#1a1033] overflow-hidden"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
          >
            <div className="px-5 pt-4 pb-3">
              <div className="text-2xl font-black italic tracking-tight text-white leading-none uppercase">{site.name}</div>
            </div>
<<<<<<< HEAD
            <div className="flex items-center justify-between px-5 py-3 border-t border-[#2a344a]">
=======
            <div className="flex items-center justify-between px-5 py-3 border-t border-[#1a1033]">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#888888]">
                NOT CONNECTED
              </span>
              <button className="px-4 py-1.5 rounded-md btn-3d-blue hover:opacity-90 transition-opacity text-black text-[11px] font-bold tracking-[0.18em]">
                CONNECT
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
