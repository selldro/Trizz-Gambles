"use client"

import { useState } from "react"
import { Search, Users, ChevronDown } from "lucide-react"

const mockUsers = [
  { id: 1, username: "Yixtra", email: "y*****@hotmail.com", discord: "yixtra#0001", kick: "Connected", joined: "2025-04-28", wagered: "$12,400", status: "active" },
  { id: 2, username: "SantanaWild", email: "s*****@gmail.com", discord: "santana#1234", kick: "Not Connected", joined: "2025-04-27", wagered: "$8,200", status: "active" },
  { id: 3, username: "CodeRed", email: "c*****@gmail.com", discord: "codered#5678", kick: "Connected", joined: "2025-04-26", wagered: "$5,100", status: "active" },
  { id: 4, username: "BetaKing", email: "b*****@yahoo.com", discord: "betaking#9012", kick: "Not Connected", joined: "2025-04-25", wagered: "$3,800", status: "active" },
  { id: 5, username: "VisionX", email: "v*****@outlook.com", discord: "visionx#3456", kick: "Connected", joined: "2025-04-24", wagered: "$2,600", status: "banned" },
  { id: 6, username: "TrizzVIP", email: "z*****@gmail.com", discord: "trizzvip#7890", kick: "Connected", joined: "2025-04-23", wagered: "$1,900", status: "active" },
]

export function AdminUsers() {
  const [search, setSearch] = useState("")

  const filtered = mockUsers.filter((u) =>
    u.username.toLowerCase().includes(search.toLowerCase())
  )

  return (
<<<<<<< HEAD
    <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-[#0969b7]" />
          <h2 className="text-[14px] font-bold tracking-[0.18em] text-white">ALL USERS</h2>
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] bg-[#1a1f3a] px-2 py-0.5 rounded">
=======
    <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-[#8b3dff]" />
          <h2 className="text-[14px] font-bold tracking-[0.18em] text-white">ALL USERS</h2>
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] bg-[#1a1033] px-2 py-0.5 rounded">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            {mockUsers.length} Total
          </span>
        </div>

<<<<<<< HEAD
        <div className="flex items-center gap-2 rounded-md bg-[#232b4a] border border-[#2a344a] px-4 py-2 max-w-xs w-full">
=======
        <div className="flex items-center gap-2 rounded-md bg-[#06030f] border border-[#1a1033] px-4 py-2 max-w-xs w-full">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
<<<<<<< HEAD
            <tr className="border-b border-[#2a344a]">
=======
            <tr className="border-b border-[#1a1033]">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
<<<<<<< HEAD
              <tr key={user.id} className="border-b border-[#2a344a]/50 hover:bg-[#1a1f3a]/30 transition-colors">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md overflow-hidden bg-[#1a1f3a]">
=======
              <tr key={user.id} className="border-b border-[#1a1033]/50 hover:bg-[#1a1033]/30 transition-colors">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md overflow-hidden bg-[#1a1033]">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
<<<<<<< HEAD
                  <span className={`text-[11px] font-bold ${user.kick === "Connected" ? "text-[#0969b7]" : "text-[#555555]"}`}>
=======
                  <span className={`text-[11px] font-bold ${user.kick === "Connected" ? "text-[#8b3dff]" : "text-[#555555]"}`}>
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                    {user.kick}
                  </span>
                </td>
                <td className="py-3 text-[12px] text-[#888888]">{user.joined}</td>
                <td className="py-3 text-[13px] font-bold text-white">{user.wagered}</td>
                <td className="py-3">
                  <span className={`text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 rounded ${
                    user.status === "active"
<<<<<<< HEAD
                      ? "bg-[#0969b7]/10 text-[#0969b7]"
=======
                      ? "bg-[#8b3dff]/10 text-[#8b3dff]"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
