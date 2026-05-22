<<<<<<< HEAD
import { redirect } from "next/navigation"

export default function HomePage() {
  redirect("/leaderboard")
=======
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { HomeHero } from "@/components/home-hero"
import { HomeHowItWorks } from "@/components/home-how-it-works"
import { HomePointsSystem } from "@/components/home-points-system"
import { HomeFaq } from "@/components/home-faq"
import { HomeCta } from "@/components/home-cta"

export default function HomePage() {
  const comingSoon = true

  if (comingSoon) {
    return (
      <main className="min-h-screen text-white">
        <SiteHeader />
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-white leading-none italic mb-4">
            COMING SOON
          </h1>
          <p className="text-xl text-[#888888]">Something exciting is on the way</p>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        <HomeHero />
        <div className="mt-5">
          <HomePointsSystem />
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
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
}
