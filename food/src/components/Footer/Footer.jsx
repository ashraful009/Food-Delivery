import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* 1. Brand & Social Section */}
        <div className="footer-section brand-section">
          <h2 className="footer-logo">Frosty<span className="highlight">Food</span></h2>
          <p className="footer-desc">
            Fresh ingredients, tasty meals, and super fast delivery. 
            The best food partner for your hunger cravings.
          </p>
          <div className="social-icons">
            <span className="icon">FB</span>
            <span className="icon">IG</span>
            <span className="icon">TW</span>
            <span className="icon">YT</span>
          </div>
        </div>

        {/* 2. Quick Links */}
        <div className="footer-section links-section">
          <h3 className="section-title">Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">My Orders</a></li>
          </ul>
        </div>

        {/* 3. Help & Support */}
        <div className="footer-section help-section">
          <h3 className="section-title">Support</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* 4. Contact & Newsletter */}
        <div className="footer-section contact-section">
          <h3 className="section-title">Contact Us</h3>
          <p>📍 123, Mirpur Road, Dhaka, Bangladesh</p>
          <p>📞 +880 1712 345 678</p>
          <p>✉️ support@frostyfood.com</p>
          
          <div className="newsletter">
            <input type="email" placeholder="Your email..." />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FrostyFood. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;