import { SiteHeader } from "@/components/site-header"
import { LeaderboardHero } from "@/components/leaderboard-hero"
import { Podium } from "@/components/podium"
import { LeaderboardTable } from "@/components/leaderboard-table"
import { LeaderboardSidebar } from "@/components/leaderboard-sidebar"
import { Footer } from "@/components/footer"

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-6">
        <LeaderboardHero />
        <Podium />

        <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
          <LeaderboardTable />
          <LeaderboardSidebar />
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
