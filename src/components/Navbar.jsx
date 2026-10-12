
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import {
  UtensilsCrossed,
  ShoppingBag,
  Menu as MenuIcon,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/menu", label: "Menu" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/reservations", label: "Reservations" },
    { to: "/contact", label: "Contact" },
    { to: "/admin", label: "Admin" },
  ];

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-icon"><UtensilsCrossed /></span>
        <span>
          <strong>TasteBite</strong>
          <small>GOOD FOOD, GREAT MOOD</small>
        </span>
      </Link>

      <button
        className="mobile-toggle"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <MenuIcon />}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <Link to="/orders" className="cart-link" aria-label="Shopping cart">
        <ShoppingBag size={20} />
        <span>Cart</span>
        <b>{count}</b>
      </Link>
    </header>
  );
}
