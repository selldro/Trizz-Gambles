import type { Metadata } from 'next'
import { Geist, Geist_Mono, Chakra_Petch } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const chakra = Chakra_Petch({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: 'Trizz Gambles',
  description: 'Wager, climb, win. The more you wager, the higher you rank.',
  icons: {
    icon: '/TG PFP.png',
  },
  openGraph: {
    title: 'Trizz Gambles',
    description: 'Wager, climb, win. The more you wager, the higher you rank.',
    siteName: 'Trizz Gambles',
    images: [{ url: '/TG PFP.png', width: 512, height: 512 }],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className="bg-[#0f1329]"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <body
        className={`${geist.variable} ${geistMono.variable} ${chakra.variable} font-sans antialiased bg-transparent text-foreground min-h-screen`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
