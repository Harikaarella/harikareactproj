
import { useState } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
  }

  return (
    <section className="section page-section">
      <span className="eyebrow">WE'D LOVE TO HEAR FROM YOU</span>
      <h1 className="page-title">Let's talk<span>.</span></h1>

      <div className="contact-layout">
        <div>
          <h2>Come say hello.</h2>
          <p>Questions about the menu or an upcoming visit? Contact our team.</p>
          <p><MapPin /> Your City, India</p>
          <p><Phone /> +91 98765 43210</p>
          <p><Clock /> Daily, 11 AM – 11 PM</p>
        </div>

        <form className="form-card" onSubmit={handleSubmit}>
          <h2>Send a message</h2>
          {submitted && <div className="success-message">Your demo message has been submitted.</div>}

          <label>Your Name<input required minLength={2} placeholder="Full name" /></label>
          <label>Email Address<input required type="email" placeholder="you@example.com" /></label>
          <label>Message<textarea required minLength={10} rows={5} placeholder="How can we help?" /></label>

          <button className="btn btn-primary full-width">Send Message</button>
          <p className="muted">Demo form only. No message is sent to a server.</p>
        </form>
      </div>
    </section>
  );
}
