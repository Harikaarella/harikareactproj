
import { Link } from "react-router-dom";

export default function Takeaway() {
  return (
    <div className="service-detail">
      <h2>🥡 Takeaway Service</h2>
      <p>Choose your favorite dishes and arrange convenient collection.</p>
      <Link to="/menu" className="btn btn-primary">Order Takeaway</Link>
    </div>
  );
}
