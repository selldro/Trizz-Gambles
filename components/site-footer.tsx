import { Youtube, Twitter, Instagram } from "lucide-react"
import { TrizzLogo } from "./trizz-logo"

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-[#2a344a] bg-[#232b4a]">
      <div className="mx-auto max-w-[1360px] px-6 py-10 grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr_auto] gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center">
            <TrizzLogo className="h-8 w-8" />
          </div>
          <p className="mt-4 text-[12px] leading-relaxed text-[#888888] max-w-md">
            We do not take responsibility for any losses from gambling in rainbet and betting sites
            which are linked or promoted on our website(s). As a player, you are responsible for your bets.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-sm">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-[13px] text-[#888888]">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Leaderboard</a></li>
            <li><a href="#" className="hover:text-white">Raffles</a></li>
          </ul>
        </div>

        {/* Partners */}
        <div>
          <h4 className="text-white font-semibold text-sm">Partners</h4>
          <ul className="mt-3 space-y-2 text-[13px] text-[#888888]">
            <li><a href="#" className="hover:text-white">Shuffle</a></li>
            <li><a href="#" className="hover:text-white">Luck.io</a></li>
            <li><a href="#" className="hover:text-white">Chancer</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold text-sm">Socials</h4>
          <ul className="mt-3 space-y-2 text-[13px] text-[#888888]">
            <li className="flex items-center gap-2"><a href="https://youtube.com/@trizzgambles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Youtube className="w-4 h-4" /> YouTube</a></li>
            <li className="flex items-center gap-2"><a href="https://kick.com/trizzgamba" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><KickIcon /> Kick</a></li>
            <li className="flex items-center gap-2"><a href="https://x.com/trizzgambles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Twitter className="w-4 h-4" /> Twitter</a></li>
            <li className="flex items-center gap-2"><a href="https://instagram.com/trizzgambles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><Instagram className="w-4 h-4" /> Instagram</a></li>
            <li className="flex items-center gap-2"><DiscordIcon /> Discord</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="md:text-right md:self-end text-[12px] text-[#888888]">
          © 2024 Trizz. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function KickIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M3 3h4v6h2V6h2V3h4v3h2v3h2v6h-2v3h-2v3h-4v-3h-2v-3H7v6H3V3z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
      <path d="M20 4.5A18 18 0 0 0 15.5 3l-.2.4a16 16 0 0 0-6.6 0L8.5 3A18 18 0 0 0 4 4.5C1.6 8 .9 11.4 1.2 14.7c1.7 1.3 3.4 2 5.1 2.5l.4-.6c-.7-.2-1.3-.5-1.9-.9.2-.1.3-.2.5-.4 3.6 1.7 7.5 1.7 11.1 0 .2.1.3.3.5.4-.6.4-1.2.7-1.9.9l.4.6c1.7-.5 3.4-1.2 5.1-2.5.4-3.8-.7-7.2-3.5-10.2zM9 13.5c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2zm6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2z" />
    </svg>
  )
}
