import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET(request: Request) {
  const apiKey = process.env.BETSTRIKE_API_KEY

  if (!apiKey) {
    return NextResponse.json(
      { error: true, message: "BETSTRIKE_API_KEY not configured" },
      { status: 500 }
    )
  }

  const { searchParams } = new URL(request.url)
  const period = searchParams.get("period") || "monthly" // weekly, monthly

  try {
    // Calculate date range based on period
    const to = new Date().toISOString().split('T')[0]
    let from: string

    if (period === "weekly") {
      from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    } else {
      from = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }

    const res = await fetch("https://api.betstrike.com/affiliate/creator/get-stats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `ApiKey ${apiKey}`,
      },
      body: JSON.stringify({ from, to }),
      cache: "no-store",
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.log("Betstrike API Error:", res.status, errorText)
      return NextResponse.json(
        { error: true, message: `Upstream responded ${res.status}`, details: errorText },
        { status: res.status }
      )
    }

    const data = await res.json()
    console.log("Betstrike API Response:", JSON.stringify(data, null, 2))
    return NextResponse.json(data)
  } catch (err) {
    console.error("Betstrike API Error:", err)
    return NextResponse.json(
      { error: true, message: err instanceof Error ? err.message : "Unknown error" },
      { status: 502 }
    )
  }
}
