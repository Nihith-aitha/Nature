import "./Review.css";
import { FaStar } from "react-icons/fa";

const reviews=[
  {
    id:1,
    image:"./review1.png",
    name:"Shelly Russel",
    review:"Just got my hands on some absolutely awesome plants, and I couldn't be happier!"
  },
  {
    id:2,
    image:"./review2.jpg",
    name:"Lula Rolfson",
    review:"Each one has its own unique charm and personality, making my space feel vibrant and fresh."
  },
   {
    id: 3,
    image: "./review3.png",
    name: "Carol Huels",
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment!"
  }
];

function CustomerReview(){
  return (
    <section className="customer-review">
      <h2 className="section-title">
      Customer Review
      </h2>
      <div className="review-grid">
        {reviews.map((item)=>(
          <div className="review-box" key={item.id}>
            <div className="review-header">
              <img 
               src={item.image}
               alt={item.image}
               />
               <div>
                <h3>{item.name}</h3>
                <div className="stars">
                  <FaStar className="star"/>
                  <FaStar className="star"/>
                  <FaStar className="star"/>
                  <FaStar className="star"/>
                  <FaStar className="star"/>
                  
                </div>
               </div>
            </div>
            <p>{item.review}</p>
            </div>
        ))}
      </div>
    </section>
  );
}
export default CustomerReview;