'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

interface ProductSectionProps {
  products: Product[]
}

export default function ProductSection({ products }: ProductSectionProps) {
  const [showFilter, setShowFilter] = useState(true)
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const filterSections = [
    { title: 'CUSTOMIZABLE', options: ['All'] },
    { title: 'IDEAL FOR', options: ['All'] },
    { title: 'OCCASION', options: ['All'] },
    { title: 'WORK', options: ['All'] },
    { title: 'FABRIC', options: ['All'] },
    { title: 'SEGMENT', options: ['All'] },
    { title: 'SUITABLE FOR', options: ['All'] },
    { title: 'RAW MATERIALS', options: ['All'] },
    { title: 'PATTERN', options: ['All'] },
  ]

  return (
    <section className="product-section">
      <div className="filter-header">
        <div className="filter-header-left">
          <span className="item-count">{products.length} ITEMS</span>
          <button 
            className="toggle-filter-btn"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? '< HIDE FILTER' : '> SHOW FILTER'}
          </button>
        </div>
        <div className="filter-header-right">
          <select className="sort-dropdown">
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE : HIGH TO LOW</option>
            <option>PRICE : LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div className="product-content">
        <aside className={`filter-body ${showFilter ? 'show' : 'hide'}`}>
            <div className="filter-checkbox">
              <input type="checkbox" id="customizable" />
              <label htmlFor="customizable">CUSTOMIZABLE</label>
            </div>
            {filterSections.map((section, index) => (
              <div key={index} className="filter-section">
                <div className="filter-section-header">
                  <span>{section.title}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="filter-section-content">
                  {section.options.map((option, optIndex) => (
                    <div key={optIndex} className="filter-option">
                      <span>{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </aside>

        <div className={`product-list ${showFilter ? 'with-filter' : 'full-width'}`}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={300}
                  className="product-image"
                />
                <button
                  className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Add to wishlist"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      fill={wishlist.includes(product.id) ? "currentColor" : "none"}
                    />
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">Sign in or Create an account to see pricing</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

