import "./Navbar.css";
import { FiSearch } from "react-icons/fi"; // তোমার যদি react-icons ইন্সটল থাকে তবেই এটা কাজ করবে

function Navbar() {
    return (
        <nav className="navbar">
            {/* Left Section: Logo, Menu, Search */}
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

            {/* Right Section: Cart Icon */}
            <div className="nav-right">
                <div className="cart-icon-container">
                    {/* SVG Icon for Cart */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="cart-svg"
                    >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>

                    {/* Badge showing item count */}
                    <span className="cart-badge">2</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;