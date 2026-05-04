import { Crown, Youtube, Twitter, Instagram } from "lucide-react"
import { ZyynLogo } from "@/components/zyyn-logo"
import { FAQAccordion } from "@/components/faq-accordion"

const faqs = [
  {
    question: "How do I join leaderboard?",
    answer: "Simply use code TRIZZ on our partner sites and stay active to earn points and climb the rankings."
  },
  {
    question: "When are prizes paid out?",
    answer: "Prizes are paid out weekly every Monday. Make sure your Discord is linked to receive notifications."
  },
  {
    question: "How do Discord giveaways work?",
    answer: "Join our Discord server and participate in exclusive giveaways. Winners are announced live and prizes are distributed automatically."
  },
  {
    question: "What are VIP rewards?",
    answer: "VIP rewards are exclusive bonuses for our most active members. These include higher rakeback, exclusive tournaments, and personalized support."
  },
  {
    question: "How can I contact support?",
    answer: "You can contact our support team through Discord or by opening a ticket on our website. We typically respond within 24 hours."
  }
]

const socialPlatforms = [
  { name: "YOUTUBE", icon: Youtube, color: "bg-red-600" },
  { name: "KICK", icon: Youtube, color: "bg-green-600" }, // Using Youtube as placeholder
  { name: "TWITTER", icon: Twitter, color: "bg-blue-500" },
  { name: "INSTAGRAM", icon: Instagram, color: "bg-pink-600" },
  { name: "DISCORD", icon: Crown, color: "bg-indigo-600" } // Using Crown as placeholder
]

export default function HomePage() {

  return (
    <main className="min-h-screen bg-[#0b0817] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="mx-auto max-w-[1360px] text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <ZyynLogo className="h-12 w-12" />
              <span className="text-4xl font-extrabold tracking-wide text-white">TRIZZ X</span>
            </div>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-8 max-w-3xl mx-auto">
            USE CODE TRIZZ ON OUR PARTNER SITES AND STAY ACTIVE TO RECEIVE VIP REWARDS
          </h1>
          
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 rounded-md btn-3d-green border border-[#00ff87] hover:opacity-90 transition-opacity text-black text-[13px] font-bold tracking-[0.14em]">
              GET STARTED
            </button>
            <button className="px-8 py-3 rounded-md btn-3d-green border border-[#00ff87] hover:opacity-90 transition-opacity text-black text-[12px] font-bold tracking-[0.18em]">
              LEADERBOARD
            </button>
          </div>
        </div>
      </section>

      {/* Leaderboard & Discord Section */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leaderboard Card */}
            <div className="rounded-xl bg-[#112116] border border-[#1a2520] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-8 h-8 text-[#fbbf24]" />
                <h2 className="text-2xl font-bold">LEADERBOARD</h2>
              </div>
              <p className="text-[#888888] mb-6">
                Compete with other players and climb the rankings to win exclusive prizes
              </p>
              <button className="px-6 py-2 rounded-md btn-3d-green border border-[#00ff87] hover:opacity-90 transition-opacity text-black text-[13px] font-bold tracking-[0.14em]">
                VIEW
              </button>
            </div>

            {/* Discord Card */}
            <div className="rounded-xl bg-[#112116] border border-[#1a2520] p-6">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-8 h-8 text-[#00ff87]" />
                <h2 className="text-2xl font-bold">DISCORD</h2>
              </div>
              <p className="text-[#888888] mb-6">
                Join our Discord for exclusive giveaways and prizes
              </p>
              <button className="px-6 py-2 rounded-md btn-3d-green border border-[#00ff87] hover:opacity-90 transition-opacity text-black text-[13px] font-bold tracking-[0.14em]">
                JOIN COMMUNITY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-[1360px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialPlatforms.map((platform, index) => (
              <div key={index} className="rounded-xl bg-[#112116] border border-[#1a2520] p-4 text-center">
                <platform.icon className="w-12 h-12 mx-auto mb-3 text-white" />
                <h3 className="font-bold mb-1">TRIZZGAMBLES</h3>
                <p className="text-[#888888] text-sm mb-3">{platform.name}</p>
                <button className={`w-full px-4 py-2 rounded-md ${platform.color} hover:opacity-90 transition-opacity text-white text-sm font-bold`}>
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-[1360px]">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </main>
  )
}
