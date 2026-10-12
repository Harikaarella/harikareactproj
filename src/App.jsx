
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import FoodDetails from "./Pages/FoodDetails";
import About from "./Pages/About";
import Services from "./Pages/Services";
import DineIn from "./Pages/DineIn";
import Takeaway from "./Pages/Takeway";
import Delivery from "./Pages/Delivery";
import Orders from "./Pages/Orders";
import Reservations from "./Pages/Reservations";
import Contact from "./Pages/contact";
import Admin from "./Pages/Admin";

function NotFound() {
  return (
    <section className="section empty-state">
      <h1>404</h1>
      <h2>Page not found</h2>
      <a href="/" className="btn btn-primary">Back Home</a>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "TasteBite | Good Food, Great Mood";
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/food/:id" element={<FoodDetails />} />
          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />}>
            <Route index element={<p className="nested-hint">Choose one of our services above.</p>} />
            <Route path="dine-in" element={<DineIn />} />
            <Route path="takeaway" element={<Takeaway />} />
            <Route path="delivery" element={<Delivery />} />
          </Route>

          <Route path="/orders" element={<Orders />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
