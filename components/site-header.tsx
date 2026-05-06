"use client"

import { useState } from "react"
import { Plus, Coins, Menu, X } from "lucide-react"
import { ZyynLogo } from "./zyyn-logo"
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkClass = (href: string) =>
    pathname === href ? "text-[#00ff87]" : "text-[#888888] hover:text-white transition-colors"

  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1360px] px-4 md:px-6 py-4 md:py-5 flex items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <ZyynLogo className="h-7 w-7 md:h-8 md:w-8" />
          <span className="text-lg md:text-xl font-extrabold tracking-wide text-white">ZYYN</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-[0.18em]">
          <a href="/home" className={linkClass('/home')}>HOME</a>
          <a href="/leaderboard" className={linkClass('/leaderboard')}>LEADERBOARD</a>
          <a href="/milestones" className={linkClass('/milestones')}>MILESTONES</a>
          <a href="/challenges" className={linkClass('/challenges')}>CHALLENGES</a>
          <a href="/store" className={linkClass('/store')}>STORE</a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Balance */}
          <div className="flex items-center gap-1 md:gap-2 rounded-md bg-[#112116] border border-[#1a2520] card-glow pl-2 md:pl-3 pr-1 py-1">
            <div className="flex items-center gap-1.5">
              <Coins className="w-4 h-4 text-[#00ff87]" fill="#00ff87" />
              <span className="text-sm font-semibold text-white">10</span>
            </div>
            <button
              aria-label="Add funds"
              className="grid place-items-center w-7 h-7 rounded-md btn-3d-green"
            >
              <Plus className="w-4 h-4 text-black" strokeWidth={3} />
            </button>
          </div>

          {/* Login - hidden on mobile */}
          <a href="/login" className="hidden md:inline-block px-4 py-2 rounded-md btn-3d-green text-[13px] font-bold tracking-[0.14em]">
            LOGIN
          </a>

          {/* Signup - hidden on mobile */}
          <a href="/signup" className="hidden md:inline-block px-4 py-2 rounded-md border border-[#00ff87] text-[#00ff87] text-[13px] font-bold tracking-[0.14em] hover:bg-[#00ff87]/10 transition-colors">
            SIGNUP
          </a>

          {/* Avatar - hidden on mobile */}
          <a href="/dashboard" className="hidden md:flex items-center rounded-md bg-[#112116] border border-[#1a2520] card-glow p-1">
            <span className="block w-7 h-7 rounded-md overflow-hidden bg-[#1a2520]">
              <img
                src="/Default PFP.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </span>
          </a>

          {/* Hamburger - mobile only */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden grid place-items-center w-9 h-9 rounded-md bg-[#112116] border border-[#1a2520] card-glow"
          >
            {open ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mx-auto max-w-[1360px] px-4 pb-4">
          <div className="rounded-xl bg-[#112116] border border-[#1a2520] card-glow p-3 flex flex-col">
            <nav className="flex flex-col text-[13px] font-bold tracking-[0.18em]">
              <a href="/home" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/home')}`}>HOME</a>
              <a href="/leaderboard" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/leaderboard')}`}>LEADERBOARD</a>
              <a href="/milestones" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/milestones')}`}>MILESTONES</a>
              <a href="/challenges" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/challenges')}`}>CHALLENGES</a>
              <a href="/store" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/store')}`}>STORE</a>
            </nav>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="/login" className="text-center px-4 py-2.5 rounded-md btn-3d-green text-black text-[13px] font-bold tracking-[0.14em]">LOGIN</a>
              <a href="/signup" className="text-center px-4 py-2.5 rounded-md border border-[#00ff87] text-[#00ff87] text-[13px] font-bold tracking-[0.14em]">SIGNUP</a>
              <a href="/dashboard" className="col-span-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#0d1611] border border-[#1a2520] text-white text-[13px] font-bold tracking-[0.14em]">
                <span className="block w-6 h-6 rounded-md overflow-hidden bg-[#1a2520]">
                  <img src="/Default PFP.jpg" alt="Profile" className="w-full h-full object-cover" />
                </span>
                DASHBOARD
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
