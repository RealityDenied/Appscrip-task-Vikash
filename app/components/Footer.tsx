'use client'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
          <p className="footer-description">Sign up for updates from mettā muse.</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your e-mail..." 
              className="newsletter-input"
            />
            <button className="newsletter-button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-contact">
            <h3 className="footer-heading">CONTACT US</h3>
            <p className="footer-text">+44 221 133 5360</p>
            <p className="footer-text">customercare@mettamuse.com</p>
          </div>
          <div className="footer-currency">
            <h3 className="footer-heading">CURRENCY</h3>
            <div className="currency-selector">
              <span>🇺🇸 • USD</span>
            </div>
            <p className="footer-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-middle">
        <div className="footer-column">
          <h3 className="footer-brand">mettā muse</h3>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stories</a></li>
            <li><a href="#">Artisans</a></li>
            <li><a href="#">Boutiques</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">EU Compliances Docs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">QUICK LINKS</h3>
          <ul className="footer-links">
            <li><a href="#">Orders & Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment & Pricing</a></li>
            <li><a href="#">Return & Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </a>
          </div>
          <h3 className="footer-heading footer-heading-margin">mettā muse ACCEPTS</h3>
          <div className="payment-methods">
            <div className="payment-icon">GP</div>
            <div className="payment-icon">MC</div>
            <div className="payment-icon">PP</div>
            <div className="payment-icon">AE</div>
            <div className="payment-icon">AP</div>
            <div className="payment-icon">SP</div>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="copyright">Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  )
}

