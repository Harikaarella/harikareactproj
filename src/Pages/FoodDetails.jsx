
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const foods = [
  { id: 1, name: "Chicken Biryani", category: "Main Course", price: 299, rating: 4.9, image: "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=800", description: "Aromatic basmati rice cooked with tender chicken and authentic spices." },
  { id: 2, name: "Paneer Tikka", category: "Starters", price: 249, rating: 4.8, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800", description: "Smoky paneer cubes marinated in delicious Indian spices." },
  { id: 3, name: "Margherita Pizza", category: "Pizza", price: 279, rating: 4.7, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800", description: "Classic pizza with tomato, mozzarella and fresh basil." },
];

export default function FoodDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const food = foods.find((item) => item.id === Number(id));

  if (!food) {
    return (
      <section className="section page-section">
        <h1>Food item not found</h1>
        <Link to="/menu" className="btn btn-primary">Back to Menu</Link>
      </section>
    );
  }

  return (
    <section className="section details-layout">
      <img src={food.image} alt={food.name} />
      <div>
        <span className="eyebrow">{food.category}</span>
        <h1 className="page-title">{food.name}</h1>
        <p>⭐ {food.rating} · Customer favorite</p>
        <p>{food.description}</p>
        <div className="detail-price">₹{food.price}</div>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(food))}
        >
          Add to Cart
        </button>
        <p><Link to="/menu" className="text-link">← Back to Menu</Link></p>
      </div>
    </section>
  );
}
