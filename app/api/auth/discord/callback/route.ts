import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get("code")

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 })
  }

  const clientId = process.env.DISCORD_CLIENT_ID
  const clientSecret = process.env.DISCORD_CLIENT_SECRET
  const redirectUri = process.env.DISCORD_REDIRECT_URI || `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/auth/discord/callback`

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: "Discord credentials not configured" }, { status: 500 })
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirectUri,
      }),
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.text()
      console.error("Discord token error:", errorData)
      return NextResponse.json({ error: "Failed to exchange code for token" }, { status: 500 })
    }

    const tokenData = await tokenResponse.json()

    // Get user info
    const userResponse = await fetch("https://discord.com/api/users/@me", {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    })

    if (!userResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 })
    }

    const userData = await userResponse.json()

    // Set session cookie
    const cookieStore = await cookies()
    cookieStore.set("discord_user", JSON.stringify({
      id: userData.id,
      username: userData.username,
      avatar: userData.avatar,
      email: userData.email,
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    // Redirect to dashboard or home
    return NextResponse.redirect(new URL("/dashboard", request.url))
  } catch (error) {
    console.error("Discord OAuth error:", error)
    return NextResponse.json({ error: "OAuth failed" }, { status: 500 })
  }
}
