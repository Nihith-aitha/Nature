import "./TopSelling.css";
import { FaShoppingBag } from "react-icons/fa";

const plants = [
  {
    id: 1,
    name: "Aglaonema Plant",
    price: "Rs. 300/-",
    image: "./1.png",
    description: "The Aglaonema plant, commonly known as Chinese Evergreen."
  },
  {
    id: 2,
    name: "Plantain Lilies",
    price: "Rs. 380/-",
    image: "./2.png",
    description: "Hostas are primarily grown for their lush decorative leaves."
  },
  {
    id: 3,
    name: "Cactus",
    price: "Rs. 259/-",
    image: "./3.png",
    description: "Known for thriving in dry climates and requiring little water."
  },
  {
    id: 4,
    name: "Swiss Cheese Plant",
    price: "Rs. 400/-",
    image: "./4.png",
    description: "A striking indoor plant with naturally split leaves."
  },
  {
    id: 5,
    name: "Sansevieria Plant",
    price: "Rs. 450/-",
    image: "./5.png",
    description: "An easy-care indoor plant with upright green leaves."
  },
  {
    id: 6,
    name: "Agave Plant",
    price: "Rs. 359/-",
    image: "./6.png",
    description: "A succulent known for its thick pointed leaves."
  }
];

function TopSelling() {

  return (

    <section className="top-selling">

      <h2 className="section-title">
        Our Top Selling Plants
      </h2>

      <div className="products-grid">

        {plants.map((plant) => (

          <div className="product-card" key={plant.id}>

            <img
              src={plant.image}
              alt={plant.name}
            />

            <h3>{plant.name}</h3>

            <p>{plant.description}</p>

            <div className="product-footer">

              <span>{plant.price}</span>

              <button>

                <FaShoppingBag />

              </button>

            </div>

          </div>

        ))}

      </div>
    </section>

  );

}

export default TopSelling;