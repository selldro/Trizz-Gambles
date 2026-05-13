"use client"

import { useState } from "react"
import { Swords, Plus, Pencil, Trash2, X } from "lucide-react"

type Challenge = {
  id: number
  name: string
  image: string
  prize: string
  minBet: string
  target: string
  status: "active" | "completed"
}

const initialChallenges: Challenge[] = [
  { id: 1, name: "SWEET BONANZA 1000", image: "/SB.png", prize: "$50", minBet: "$0.2", target: "300X", status: "active" },
  { id: 2, name: "SUGAR RUSH 1000", image: "/SR.jpg", prize: "$50", minBet: "$0.2", target: "500X", status: "active" },
  { id: 3, name: "DUCK HUNTERS", image: "/DH.webp", prize: "$50", minBet: "$0.1", target: "500X", status: "active" },
  { id: 4, name: "SUGAR SUPREME", image: "/SS.webp", prize: "$100", minBet: "$1", target: "350X", status: "active" },
]

export function AdminChallenges() {
  const [challenges, setChallenges] = useState<Challenge[]>(initialChallenges)
  const [showForm, setShowForm] = useState(false)
  const [editId, setEditId] = useState<number | null>(null)
  const [form, setForm] = useState({ name: "", prize: "", minBet: "", target: "", image: "" })

  const handleAdd = () => {
    setEditId(null)
    setForm({ name: "", prize: "", minBet: "", target: "", image: "" })
    setShowForm(true)
  }

  const handleEdit = (c: Challenge) => {
    setEditId(c.id)
    setForm({ name: c.name, prize: c.prize, minBet: c.minBet, target: c.target, image: c.image })
    setShowForm(true)
  }

  const handleSave = () => {
    if (editId !== null) {
      setChallenges((prev) =>
        prev.map((c) =>
          c.id === editId ? { ...c, ...form } : c
        )
      )
    } else {
      setChallenges((prev) => [
        ...prev,
        { id: Date.now(), ...form, status: "active" as const },
      ])
    }
    setShowForm(false)
    setForm({ name: "", prize: "", minBet: "", target: "", image: "" })
    setEditId(null)
  }

  const handleDelete = (id: number) => {
    setChallenges((prev) => prev.filter((c) => c.id !== id))
  }

  const handleToggleStatus = (id: number) => {
    setChallenges((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "active" ? "completed" as const : "active" as const }
          : c
      )
    )
  }

  return (
    <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-4 md:p-6 mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Swords className="w-5 h-5 text-[#8b3dff]" />
          <h2 className="text-[14px] font-bold tracking-[0.18em] text-white">MANAGE CHALLENGES</h2>
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] bg-[#1a1033] px-2 py-0.5 rounded">
            {challenges.length} Total
          </span>
        </div>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 rounded-md btn-3d-green hover:opacity-90 transition-opacity text-black text-[11px] font-bold tracking-[0.18em]"
        >
          <Plus className="w-4 h-4" />
          ADD CHALLENGE
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="rounded-md bg-[#06030f] border border-[#1a1033] p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[13px] font-bold tracking-[0.16em] text-white">
              {editId !== null ? "EDIT CHALLENGE" : "NEW CHALLENGE"}
            </h3>
            <button onClick={() => setShowForm(false)} className="text-[#555555] hover:text-white transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">GAME NAME</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Sweet Bonanza 1000"
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">IMAGE PATH</label>
              <input
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="e.g. /SB.png"
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">PRIZE</label>
              <input
                value={form.prize}
                onChange={(e) => setForm({ ...form, prize: e.target.value })}
                placeholder="e.g. $50"
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">MIN BET</label>
              <input
                value={form.minBet}
                onChange={(e) => setForm({ ...form, minBet: e.target.value })}
                placeholder="e.g. $0.2"
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">TARGET</label>
              <input
                value={form.target}
                onChange={(e) => setForm({ ...form, target: e.target.value })}
                placeholder="e.g. 300X"
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md btn-3d-green hover:opacity-90 transition-opacity text-black text-[11px] font-bold tracking-[0.18em]"
            >
              {editId !== null ? "SAVE CHANGES" : "CREATE CHALLENGE"}
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="px-6 py-2 rounded-md bg-[#1a1033] text-[#888888] text-[11px] font-bold tracking-[0.18em] hover:text-white transition-colors"
            >
              CANCEL
            </button>
          </div>
        </div>
      )}

      {/* Challenges Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#1a1033]">
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">GAME</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">PRIZE</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">MIN BET</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">TARGET</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">STATUS</th>
              <th className="pb-3 text-[10px] font-bold tracking-[0.18em] text-[#555555]">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((c) => (
              <tr key={c.id} className="border-b border-[#1a1033]/50 hover:bg-[#1a1033]/30 transition-colors">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-[#1a1033]">
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[13px] font-bold text-white">{c.name}</span>
                  </div>
                </td>
                <td className="py-3 text-[13px] font-bold text-[#8b3dff]">{c.prize}</td>
                <td className="py-3 text-[12px] text-[#888888]">{c.minBet}</td>
                <td className="py-3 text-[12px] text-[#888888]">{c.target}</td>
                <td className="py-3">
                  <button
                    onClick={() => handleToggleStatus(c.id)}
                    className={`text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 rounded cursor-pointer ${
                      c.status === "active"
                        ? "bg-[#8b3dff]/10 text-[#8b3dff]"
                        : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {c.status.toUpperCase()}
                  </button>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleEdit(c)}
                      className="grid place-items-center w-7 h-7 rounded-md bg-[#1a1033] text-[#888888] hover:text-[#8b3dff] transition-colors"
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
                      className="grid place-items-center w-7 h-7 rounded-md bg-[#1a1033] text-[#888888] hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
