"use client"

import { useState } from "react"
import { Search, Users, ChevronDown } from "lucide-react"

const mockUsers = [
  { id: 1, username: "Yixtra", email: "y*****@hotmail.com", discord: "yixtra#0001", kick: "Connected", joined: "2025-04-28", wagered: "$12,400", status: "active" },
  { id: 2, username: "SantanaWild", email: "s*****@gmail.com", discord: "santana#1234", kick: "Not Connected", joined: "2025-04-27", wagered: "$8,200", status: "active" },
  { id: 3, username: "CodeRed", email: "c*****@gmail.com", discord: "codered#5678", kick: "Connected", joined: "2025-04-26", wagered: "$5,100", status: "active" },
  { id: 4, username: "BetaKing", email: "b*****@yahoo.com", discord: "betaking#9012", kick: "Not Connected", joined: "2025-04-25", wagered: "$3,800", status: "active" },
  { id: 5, username: "VisionX", email: "v*****@outlook.com", discord: "visionx#3456", kick: "Connected", joined: "2025-04-24", wagered: "$2,600", status: "banned" },
  { id: 6, username: "ZyynVIP", email: "z*****@gmail.com", discord: "zyynvip#7890", kick: "Connected", joined: "2025-04-23", wagered: "$1,900", status: "active" },
]

export function AdminUsers() {
  const [search, setSearch] = useState("")

  const filtered = mockUsers.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="rounded-xl bg-[#112116] border border-[#1a2520] p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-[#00ff87]" />
          <h2 className="text-[14px] font-bold tracking-[0.18em] text-white">ALL USERS</h2>
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] bg-[#1a2520] px-2 py-0.5 rounded">
            {mockUsers.length} Total
          </span>
        </div>

        <div className="flex items-center gap-2 rounded-md bg-[#0d1611] border border-[#1a2520] px-4 py-2 max-w-xs w-full">
          <Search className="w-4 h-4 text-[#555555]" />
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-white placeholder-[#555555] outline-none w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#1a2520]">
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">USER</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">DISCORD</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">KICK</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">JOINED</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">WAGERED</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">STATUS</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((user) => (
              <tr key={user.id} className="border-b border-[#1a2520]/50 hover:bg-[#1a2520]/30 transition-colors">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md overflow-hidden bg-[#1a2520]">
                      <img src="/Default PFP.jpg" alt={user.username} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-white">{user.username}</div>
                      <div className="text-[10px] text-[#555555]">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 text-[12px] text-[#888888]">{user.discord}</td>
                <td className="py-3">
                  <span className={`text-[11px] font-bold ${user.kick === "Connected" ? "text-[#00ff87]" : "text-[#555555]"}`}>
                    {user.kick}
                  </span>
                </td>
                <td className="py-3 text-[12px] text-[#888888]">{user.joined}</td>
                <td className="py-3 text-[13px] font-bold text-white">{user.wagered}</td>
                <td className="py-3">
                  <span className={`text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 rounded ${
                    user.status === "active"
                      ? "bg-[#00ff87]/10 text-[#00ff87]"
                      : "bg-red-500/10 text-red-500"
                  }`}>
                    {user.status.toUpperCase()}
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-[10px] font-bold tracking-[0.16em] text-[#888888] hover:text-white transition-colors flex items-center gap-1">
                    MANAGE <ChevronDown className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
