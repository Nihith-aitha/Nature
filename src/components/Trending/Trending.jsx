import "./Trending.css";
import {FaShoppingBag} from "react-icons/fa";

function Trending(){
  return(
    <section className="trending">
      <h2 className="trending-title">
        Our Trendy Plants
      </h2>

      <div className="trend-card">
        <div className="trend-image">
          <img src="./trendy1.png" alt="plant"/>
        </div>
        <div className="trend-content">
          <h3>For Your Desks Decorations</h3>
          <p>I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!</p>
          <h2>Rs. 599</h2>
          <div className="trend-buttons">
            <button className="explore-btn">
              Explore
            </button>
            <button className="cart-btn">
              <FaShoppingBag/>
            </button>
          </div>
        </div>
      </div>
      <div className="trend-card reverse">
        <div className="trend-content">
          <h3>For Your Desks Decoration</h3>
          <p>The greenery adds a touch of nature and serenity to my desk,making it feel more inviting and calming</p>
          <h2>Rs. 399</h2>
          <div className="trend-buttons">
            <button className="explore-btn">
              Explore
            </button>
            <button className="cart-btn">
              <FaShoppingBag/>
            </button>
          </div>
        </div>
        <div className="trend-image">
          <img src="./trendy2.png" alt="plant"/>
        </div>
      </div>
    </section>
  );
}
export default Trending;