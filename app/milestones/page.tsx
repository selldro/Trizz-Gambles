import { SiteHeader } from "@/components/site-header"
import { MilestonesHero } from "@/components/milestones-hero"
import { MilestonesContent } from "@/components/milestones-content"
import { Footer } from "@/components/footer"

export default function MilestonesPage() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        <MilestonesHero />
        <MilestonesContent />
      </div>
      
      <Footer />
    </main>
  )
}
