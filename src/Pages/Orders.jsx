
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Orders() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [placed, setPlaced] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!items.length) {
    return (
      <section className="section page-section empty-state">
        <h1>{placed ? "Thank you!" : "Your cart is empty"}</h1>
        <p>{placed ? "Your demo order has been placed." : "Add some delicious dishes to begin."}</p>
        <Link to="/menu" className="btn btn-primary">Explore Menu</Link>
      </section>
    );
  }

  return (
    <section className="section page-section">
      <h1 className="page-title">Your cart<span>.</span></h1>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <strong>₹{item.price}</strong>
                <div className="quantity">
                  <button onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
              </div>
              <button className="icon-button" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <aside className="order-summary">
          <h2>Order Summary</h2>
          <div><span>Subtotal</span><strong>₹{subtotal}</strong></div>
          <div><span>Delivery</span><strong>₹40</strong></div>
          <div className="summary-total"><span>Total</span><strong>₹{subtotal + 40}</strong></div>
          <button className="btn btn-primary full-width" onClick={() => { dispatch(clearCart()); setPlaced(true); }}>
            Place Demo Order
          </button>
          <p className="muted">Demo checkout only. No payment is processed.</p>
        </aside>
      </div>
    </section>
  );
}
