import { SiteHeader } from "@/components/site-header"
import { StoreHero } from "@/components/store-hero"
import { StoreContent } from "@/components/store-content"
import { Footer } from "@/components/footer"

export default function StorePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-6">
        <StoreHero />
        <StoreContent />
      </div>

      <Footer />
    </main>
  )
}
