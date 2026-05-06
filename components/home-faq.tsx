"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How do I join the leaderboard?",
    a: "Simply sign up for a free ZYYN account and wager on any of our partner sites using the ZYYN affiliate code. Your points update live.",
  },
  {
    q: "When are prizes paid out?",
    a: "Leaderboard prizes are paid out at the end of each race. Milestone and challenge rewards are paid instantly when you claim them.",
  },
  {
    q: "How do I earn points?",
    a: "Every dollar wagered on partner sites earns you leaderboard points. Some games and bet types earn multipliers during special events.",
  },
  {
    q: "What are challenges?",
    a: "Challenges are time-limited objectives (daily / weekly) with bonus rewards. Complete them to earn extra points, cash, or exclusive prizes.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach our support team via Discord or by opening a ticket in the dashboard. We typically respond within 24 hours.",
  },
]

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="rounded-xl bg-[#112116] border border-[#1a2520] card-glow p-5 md:p-8">
      <div className="mb-6">
        <div className="text-[11px] font-bold tracking-[0.18em] text-[#00ff87]">FAQ</div>
        <h2 className="mt-2 text-2xl md:text-4xl font-black italic font-[family-name:var(--font-heading)]">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <ul className="space-y-2">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <li key={i} className="rounded-md bg-[#0d1611] border border-[#1a2520] overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
              >
                <span className="text-sm md:text-base font-semibold text-white">{f.q}</span>
                <ChevronDown
                  className={`shrink-0 w-4 h-4 text-[#00ff87] transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-[13px] md:text-sm text-[#888888] leading-relaxed">
                  {f.a}
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
