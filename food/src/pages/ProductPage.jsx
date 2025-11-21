import react from "react";
import ProductImage from "../components/FoodDescription/ProductImage";
import ProductInfo from "../components/FoodDescription/ProductInfo";
import "./ProductPage.css";

function ProductPage() {
    return (<>
        <div className="product-info">
            <div className="left-side"><ProductImage /></div>
            <div className="right-side"><ProductInfo/></div>
        </div>
    </>);
}
export default ProductPage