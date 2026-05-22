"use client"

import { useState } from "react"
import { Plus, Coins, Menu, X } from "lucide-react"
import { TrizzLogo } from "./trizz-logo"
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkClass = (href: string) =>
<<<<<<< HEAD
    pathname === href ? "text-[#0969b7]" : "text-[#888888] hover:text-white transition-colors"

  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-5 mt-5 mb-5">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <TrizzLogo className="h-8 w-8 md:h-10 md:w-10" />
            </div>

            {/* Desktop Nav - truly centred */}
            <nav className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-[0.18em]">
              <a href="/leaderboard" className={linkClass('/leaderboard')}>LEADERBOARD</a>
              <a href="/milestones" className={linkClass('/milestones')}>MILESTONES</a>
              <a href="/store" className={linkClass('/store')}>STORE</a>
            </nav>
            <div className="lg:hidden" />

            {/* Right */}
            <div className="flex items-center justify-end gap-2 md:gap-3">
              {/* Balance */}
              <div className="flex items-center gap-1 md:gap-2 rounded-md bg-[#232b4a] border border-[#2a344a] pl-2 md:pl-3 pr-1 py-1">
                <div className="flex items-center gap-1.5">
                  <Coins className="w-4 h-4 text-[#0969b7]" fill="#0969b7" />
                  <span className="text-sm font-semibold text-white">0</span>
                </div>
                <a
                  href="/login"
                  aria-label="Add funds"
                  className="grid place-items-center w-7 h-7 rounded-md btn-3d-blue"
                >
                  <Plus className="w-4 h-4 text-black" strokeWidth={3} />
                </a>
              </div>

              {/* Login - hidden on mobile */}
              <a href="/login" className="hidden md:inline-block px-4 py-2 rounded-md btn-3d-blue text-[13px] font-bold tracking-[0.14em]">
                LOGIN
              </a>

              {/* Signup - hidden on mobile */}
              <a href="/signup" className="hidden md:inline-block px-4 py-2 rounded-md border border-[#0969b7] text-[#0969b7] text-[13px] font-bold tracking-[0.14em] hover:bg-[#0969b7]/10 transition-colors">
                SIGNUP
              </a>

              {/* Hamburger - mobile only */}
              <button
                onClick={() => setOpen((o) => !o)}
                aria-label="Toggle menu"
                className="lg:hidden grid place-items-center w-9 h-9 rounded-md bg-[#232b4a] border border-[#2a344a]"
              >
                {open ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="lg:hidden mt-3 pt-3 border-t border-[#2a344a]">
              <nav className="flex flex-col text-[13px] font-bold tracking-[0.18em]">
                <a href="/leaderboard" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/leaderboard')}`}>LEADERBOARD</a>
                <a href="/milestones" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/milestones')}`}>MILESTONES</a>
                <a href="/store" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/store')}`}>STORE</a>
              </nav>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a href="/login" className="text-center px-4 py-2.5 rounded-md btn-3d-blue text-black text-[13px] font-bold tracking-[0.14em]">LOGIN</a>
                <a href="/signup" className="text-center px-4 py-2.5 rounded-md border border-[#0969b7] text-[#0969b7] text-[13px] font-bold tracking-[0.14em]">SIGNUP</a>
                <a href="/dashboard" className="col-span-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#232b4a] border border-[#2a344a] text-white text-[13px] font-bold tracking-[0.14em]">
                  DASHBOARD
                </a>
              </div>
            </div>
          )}
        </section>
      </div>
    </header>
=======
    pathname === href ? "text-[#8b3dff]" : "text-[#888888] hover:text-white transition-colors"

  return (
    <div className="mx-auto max-w-[1360px] px-4 md:px-6 py-4 md:py-5">
      <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-4 md:p-5">
        <header className="flex items-center justify-between gap-3">
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
            <div className="flex items-center gap-1 md:gap-2 rounded-md bg-[#06030f] border border-[#1a1033] pl-2 md:pl-3 pr-1 py-1">
              <div className="flex items-center gap-1.5">
                <Coins className="w-4 h-4 text-[#8b3dff]" fill="#8b3dff" />
                <span className="text-sm font-semibold text-white">0</span>
              </div>
              <a
                href="/login"
                aria-label="Add funds"
                className="grid place-items-center w-7 h-7 rounded-md btn-3d-green"
              >
                <Plus className="w-4 h-4 text-black" strokeWidth={3} />
              </a>
            </div>

            {/* Login - hidden on mobile */}
            <a href="/login" className="hidden md:inline-block px-4 py-2 rounded-md btn-3d-green text-[13px] font-bold tracking-[0.14em]">
              LOGIN
            </a>

            {/* Signup - hidden on mobile */}
            <a href="/signup" className="hidden md:inline-block px-4 py-2 rounded-md border border-[#8b3dff] text-[#8b3dff] text-[13px] font-bold tracking-[0.14em] hover:bg-[#8b3dff]/10 transition-colors">
              SIGNUP
            </a>

            {/* Hamburger - mobile only */}
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              className="lg:hidden grid place-items-center w-9 h-9 rounded-md bg-[#120b26] border border-[#1a1033]"
            >
              {open ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-4 flex flex-col">
            <nav className="flex flex-col text-[13px] font-bold tracking-[0.18em]">
              <a href="/home" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/home')}`}>HOME</a>
              <a href="/leaderboard" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/leaderboard')}`}>LEADERBOARD</a>
              <a href="/milestones" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/milestones')}`}>MILESTONES</a>
              <a href="/challenges" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/challenges')}`}>CHALLENGES</a>
              <a href="/store" onClick={() => setOpen(false)} className={`px-3 py-3 rounded-md ${linkClass('/store')}`}>STORE</a>
            </nav>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="/login" className="text-center px-4 py-2.5 rounded-md btn-3d-green text-black text-[13px] font-bold tracking-[0.14em]">LOGIN</a>
              <a href="/signup" className="text-center px-4 py-2.5 rounded-md border border-[#8b3dff] text-[#8b3dff] text-[13px] font-bold tracking-[0.14em]">SIGNUP</a>
            </div>
          </div>
        )}
      </section>
    </div>
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
  )
}
