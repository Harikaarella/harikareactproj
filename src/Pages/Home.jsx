
import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const foods = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Main Course",
    price: 299,
    rating: 4.9,
    image: "https://in.images.search.yahoo.com/yhs/search;_ylt=A2RTI4v9hsxq_AIA.wMO9olQ;_ylu=Y29sbwNhcC1zb3V0aGVhc3QtMQRwb3MDOQR2dGlkAwRzZWMDc3I-?hspart=sz&hsimp=yhs-002&type=type80160-1876236194&param1=1640736483&fr=yhs-sz-002&p=chicken+biryani&imgurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Ftraditional-chicken-biryani-aromatic-indian-cuisine-food_1124848-123286.jpg%3Fw%3D2000",
    description: "Aromatic basmati rice with tender chicken and spices.",
  },
  {
    id: 2,
    name: "Paneer Tikka",
    category: "Starters",
    price: 249,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700",
    description: "Smoky paneer with authentic Indian spices.",
  },
  {
    id: 3,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 279,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700",
    description: "Classic pizza topped with mozzarella and basil.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO TASTEBITE</span>
          <h1>
            Good food.<br />
            <span>Great mood.</span>
          </h1>
          <p>
            Fresh ingredients, authentic flavors and unforgettable
            moments. Your table is waiting.
          </p>

          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary">
              Explore Menu →
            </Link>
            <Link to="/reservations" className="btn btn-outline">
              Book a Table
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={foods[0].image}
            alt="Signature chicken biryani"
          />
          <div className="hero-image-label">
            <span>CHEF'S SPECIAL</span>
            <strong>Chicken Biryani</strong>
            <b>₹299</b>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div><strong>4.9/5</strong><span>Guest rating</span></div>
        <div><strong>25+</strong><span>Signature dishes</span></div>
        <div><strong>10k+</strong><span>Happy customers</span></div>
        <div><strong>7 days</strong><span>Open every week</span></div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">OUR FAVORITES</span>
            <h2>Popular dishes</h2>
            <p>Discover delicious food made fresh every day.</p>
          </div>
          <Link to="/menu" className="text-link">View full menu →</Link>
        </div>

        <div className="food-grid">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </section>

      <section className="experience">
        <div>
          <span className="eyebrow">MORE THAN A MEAL</span>
          <h2>Made for moments worth sharing.</h2>
          <p>
            From quick lunches to special celebrations, enjoy
            memorable food and warm hospitality.
          </p>
          <Link to="/services" className="btn btn-primary">
            Discover Our Services →
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900"
          alt="Elegant restaurant dining area"
        />
      </section>
    </>
  );
}
