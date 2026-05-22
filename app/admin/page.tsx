import { SiteHeader } from "@/components/site-header"
import { AdminUsers } from "@/components/admin-users"
import { AdminChallenges } from "@/components/admin-challenges"
import { Footer } from "@/components/footer"

export default function AdminPage() {
  return (
    <main className="min-h-screen text-white">
      <SiteHeader />

      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        {/* Admin Hero */}
<<<<<<< HEAD
        <section className="rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-5 md:p-10">
=======
        <section className="rounded-xl bg-[#120b26] border border-[#1a1033] p-5 md:p-10">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-none italic font-[family-name:var(--font-heading)]">
            ADMIN DASHBOARD
          </h1>
          <p className="mt-2 text-[12px] font-bold tracking-[0.16em] text-[#888888]">
            MANAGE USERS, CHALLENGES, AND SITE SETTINGS
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
<<<<<<< HEAD
            <div className="rounded-md bg-[#232b4a] border border-[#2a344a] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">TOTAL USERS</div>
              <div className="text-2xl font-extrabold text-[#0969b7]">6</div>
            </div>
            <div className="rounded-md bg-[#232b4a] border border-[#2a344a] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">ACTIVE CHALLENGES</div>
              <div className="text-2xl font-extrabold text-[#0969b7]">4</div>
            </div>
            <div className="rounded-md bg-[#232b4a] border border-[#2a344a] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">TOTAL WAGERED</div>
              <div className="text-2xl font-extrabold text-white">$34,000</div>
            </div>
            <div className="rounded-md bg-[#232b4a] border border-[#2a344a] py-3 px-4 text-center">
=======
            <div className="rounded-md bg-[#06030f] border border-[#1a1033] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">TOTAL USERS</div>
              <div className="text-2xl font-extrabold text-[#8b3dff]">6</div>
            </div>
            <div className="rounded-md bg-[#06030f] border border-[#1a1033] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">ACTIVE CHALLENGES</div>
              <div className="text-2xl font-extrabold text-[#8b3dff]">4</div>
            </div>
            <div className="rounded-md bg-[#06030f] border border-[#1a1033] py-3 px-4 text-center">
              <div className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">TOTAL WAGERED</div>
              <div className="text-2xl font-extrabold text-white">$34,000</div>
            </div>
            <div className="rounded-md bg-[#06030f] border border-[#1a1033] py-3 px-4 text-center">
>>>>>>> 0ab98f1026ba421f87062ada3c6c0abbd3abafff
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
