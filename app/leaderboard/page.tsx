import { SiteHeader } from "@/components/site-header"
import { LeaderboardHero } from "@/components/leaderboard-hero"
import { LeaderboardView } from "@/components/leaderboard-view"
import { Footer } from "@/components/footer"

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-[#0d1611] text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        <LeaderboardHero />
        <LeaderboardView />
      </div>

      <Footer />
    </main>
  )
}
