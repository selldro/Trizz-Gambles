import { SiteHeader } from "@/components/site-header"
import { MilestonesHero } from "@/components/milestones-hero"
import { MilestonesContent } from "@/components/milestones-content"
import { Footer } from "@/components/footer"

export default function MilestonesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-6">
        <MilestonesHero />
        <MilestonesContent />
      </div>
      
      <Footer />
    </main>
  )
}
