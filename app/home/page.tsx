import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/home-hero"
import { HomeHowItWorks } from "@/components/home-how-it-works"
import { HomeFaq } from "@/components/home-faq"
import { HomeCta } from "@/components/home-cta"

export default function HomePage() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        <HomeHero />
        <div className="mt-5">
          <HomeHowItWorks />
        </div>
        <div className="mt-5">
          <HomeFaq />
        </div>
        <div className="mt-5">
          <HomeCta />
        </div>
      </div>

      <Footer />
    </main>
  )
}
