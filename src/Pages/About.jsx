
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="section page-section">
      <span className="eyebrow">OUR STORY</span>
      <h1 className="page-title">Food brings us <span>together.</span></h1>

      <div className="about-layout">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900"
          alt="TasteBite restaurant interior"
        />
        <div>
          <h2>Passion on every plate</h2>
          <p>
            TasteBite was created around one simple idea: every meal
            should feel special. We combine fresh ingredients,
            thoughtful cooking and warm hospitality.
          </p>
          <p>
            Whether you join us for lunch, dinner or a celebration,
            our goal is to make every visit memorable.
          </p>
          <div className="value-list">
            <span>✓ Fresh ingredients</span>
            <span>✓ Expert preparation</span>
            <span>✓ Friendly service</span>
          </div>
          <Link to="/menu" className="btn btn-primary">Explore Our Menu →</Link>
        </div>
      </div>
    </section>
  );
}
