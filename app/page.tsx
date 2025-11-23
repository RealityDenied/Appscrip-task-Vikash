export default function HomePage() {
  return (
    <main>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <div className="circle-icon">
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
          <a href="#" className="nav-link">SHOP</a>
          <a href="#" className="nav-link">SKILLS</a>
          <a href="#" className="nav-link">STORIES</a>
          <a href="#" className="nav-link">ABOUT</a>
          <a href="#" className="nav-link">CONTACT US</a>
        </div>
      </nav>
      <section className="quote-section">
        <div className="quote-container">
          <h1 className="quote-title">DISCOVER OUR PRODUCTS</h1>
          <p className="quote-text">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>
      </section>
    </main>
  )
}

