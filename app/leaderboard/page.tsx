import { SiteHeader } from "@/components/site-header"
import { LeaderboardView } from "@/components/leaderboard-view"
import { Footer } from "@/components/footer"

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        <LeaderboardView />
      </div>

      <Footer />
    </main>
  )
}
