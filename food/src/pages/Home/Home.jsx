import Navbar from "../../components/Layout/Navbar/Navbar.jsx";
import Leftbar from "../../components/Layout/LeftBar/LeftBar.jsx"
import ProductCard from "../../components/Product/ProductCard.jsx"
import Footer from "../../components/Layout/Footer/Footer.jsx"
function Home() {
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
                    <ProductCard/>
                </div>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    </>)
}
export default Home