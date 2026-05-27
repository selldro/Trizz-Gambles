import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

const API_KEY = 'f1d322e3533771298f860527a5911dfd8ab1961fcde8afe4ac9bc38cc7e71cc7'
const CODES = 'trizz'
const START_DATE = '2026-05-01'
const END_DATE = '2026-06-01'

function pickWager(item: any): number {
  return Number(
    item.wagered_amount ||
      item.wagered ||
      item.wager ||
      item.total_wager ||
      item.deposited ||
      item.deposit ||
      item.amount ||
      item.volume ||
      item.total ||
      item.sum ||
      0
  )
}

function pickUsername(item: any): string {
  return (
    item.username ||
    item.user ||
    item.name ||
    item.display_name ||
    item.nickname ||
    'Unknown'
  )
}

function pickAvatar(item: any): string | undefined {
  return item.avatar || item.profile_image || item.image || item.picture || undefined
}

function normalize(items: any[]) {
  return items.map((item) => ({
    username: pickUsername(item),
    wager: pickWager(item),
    avatar: pickAvatar(item),
  }))
}

export async function GET() {
  const url = new URL('https://api.luxdrop.com/external/affiliates')
  url.searchParams.append('codes', CODES)
  url.searchParams.append('startDate', START_DATE)
  url.searchParams.append('endDate', END_DATE)

  console.log('[luxdrop] Fetching:', url.toString())

  try {
    const response = await fetch(url.toString(), {
      cache: 'no-store',
      headers: {
        'x-api-key': API_KEY,
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
    })

    const text = await response.text()
    console.log('[luxdrop] Status:', response.status)
    console.log('[luxdrop] Body:', text.slice(0, 1000))

    if (!response.ok) {
      return NextResponse.json(
        { error: true, message: `API error: ${response.status}`, details: text.slice(0, 500) },
        { status: response.status }
      )
    }

    let data: any
    try {
      data = JSON.parse(text)
    } catch {
      return NextResponse.json(
        { error: true, message: 'Invalid JSON response', details: text.slice(0, 500) },
        { status: 500 }
      )
    }

    // Try to find the array of users in the response across common shapes
    let users: any[] = []

    if (Array.isArray(data)) {
      // Could be an array of code-buckets, each with users, or a flat list
      if (data.length > 0 && Array.isArray(data[0]?.users)) {
        users = data.flatMap((d: any) => d.users || [])
      } else if (data.length > 0 && Array.isArray(data[0]?.affiliates)) {
        users = data.flatMap((d: any) => d.affiliates || [])
      } else {
        users = data
      }
    } else if (data && typeof data === 'object') {
      if (Array.isArray(data.users)) users = data.users
      else if (Array.isArray(data.affiliates)) users = data.affiliates
      else if (Array.isArray(data.data)) users = data.data
      else if (Array.isArray(data.results)) users = data.results
      else {
        // If the response is keyed by code: { trizz: { users: [...] } } or { trizz: [...] }
        const values = Object.values(data)
        for (const v of values) {
          if (Array.isArray(v)) {
            users = users.concat(v)
          } else if (v && typeof v === 'object') {
            const vv = v as any
            if (Array.isArray(vv.users)) users = users.concat(vv.users)
            else if (Array.isArray(vv.affiliates)) users = users.concat(vv.affiliates)
          }
        }
      }
    }

    const transformed = normalize(users)
    return NextResponse.json({ data: transformed })
  } catch (error) {
    console.error('[luxdrop] Error:', error)
    return NextResponse.json(
      { error: true, message: error instanceof Error ? error.message : 'Failed to fetch data' },
      { status: 500 }
    )
  }
}
