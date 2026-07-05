import "./Navbar.css";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";

function Navbar(){
  return(
    <header className="navbar">
      <div className="logo">
        <img src="./logo.png" alt="logo"/>
          <span class="name">Flora Vision</span>
      </div>
      
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Plants Type</a></li>
          <li><a href="#">More</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="nav-icons">
        <FaSearch />
        <FaShoppingCart />
        <FaUser />
      </div>
    </header>

  );

}
export default Navbar;