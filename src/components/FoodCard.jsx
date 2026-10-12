
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Plus, Star } from "lucide-react";

export default function FoodCard({ food }) {
  const dispatch = useDispatch();

  return (
    <article className="food-card">
      <div className="food-image">
        <img src={food.image} alt={food.name} loading="lazy" />
        <span className="food-category">{food.category}</span>
      </div>

      <div className="food-info">
        <div className="food-heading">
          <h3>{food.name}</h3>
          <span className="rating">
            <Star size={14} fill="currentColor" />
            {food.rating}
          </span>
        </div>

        <p>{food.description}</p>

        <div className="food-bottom">
          <strong>₹{food.price}</strong>
          <button
            className="add-button"
            aria-label={`Add ${food.name} to cart`}
            onClick={() => dispatch(addToCart(food))}
          >
            <Plus size={18} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
