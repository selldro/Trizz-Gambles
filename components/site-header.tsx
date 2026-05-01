"use client"

import { Plus, ChevronDown, Coins } from "lucide-react"
import { ZyynLogo } from "./zyyn-logo"
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const pathname = usePathname()
  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1360px] px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <ZyynLogo className="h-8 w-8" />
          <span className="text-xl font-extrabold tracking-wide text-white">ZYYN</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10 text-[13px] font-bold tracking-[0.18em]">
          <a href="/home" className={pathname === '/home' ? "text-[#00ff87]" : "text-[#888888] hover:text-white transition-colors"}>HOME</a>
          <a href="/leaderboard" className={pathname === '/leaderboard' ? "text-[#00ff87]" : "text-[#888888] hover:text-white transition-colors"}>LEADERBOARD</a>
          <a href="/milestones" className={pathname === '/milestones' ? "text-[#00ff87]" : "text-[#888888] hover:text-white transition-colors"}>MILESTONES</a>
          <a href="/challenges" className={pathname === '/challenges' ? "text-[#00ff87]" : "text-[#888888] hover:text-white transition-colors"}>CHALLENGES</a>
          <a href="/store" className={pathname === '/store' ? "text-[#00ff87]" : "text-[#888888] hover:text-white transition-colors"}>STORE</a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Balance */}
          <div className="flex items-center gap-2 rounded-md bg-[#0f0f0f] border border-[#1a1a1a] pl-3 pr-1 py-1">
            <div className="flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-[#00ff87]" fill="#00ff87" />
              <span className="text-sm font-semibold text-white">10</span>
            </div>
            <button
              aria-label="Add funds"
              className="grid place-items-center w-7 h-7 rounded-md bg-gradient-to-b from-[#00ff87] to-[#00cc6a] border border-[#00ff87] hover:opacity-90 transition-opacity"
            >
              <Plus className="w-4 h-4 text-black" strokeWidth={3} />
            </button>
          </div>

          {/* Login */}
          <a href="/login" className="px-4 py-2 rounded-md bg-gradient-to-b from-[#00ff87] to-[#00cc6a] border border-[#00ff87] hover:opacity-90 transition-opacity text-black text-[13px] font-bold tracking-[0.14em]">
            LOGIN
          </a>

          {/* Signup */}
          <a href="/signup" className="px-4 py-2 rounded-md border border-[#00ff87] text-[#00ff87] text-[13px] font-bold tracking-[0.14em] hover:bg-[#00ff87]/10 transition-colors">
            SIGNUP
          </a>

          {/* Avatar */}
          <a href="/dashboard" className="flex items-center gap-1 rounded-md bg-[#0f0f0f] border border-[#1a1a1a] p-1 pr-2">
            <span className="block w-7 h-7 rounded-md overflow-hidden bg-[#1a1a1a]">
              <img
                src="/Default PFP.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-[#888888]" />
          </a>
        </div>
      </div>
    </header>
  )
}
