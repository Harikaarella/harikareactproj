
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFetchData from "../Hooks/useFetchData";

export default function Admin() {
  const cart = useSelector((state) => state.cart.items);
  const [tab, setTab] = useState("Overview");
  const { data, loading, error } = useFetchData("https://dummyjson.com/recipes?limit=6");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="section page-section">
      <span className="eyebrow">RESTAURANT CONTROL CENTER</span>
      <h1 className="page-title">Admin Dashboard<span>.</span></h1>

      <div className="admin-tabs">
        {["Overview", "Menu", "Orders", "API Demo"].map((item) => (
          <button key={item} className={tab === item ? "category active" : "category"} onClick={() => setTab(item)}>
            {item}
          </button>
        ))}
      </div>

      {tab === "Overview" && (
        <div className="dashboard-stats">
          <div className="stat-card"><span>Cart items</span><strong>{count}</strong></div>
          <div className="stat-card"><span>Cart value</span><strong>₹{total}</strong></div>
          <div className="stat-card"><span>Menu dishes</span><strong>9</strong></div>
          <div className="stat-card"><span>Guest rating</span><strong>4.9/5</strong></div>
        </div>
      )}

      {tab === "Menu" && (
        <div className="admin-panel">
          <h2>Manage Menu</h2>
          <p>Explore the menu and open individual dishes.</p>
          <Link to="/menu" className="btn btn-primary">Open Menu</Link>
        </div>
      )}

      {tab === "Orders" && (
        <div className="admin-panel">
          <h2>Current Cart</h2>
          {cart.length ? cart.map((item) => (
            <div className="admin-row" key={item.id}>
              <span>{item.name}<small>Quantity: {item.quantity}</small></span>
              <strong>₹{item.price * item.quantity}</strong>
            </div>
          )) : <p>No items in the cart yet.</p>}
        </div>
      )}

      {tab === "API Demo" && (
        <div className="admin-panel">
          <h2>External Recipe API</h2>
          {loading && <p>Loading recipes...</p>}
          {error && <p className="error-message">{error}</p>}
          {data.map((recipe) => (
            <div className="admin-row" key={recipe.id}>
              <span>{recipe.name}<small>{recipe.cuisine}</small></span>
              <strong>★ {recipe.rating}</strong>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
