import { SiteHeader } from "@/components/site-header"
import { AdminUsers } from "@/components/admin-users"
import { AdminChallenges } from "@/components/admin-challenges"
import { Footer } from "@/components/footer"

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-6">
        {/* Admin Hero */}
        <section className="rounded-xl bg-[#0f0f0f] border border-[#1a1a1a] p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-none italic font-[family-name:var(--font-heading)]">
            ADMIN DASHBOARD
          </h1>
          <p className="mt-2 text-[12px] font-bold tracking-[0.16em] text-[#888888]">
            MANAGE USERS, CHALLENGES, AND SITE SETTINGS
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="rounded-md bg-[#0a0a0a] border border-[#1a1a1a] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">TOTAL USERS</div>
              <div className="text-2xl font-extrabold text-[#00ff87]">6</div>
            </div>
            <div className="rounded-md bg-[#0a0a0a] border border-[#1a1a1a] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">ACTIVE CHALLENGES</div>
              <div className="text-2xl font-extrabold text-[#00ff87]">4</div>
            </div>
            <div className="rounded-md bg-[#0a0a0a] border border-[#1a1a1a] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">TOTAL WAGERED</div>
              <div className="text-2xl font-extrabold text-white">$34,000</div>
            </div>
            <div className="rounded-md bg-[#0a0a0a] border border-[#1a1a1a] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">PRIZES GIVEN</div>
              <div className="text-2xl font-extrabold text-white">$2,400</div>
            </div>
          </div>
        </section>

        {/* Users */}
        <div className="mt-5">
          <AdminUsers />
        </div>

        {/* Challenges */}
        <AdminChallenges />
      </div>

      <Footer />
    </main>
  )
}
