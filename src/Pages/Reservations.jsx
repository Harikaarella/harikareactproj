
import { useReducer, useRef, useState } from "react";

function reservationReducer(state, action) {
  if (action.type === "ADD") return [...state, action.payload];
  if (action.type === "DELETE") return state.filter((item) => item.id !== action.id);
  return state;
}

export default function Reservations() {
  const formRef = useRef(null);
  const [reservations, dispatch] = useReducer(reservationReducer, []);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "19:00",
    guests: "2",
  });

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD",
      payload: { ...form, id: Date.now() },
    });

    setMessage(`Reservation request received for ${form.name}.`);
    setForm({ name: "", email: "", phone: "", date: "", time: "19:00", guests: "2" });
    formRef.current?.focus();
  }

  return (
    <section className="section page-section">
      <span className="eyebrow">YOUR TABLE IS WAITING</span>
      <h1 className="page-title">Make a reservation<span>.</span></h1>

      <div className="reservation-layout">
        <form className="form-card" onSubmit={handleSubmit}>
          {message && <div className="success-message">{message}</div>}

          <label>Full Name
            <input ref={formRef} required minLength={2} value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </label>

          <label>Email
            <input type="email" required value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </label>

          <label>Phone Number
            <input required pattern="[0-9+() -]{7,18}" value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </label>

          <label>Reservation Date
            <input type="date" required min={new Date().toLocaleDateString("en-CA")} value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })} />
          </label>

          <label>Time
            <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
              {["11:00", "12:00", "13:00", "14:00", "18:00", "19:00", "20:00", "21:00"].map((time) => (
                <option key={time}>{time}</option>
              ))}
            </select>
          </label>

          <label>Number of Guests
            <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n}>{n}</option>)}
            </select>
          </label>

          <button className="btn btn-primary full-width">Confirm Reservation</button>
        </form>

        <div className="reservation-aside">
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" alt="Restaurant interior" />
          <h3>A table for good times.</h3>
          <p>Daily: 11 AM – 11 PM</p>
        </div>
      </div>

      {reservations.length > 0 && (
        <div className="section-sub">
          <h2>Reservation Requests</h2>
          {reservations.map((item) => (
            <div className="reservation-row" key={item.id}>
              <span><strong>{item.name}</strong><small>{item.date} · {item.time} · {item.guests} guests</small></span>
              <button className="icon-button" onClick={() => dispatch({ type: "DELETE", id: item.id })}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
