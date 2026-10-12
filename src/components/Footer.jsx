
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-icon">🍴</span>
            <strong>TasteBite</strong>
          </Link>

          <p>
            Fresh ingredients. Authentic flavors. Unforgettable moments.
          </p>

          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <Link to="/menu">Our Menu</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/services">Services</Link>
          <Link to="/reservations">Reservations</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>📍 Your City, India</p>
          <p>📞 +91 98765 43538</p>
          <p>Open daily: 11 AM – 11 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TasteBite. Crafted with passion.
      </div>
    </footer>
  );
}
