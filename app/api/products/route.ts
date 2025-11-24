export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'User-Agent': 'Mozilla/5.0',
      },
    })

    if (!res.ok) {
      return Response.json(
        { error: `Upstream error ${res.status}: ${res.statusText}` },
        { status: res.status },
      )
    }

    const data = await res.json()

    if (!Array.isArray(data) || data.length === 0) {
      return Response.json({ error: 'Invalid response from Fakestore API' }, { status: 502 })
    }

    return Response.json(data)
  } catch (error) {
    console.error('Products proxy failed:', error)
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}


