import ProductSection from './components/ProductSection'
import Footer from './components/Footer'

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getProducts() {
  // read target API URL / credentials from env so prod deployments (Netlify) can override defaults
  const apiUrl = process.env.REACT_APP_API_URL || 'https://fakestoreapi.com/products'
  const clientId = process.env.REACT_APP_CLIENT_ID

  const maxRetries = 3
  let lastError: Error | null = null

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000) // 8 second timeout

      try {
        const res = await fetch(apiUrl, {
          cache: 'no-store',
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0',
            ...(clientId ? { 'X-Client-Id': clientId } : {}),
          },
        })

        clearTimeout(timeoutId)

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        }

        const data = await res.json()
        
        if (Array.isArray(data) && data.length > 0) {
          return data
        }
        
        throw new Error('Invalid response: Empty or invalid data')
      } catch (fetchError: any) {
        clearTimeout(timeoutId)
        
        if (fetchError.name === 'AbortError') {
          lastError = new Error(`Request timeout (attempt ${attempt}/${maxRetries})`)
        } else {
          lastError = fetchError instanceof Error ? fetchError : new Error(String(fetchError))
        }
        
        // Wait before retry (exponential backoff)
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
        }
      }
    } catch (error: any) {
      lastError = error instanceof Error ? error : new Error(String(error))
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt))
      }
    }
  }

  // If all retries failed, log and return empty array
  console.error('Failed to fetch products after all retries:', lastError?.message || 'Unknown error')
  return []
}

export default async function HomePage() {
  const products = await getProducts()
  
  // Log for debugging in production
  if (products.length === 0) {
    console.warn('No products loaded - API may be unavailable')
  }

  return (
    <main>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <button className="hamburger-menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="circle-icon desktop-only">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
          <div className="header-center">
            <span className="logo-text">LOGO</span>
          </div>
          <div className="header-right">
            <div className="circle-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="circle-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="circle-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="circle-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="language-selector">
              <span>ENG</span>
              <div className="circle-icon small">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navigation-bar">
        <div className="nav-container">
          <div className="breadcrumbs mobile-only">
            <a href="#" className="breadcrumb-link">HOME</a>
            <span className="breadcrumb-separator"> | </span>
            <span className="breadcrumb-active">SHOP</span>
          </div>
          <div className="nav-links desktop-only">
            <a href="#" className="nav-link">SHOP</a>
            <a href="#" className="nav-link">SKILLS</a>
            <a href="#" className="nav-link">STORIES</a>
            <a href="#" className="nav-link">ABOUT</a>
            <a href="#" className="nav-link">CONTACT US</a>
          </div>
        </div>
      </nav>
      <section className="quote-section">
        <div className="quote-container">
          <h1 className="quote-title">DISCOVER OUR PRODUCTS</h1>
          <h2 className="quote-subtitle">Shop Our Collection</h2>
          <p className="quote-text">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </section>
      <ProductSection products={products} />
      <Footer />
    </main>
  )
}

