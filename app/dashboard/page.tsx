import { SiteHeader } from "@/components/site-header"
import { DashboardProfile } from "@/components/dashboard-profile"
import { DashboardConnections } from "@/components/dashboard-connections"
import { DashboardHistory } from "@/components/dashboard-history"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-6">
        <DashboardProfile />
        <DashboardConnections />
        <DashboardHistory />
      </div>

      <Footer />
    </main>
  )
}
