import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

type Wager = {
  rank: number
  username: string
  avatar: string
  wager: number
}

type CasesApiResponse = {
  error: boolean
  leaderboard?: {
    id: number
    name: string
    status: string
    config?: { value?: number }
    affiliate?: { id: number; code: string; username: string; avatar: string }
    leaderboardRewards?: {
      id: number
      createdAt: string
      leaderboardId: number
      percentage: number | null
      place: number
      winnings: number
    }[]
  }
  currentEntry?: {
    id: number
    start: string
    end: string
    status: string
    totalValue: number
  }
  wagers?: Wager[]
  totalParticipants?: number
}

export async function GET() {
  const apiKey = process.env.CASES_API_KEY
  console.log("CASES_API_KEY:", apiKey ? "exists" : "missing")
  console.log("All env vars:", Object.keys(process.env).filter(k => k.includes("CASES")))

  if (!apiKey) {
    return NextResponse.json(
      { error: true, message: "CASES_API_KEY not configured" },
      { status: 500 }
    )
  }

  try {
    const res = await fetch("https://api.b.site/leaderboard/connect-by-key", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": "b.site",
      },
      body: JSON.stringify({ apiKey }),
      cache: "no-store",
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.log("API Error Response:", res.status, errorText)
      return NextResponse.json(
        { error: true, message: `Upstream responded ${res.status}`, details: errorText },
        { status: res.status }
      )
    }

    const data: CasesApiResponse = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json(
      { error: true, message: err instanceof Error ? err.message : "Unknown error" },
      { status: 502 }
    )
  }
}
