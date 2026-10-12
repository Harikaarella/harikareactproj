
import { Link } from "react-router-dom";

export default function Delivery() {
  return (
    <div className="service-detail">
      <h2>🛵 Home Delivery</h2>
      <p>Explore delicious meals and prepare an order for home delivery.</p>
      <Link to="/menu" className="btn btn-primary">Explore Dishes</Link>
    </div>
  );
}
