import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  const clientId = process.env.DISCORD_CLIENT_ID
  const redirectUri = process.env.DISCORD_REDIRECT_URI || `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/auth/discord/callback`

  if (!clientId) {
    return NextResponse.json({ error: "DISCORD_CLIENT_ID not configured" }, { status: 500 })
  }

  const scope = "identify email"
  const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}`

  return NextResponse.redirect(discordAuthUrl)
}
