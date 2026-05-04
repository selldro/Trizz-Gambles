import type { Metadata } from 'next'
import { Geist, Geist_Mono, Chakra_Petch } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const chakra = Chakra_Petch({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'Zyyn — Leaderboard',
  description: 'Wager, climb, win. The more you wager, the higher you rank.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} ${chakra.variable} font-sans antialiased text-foreground min-h-screen`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,38,25,0.65), rgba(15,38,25,0.65)), url('/background.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
