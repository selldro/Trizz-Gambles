import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import { TrizzLogo } from "@/components/trizz-logo"

export default function SignupPage() {
  return (
    <main className="min-h-screen flex flex-col text-white">
      <SiteHeader />

      <div className="flex-1 mx-auto max-w-[1360px] w-full px-6 py-12 flex items-center justify-center">
        <section className="w-full max-w-[440px] rounded-xl bg-[#1a1f3a] border border-[#2a344a] card-glow p-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <TrizzLogo className="h-12 w-12 mb-4" />
            <h1 className="text-3xl font-black tracking-tight italic">CREATE ACCOUNT</h1>
            <p className="mt-2 text-sm text-[#888888]">
              Join{" "}
              <span className="text-[#0969b7] font-bold">TRIZZ</span>{" "}
              and start earning rewards
            </p>
          </div>

          {/* Coming Soon Banner */}
          <div className="mb-6 flex items-center gap-3 rounded-md bg-[#0969b7]/10 border border-[#0969b7]/30 px-4 py-3">
            <span className="text-[#0969b7] text-lg">🔒</span>
            <div>
              <p className="text-[12px] font-bold tracking-[0.12em] text-[#0969b7]">COMING SOON</p>
              <p className="text-[11px] text-[#888888] mt-0.5">Signup will be available soon.</p>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="space-y-3">
            {/* Discord */}
            <button disabled className="w-full flex items-center justify-center gap-3 py-3 rounded-md bg-[#5865F2] opacity-50 cursor-not-allowed text-white text-[14px] font-bold tracking-[0.14em]">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              COMING SOON
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="flex-1 h-px bg-[#1a1f3a]" />
            <span className="text-[10px] font-bold tracking-[0.18em] text-[#555555]">OR</span>
            <div className="flex-1 h-px bg-[#1a1f3a]" />
          </div>

          {/* Login link */}
          <p className="text-center text-sm text-[#888888]">
            Already have an account?{" "}
            <a href="/login" className="text-[#0969b7] font-bold hover:underline">
              Log in
            </a>
          </p>

          {/* Terms */}
          <p className="mt-6 text-center text-[11px] text-[#555555] leading-relaxed">
            By continuing, you agree to our{" "}
            <a href="#" className="text-[#888888] hover:text-white">Terms of Service</a>{" "}
            and{" "}
            <a href="#" className="text-[#888888] hover:text-white">Privacy Policy</a>.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
