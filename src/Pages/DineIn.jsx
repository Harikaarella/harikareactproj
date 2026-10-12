
import { Link } from "react-router-dom";

export default function DineIn() {
  return (
    <div className="service-detail">
      <h2>🍽️ Dine-in Experience</h2>
      <p>Enjoy freshly prepared food in a warm and welcoming setting.</p>
      <Link to="/reservations" className="btn btn-primary">Reserve a Table</Link>
    </div>
  );
}
