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
<<<<<<< HEAD
    <section className="rounded-xl bg-[#122116] border border-[#2a344a] card-glow p-4 md:p-6 mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Swords className="w-5 h-5 text-[#0969b7]" />
          <h2 className="text-[14px] font-bold tracking-[0.18em] text-white">MANAGE CHALLENGES</h2>
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] bg-[#1a1f3a] px-2 py-0.5 rounded">
=======
    <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-4 md:p-6 mt-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <Swords className="w-5 h-5 text-[#8b3dff]" />
          <h2 className="text-[14px] font-bold tracking-[0.18em] text-white">MANAGE CHALLENGES</h2>
          <span className="text-[11px] font-bold tracking-[0.16em] text-[#555555] bg-[#1a1033] px-2 py-0.5 rounded">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
            {challenges.length} Total
          </span>
        </div>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 rounded-md btn-3d-blue hover:opacity-90 transition-opacity text-black text-[11px] font-bold tracking-[0.18em]"
        >
          <Plus className="w-4 h-4" />
          ADD CHALLENGE
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
<<<<<<< HEAD
        <div className="rounded-md bg-[#232b4a] border border-[#2a344a] p-5 mb-5">
=======
        <div className="rounded-md bg-[#06030f] border border-[#1a1033] p-5 mb-5">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
<<<<<<< HEAD
                className="w-full px-3 py-2 rounded-md bg-[#112126] border border-[#2a344a] card-glow text-sm text-white placeholder-[#555555] outline-none focus:border-[#0969b7]/50"
=======
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">IMAGE PATH</label>
              <input
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="e.g. /SB.png"
<<<<<<< HEAD
                className="w-full px-3 py-2 rounded-md bg-[#122116] border border-[#2a344a] card-glow text-sm text-white placeholder-[#555555] outline-none focus:border-[#0969b7]/50"
=======
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">PRIZE</label>
              <input
                value={form.prize}
                onChange={(e) => setForm({ ...form, prize: e.target.value })}
                placeholder="e.g. $50"
<<<<<<< HEAD
                className="w-full px-3 py-2 rounded-md bg-[#122116] border border-[#2a344a] card-glow text-sm text-white placeholder-[#555555] outline-none focus:border-[#0969b7]/50"
=======
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">MIN BET</label>
              <input
                value={form.minBet}
                onChange={(e) => setForm({ ...form, minBet: e.target.value })}
                placeholder="e.g. $0.2"
<<<<<<< HEAD
                className="w-full px-3 py-2 rounded-md bg-[#112126] border border-[#2a344a] card-glow text-sm text-white placeholder-[#555555] outline-none focus:border-[#0969b7]/50"
=======
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-[0.18em] text-[#555555] mb-1.5">TARGET</label>
              <input
                value={form.target}
                onChange={(e) => setForm({ ...form, target: e.target.value })}
                placeholder="e.g. 300X"
<<<<<<< HEAD
                className="w-full px-3 py-2 rounded-md bg-[#122116] border border-[#2a344a] card-glow text-sm text-white placeholder-[#555555] outline-none focus:border-[#0969b7]/50"
=======
                className="w-full px-3 py-2 rounded-md bg-[#120b26] border border-[#1a1033] text-sm text-white placeholder-[#555555] outline-none focus:border-[#8b3dff]/50"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
              />
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md btn-3d-blue hover:opacity-90 transition-opacity text-black text-[11px] font-bold tracking-[0.18em]"
            >
              {editId !== null ? "SAVE CHANGES" : "CREATE CHALLENGE"}
            </button>
            <button
              onClick={() => setShowForm(false)}
<<<<<<< HEAD
              className="px-6 py-2 rounded-md bg-[#1a1f3a] text-[#888888] text-[11px] font-bold tracking-[0.18em] hover:text-white transition-colors"
=======
              className="px-6 py-2 rounded-md bg-[#1a1033] text-[#888888] text-[11px] font-bold tracking-[0.18em] hover:text-white transition-colors"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
<<<<<<< HEAD
            <tr className="border-b border-[#2a344a]">
=======
            <tr className="border-b border-[#1a1033]">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
<<<<<<< HEAD
              <tr key={c.id} className="border-b border-[#2a344a]/50 hover:bg-[#1a1f3a]/30 transition-colors">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-[#1a1f3a]">
=======
              <tr key={c.id} className="border-b border-[#1a1033]/50 hover:bg-[#1a1033]/30 transition-colors">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden bg-[#1a1033]">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="text-[13px] font-bold text-white">{c.name}</span>
                  </div>
                </td>
<<<<<<< HEAD
                <td className="py-3 text-[13px] font-bold text-[#0969b7]">{c.prize}</td>
=======
                <td className="py-3 text-[13px] font-bold text-[#8b3dff]">{c.prize}</td>
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                <td className="py-3 text-[12px] text-[#888888]">{c.minBet}</td>
                <td className="py-3 text-[12px] text-[#888888]">{c.target}</td>
                <td className="py-3">
                  <button
                    onClick={() => handleToggleStatus(c.id)}
                    className={`text-[10px] font-bold tracking-[0.16em] px-2 py-0.5 rounded cursor-pointer ${
                      c.status === "active"
<<<<<<< HEAD
                        ? "bg-[#0969b7]/10 text-[#0969b7]"
=======
                        ? "bg-[#8b3dff]/10 text-[#8b3dff]"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
<<<<<<< HEAD
                      className="grid place-items-center w-7 h-7 rounded-md bg-[#1a1f3a] text-[#888888] hover:text-[#0969b7] transition-colors"
=======
                      className="grid place-items-center w-7 h-7 rounded-md bg-[#1a1033] text-[#888888] hover:text-[#8b3dff] transition-colors"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
                    >
                      <Pencil className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(c.id)}
<<<<<<< HEAD
                      className="grid place-items-center w-7 h-7 rounded-md bg-[#1a1f3a] text-[#888888] hover:text-red-500 transition-colors"
=======
                      className="grid place-items-center w-7 h-7 rounded-md bg-[#1a1033] text-[#888888] hover:text-red-500 transition-colors"
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
