export const dynamic = 'force-dynamic'

const FALLBACK_IMAGE = 'https://placehold.co/600x600?text=Product'

export async function GET() {
  try {
    const res = await fetch('https://dummyjson.com/products', {
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
    const products = Array.isArray(data?.products) ? data.products : []

    if (products.length === 0) {
      return Response.json({ error: 'Invalid response from DummyJSON API' }, { status: 502 })
    }

    const normalized = products.map((product: any) => ({
      id: product.id,
      title: product.title,
      price: product.price ?? 0,
      description: product.description ?? '',
      category: product.category ?? 'unknown',
      image:
        (Array.isArray(product.images) && product.images[0]) ||
        product.thumbnail ||
        FALLBACK_IMAGE,
      rating: {
        rate: typeof product.rating === 'number' ? product.rating : 0,
        count: typeof product.stock === 'number' ? product.stock : 0,
      },
    }))

    return Response.json(normalized)
  } catch (error) {
    console.error('Products proxy failed:', error)
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}

