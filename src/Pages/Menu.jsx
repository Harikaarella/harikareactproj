
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import FoodCard from "../components/FoodCard";

const foods = [
  { id: 1, name: "Chicken Biryani", category: "Main Course", price: 299, rating: 4.9, image: "https://images.unsplash.com/photo-1563379091339-03246963d96a?w=700", description: "Aromatic basmati rice with tender chicken." },
  { id: 2, name: "Paneer Tikka", category: "Starters", price: 249, rating: 4.8, image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700", description: "Smoky paneer with Indian spices." },
  { id: 3, name: "Margherita Pizza", category: "Pizza", price: 279, rating: 4.7, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=700", description: "Classic cheese and basil pizza." },
  { id: 4, name: "Classic Burger", category: "Burgers", price: 229, rating: 4.6, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700", description: "Juicy burger with fresh vegetables." },
  { id: 5, name: "Chocolate Lava Cake", category: "Desserts", price: 179, rating: 4.9, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700", description: "Warm chocolate cake with a molten centre." },
  { id: 6, name: "Mushroom Soup", category: "Starters", price: 159, rating: 4.5, image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=700", description: "Creamy mushroom soup with herbs." },
  { id: 7, name: "Grilled Chicken", category: "Main Course", price: 349, rating: 4.8, image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=700", description: "Grilled chicken with fresh herbs." },
];

const categories = ["All", "Starters", "Main Course", "Pizza", "Burgers", "Desserts"];

export default function Menu() {
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const category = params.get("category") || "All";

  const filteredFoods = useMemo(
    () =>
      foods.filter((food) => {
        const matchesName = food.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || food.category === category;
        return matchesName && matchesCategory;
      }),
    [search, category]
  );

  function updateParam(key, value) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next);
  }

  return (
    <section className="section page-section">
      <span className="eyebrow">FRESH FROM OUR KITCHEN</span>
      <h1 className="page-title">Explore our menu<span>.</span></h1>
      <p className="page-description">Find your next favorite dish.</p>

      <label className="search-box">
        🔍
        <input
          value={search}
          onChange={(e) => updateParam("search", e.target.value)}
          placeholder="Search dishes..."
        />
      </label>

      <div className="category-list">
        {categories.map((item) => (
          <button
            key={item}
            className={category === item ? "category active" : "category"}
            onClick={() => updateParam("category", item === "All" ? "" : item)}
          >
            {item}
          </button>
        ))}
      </div>

      {filteredFoods.length ? (
        <div className="food-grid">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No dishes found</h2>
          <button className="btn btn-primary" onClick={() => setParams({})}>
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
