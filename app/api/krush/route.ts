import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const API_KEY = 'e8deec54806cb178bd87108786c82d5413aad31f0b6dbd8a6c35ced62ce790d8'
// June 17, 2026 00:00:00 UTC in Unix timestamp
const START_TIMESTAMP = Math.floor(new Date('2026-06-17T00:00:00Z').getTime() / 1000).toString()

export async function GET() {
  const url = new URL('https://api.krush.gg/api/affiliate/wager-leader')
  url.searchParams.append('startTimestamp', START_TIMESTAMP)

  console.log('[krush] Fetching:', url.toString())

  try {
    const response = await fetch(url.toString(), {
      cache: 'no-store',
      headers: {
        'X-API-Key': API_KEY,
        Accept: 'application/json',
      },
    })

    const text = await response.text()
    console.log('[krush] Status:', response.status)
    console.log('[krush] Body:', text.slice(0, 1000))

    if (!response.ok) {
      return NextResponse.json(
        { error: true, message: `API error: ${response.status}`, details: text.slice(0, 500) },
        { status: response.status }
      )
    }

    let json: any
    try {
      json = JSON.parse(text)
    } catch {
      return NextResponse.json(
        { error: true, message: 'Invalid JSON response', details: text.slice(0, 500) },
        { status: 500 }
      )
    }

    // Krush returns { code, data: [{ username, avatarUrl, wagered }], msg }
    if (json.code !== 200 || !Array.isArray(json.data)) {
      return NextResponse.json(
        { error: true, message: json.msg || 'Unexpected response format', details: text.slice(0, 500) },
        { status: 500 }
      )
    }

    // Transform to our standard format: { username, wager, avatar }
    const transformed = json.data.map((item: any) => ({
      username: item.username,
      wager: Number(item.wagered) || 0,
      avatar: item.avatarUrl || undefined,
    }))

    return NextResponse.json({ data: transformed })
  } catch (error) {
    console.error('[krush] Error:', error)
    return NextResponse.json(
      { error: true, message: error instanceof Error ? error.message : 'Failed to fetch data' },
      { status: 500 }
    )
  }
}
