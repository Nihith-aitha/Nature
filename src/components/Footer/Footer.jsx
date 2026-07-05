import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">


        <div className="footer-col">
        <img src ="./logo.png" alt="logo" className="footer-logo-image"/>
          <h2 className="footer-logo">
            Flora Vision
          </h2>

          <p>
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="#">Home</a></li>

            <li><a href="#">Plants</a></li>

            <li><a href="#">Reviews</a></li>

            <li><a href="#">Contact</a></li>

          </ul>

        </div>


        <div className="footer-col">

          <h3>For Every Update</h3>

          <p>
            Subscribe to receive updates and offers.
          </p>

          <form className="newsletter">

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button type="submit">
              Subscribe
            </button>

          </form>

        </div>

      </div>

      <hr />

      <p className="copyright">
        FloraVision © all right reserve
      </p>

    </footer>
  );
}

export default Footer;