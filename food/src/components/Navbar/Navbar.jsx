import "./Navbar.css";
import { FiSearch } from "react-icons/fi";

function Navbar() {
    return (
        <nav className="navbar">

        <div className="nav-left">
            <h1 className="logo">
                <span className="blue">FROSTY</span>
                <span className="green">FOOD</span>
            </h1>

            <ul className="menu">
                <li>Catalogue</li>
                <li>Weekly Menu</li>
                <li>Recipes</li>
                <li>Shops</li>
                <li>Food bonuses</li>
            </ul>
                
          <div className="search-box">
                <FiSearch className="search-icon" />
                <input 
                    type="text" 
                    placeholder="Search your favourite food" 
                />
            </div>
        </div>

        <div className="nav-right">

                <div className="cart">
                <span className="cart-logo">cart</span>
            </div>

        </div>
    </nav>
);

}

export default Navbar;
