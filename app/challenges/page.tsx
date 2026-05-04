import { SiteHeader } from "@/components/site-header"
import { ChallengesHero } from "@/components/challenges-hero"
import { ChallengesContent } from "@/components/challenges-content"
import { Footer } from "@/components/footer"

export default function ChallengesPage() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        <ChallengesHero />
        <ChallengesContent />
      </div>

      <Footer />
    </main>
  )
}
