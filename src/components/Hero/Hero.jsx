import "./Hero.css";
import {FaPlay} from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {FaShoppingBag} from "react-icons/fa";
function Hero(){
  return(
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-left">
          <h1 className="hero-title">Earth's Exhale</h1>
          <p className="hero-description">
        "Earth's Exhale" symbolizes the purity and vitality
        of the Earth's natural environment and its essential
        role in sustaining life.
    </p>
      <div className="hero-buttons">
        <div className="buy-btn">Buy Now</div>
        <button className="demo-btn">
          <span className="play-icon">
    <FaPlay />
</span>
            Live Demo
        </button>
      </div>
      <div className="review-card">

    <img
        src="./girlimage.png"
        alt="User"
        className="review-img"
    />

    <div className="review-content">

        <h4>Ronnie Hamill</h4>
        <div className="review-stars">
            <FaStar className="star"/>
            <FaStar className="star"/>
            <FaStar className="star"/>
            <FaStar className="star"/>

        </div>
        <p>
            I was so thrilled I am with my new natural plants!
            They bring such a fresh and vibrant energy to my home.
        </p>
    </div>
</div>
        </div>

        <div className="hero-right">
          <div className="plant-card">
            <img src="./Rightlogo.png" alt="plant" className="plant-image"/>
            <div className="plant-content">
              <p className="plant-type">Indoor Plant</p>
              <h3 className="plant-name">Aglaonema Plant</h3>
              <button className="plant-btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;