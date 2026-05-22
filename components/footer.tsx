import { TrizzLogo } from "./trizz-logo"

export function Footer() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 md:px-6">
      <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-5 mt-5 mb-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center">
            <TrizzLogo className="h-8 w-8" />
          </div>
          
          {/* Social Icons - Far Right */}
          <div className="flex items-center gap-4">
            {/* X Icon */}
            <a href="https://x.com/trizzgambles" target="_blank" rel="noopener noreferrer" className="grid place-items-center w-8 h-8 rounded-md bg-[#1a1f3a] border border-[#2a344a] hover:bg-[#1a1f3a] transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0969b7">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Kick Icon */}
            <a href="https://kick.com/trizzgamba" target="_blank" rel="noopener noreferrer" className="grid place-items-center w-8 h-8 rounded-md bg-[#1a1f3a] border border-[#2a344a] hover:bg-[#1a1f3a] transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0969b7">
                <path d="M2.86957 1.5h6.84782v4.56522H12V3.78261h2.2826V1.5h6.8478v6.84783h-2.2826v2.28257h-2.2826v2.7392h2.2826v2.2826h2.2826V22.5h-6.8478v-2.2826H12v-2.2826H9.71739V22.5H2.86957v-21Z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
