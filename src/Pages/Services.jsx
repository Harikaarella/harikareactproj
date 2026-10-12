
import { Link, Outlet } from "react-router-dom";
import { Utensils, ShoppingBag, Truck } from "lucide-react";

export default function Services() {
  const services = [
    { path: "dine-in", title: "Dine-in", icon: <Utensils />, text: "Enjoy a comfortable restaurant dining experience." },
    { path: "takeaway", title: "Takeaway", icon: <ShoppingBag />, text: "Order ahead and collect your favorite dishes." },
    { path: "delivery", title: "Delivery", icon: <Truck />, text: "Enjoy your meal from the comfort of home." },
  ];

  return (
    <section className="section page-section">
      <span className="eyebrow">YOUR WAY, YOUR EXPERIENCE</span>
      <h1 className="page-title">Our services<span>.</span></h1>

      <div className="service-grid">
        {services.map((service) => (
          <Link to={service.path} className="service-card" key={service.path}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <span className="text-link">Learn more →</span>
          </Link>
        ))}
      </div>

      <div className="nested-outlet"><Outlet /></div>
    </section>
  );
}
