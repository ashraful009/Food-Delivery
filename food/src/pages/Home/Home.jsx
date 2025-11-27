import { useContext } from "react";
import { FoodContext } from "../../Context/FoodContext.jsx";

import Navbar from "../../components/Layout/Navbar/Navbar.jsx";
import Leftbar from "../../components/Layout/LeftBar/LeftBar.jsx"
import ProductCard from "../../components/Product/ProductCard.jsx"
import Footer from "../../components/Layout/Footer/Footer.jsx"
import "./Home.css"
function Home() {
    const {foods} = useContext(FoodContext)
    return (<>
        <div className="home-page">
            <div className="nav-bar">
                <Navbar/>
            </div>
            <div className="middle-section">
                <div className="left-side-bar">
                    <Leftbar/>
                </div>
                <div className="product-catalog">
                    {foods.map((item) => (
                        <ProductCard
                        key = { item.id }
                        data = { item }
                        />
                    ))}
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    </>)
}
export default Home