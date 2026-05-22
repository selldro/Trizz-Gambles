import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const apiKey = 'uU42Vpuv8XRtMk5dxVSPRaxpHIIENCyo'
  const startDate = '2026-05-01'
  const endDate = '2026-06-01'
  
  const url = new URL('https://services.rainbet.com/v1/external/affiliates')
  url.searchParams.append('start_at', startDate)
  url.searchParams.append('end_at', endDate)
  url.searchParams.append('key', apiKey)

  console.log('Fetching from URL:', url.toString())

  try {
    const response = await fetch(url.toString(), {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    })

    console.log('Response status:', response.status)
    console.log('Response headers:', Object.fromEntries(response.headers.entries()))

    const text = await response.text()
    console.log('Response body:', text)

    if (!response.ok) {
      console.error('API returned error status:', response.status, 'body:', text)
      return NextResponse.json(
        { error: true, message: `API error: ${response.status}`, details: text },
        { status: response.status }
      )
    }

    let data
    try {
      data = JSON.parse(text)
    } catch (e) {
      console.error('Failed to parse JSON response:', text)
      return NextResponse.json(
        { error: true, message: 'Invalid JSON response', details: text },
        { status: 500 }
      )
    }

    console.log('Parsed data type:', typeof data)
    console.log('Is array?', Array.isArray(data))
    console.log('Keys:', Object.keys(data))
    
    // Log first item if array to see structure
    if (Array.isArray(data) && data.length > 0) {
      console.log('First item keys:', Object.keys(data[0]))
      console.log('First item:', data[0])
    } else if (data.data && Array.isArray(data.data) && data.data.length > 0) {
      console.log('First item in data.data keys:', Object.keys(data.data[0]))
      console.log('First item in data.data:', data.data[0])
    }
    
    // Transform API data to our expected format
    if (Array.isArray(data)) {
      const transformed = data.map((item: any) => {
        console.log('Processing item:', item)
        const wager = Number(
          item.wager || 
          item.total_wager || 
          item.wagered || 
          item.volume || 
          item.amount || 
          item.bets || 
          item.total_bets ||
          item.sum || 
          item.total ||
          0
        )
        console.log('Wager value for', item.username || item.name, ':', wager)
        return {
          username: item.username || item.name || item.user || item.display_name || 'Unknown',
          wager: wager,
          avatar: item.avatar || item.profile_image || item.image || undefined,
        }
      })
      console.log('Transformed array data:', transformed)
      return NextResponse.json({ data: transformed })
    } else if (data.data && Array.isArray(data.data)) {
      const transformed = data.data.map((item: any) => {
        console.log('Processing item in data.data:', item)
        const wager = Number(
          item.wager || 
          item.total_wager || 
          item.wagered || 
          item.volume || 
          item.amount || 
          item.bets || 
          item.total_bets ||
          item.sum || 
          item.total ||
          0
        )
        console.log('Wager value for', item.username || item.name, ':', wager)
        return {
          username: item.username || item.name || item.user || item.display_name || 'Unknown',
          wager: wager,
          avatar: item.avatar || item.profile_image || item.image || undefined,
        }
      })
      console.log('Transformed data.data:', transformed)
      return NextResponse.json({ data: transformed })
    } else if (data.affiliates && Array.isArray(data.affiliates)) {
      const transformed = data.affiliates.map((item: any) => {
        console.log('Processing affiliate item:', item)
        const wager = Number(
          item.wagered_amount ||
          item.wager || 
          item.total_wager || 
          item.wagered || 
          item.volume || 
          item.amount || 
          item.bets || 
          item.total_bets ||
          item.sum || 
          item.total ||
          0
        )
        console.log('Wager value for', item.username || item.name, ':', wager)
        return {
          username: item.username || item.name || item.user || item.display_name || 'Unknown',
          wager: wager,
          avatar: item.avatar || item.profile_image || item.image || undefined,
        }
      })
      console.log('Transformed affiliates:', transformed)
      return NextResponse.json({ data: transformed })
    } else if (data.results && Array.isArray(data.results)) {
      const transformed = data.results.map((item: any) => {
        console.log('Processing result item:', item)
        const wager = Number(
          item.wager || 
          item.total_wager || 
          item.wagered || 
          item.volume || 
          item.amount || 
          item.bets || 
          item.total_bets ||
          item.sum || 
          item.total ||
          0
        )
        console.log('Wager value for', item.username || item.name, ':', wager)
        return {
          username: item.username || item.name || item.user || item.display_name || 'Unknown',
          wager: wager,
          avatar: item.avatar || item.profile_image || item.image || undefined,
        }
      })
      console.log('Transformed results:', transformed)
      return NextResponse.json({ data: transformed })
    } else {
      console.log('Unknown data format. Data:', data)
      return NextResponse.json(
        { error: true, message: 'Unknown data format from API', details: JSON.stringify(data) },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Error fetching affiliates data:', error)
    return NextResponse.json(
      { error: true, message: error instanceof Error ? error.message : 'Failed to fetch data' },
      { status: 500 }
    )
  }
}
