import React from "react";
import "./ProductInfo.css"
function ProductInfo() {
    return (<>
        <div className="container">
            <div className="headerInfo"> 
                <span className="breadcrumb">Catalog &gt; Preparered meal &gt; Second courses</span>
                <span className="itemId">Item: 65248</span>
            </div>
            {/* Product Title */}
            <h1 className="tittle">
                Wok ramen with chicken in soy and garlic sauce
            </h1>
            {/* Review */}
            <div className="ratingRow"> 
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <span className="review-text">25 review</span>
            </div>

            {/*Price and action row*/}
            <div className="price-action-row">
                <div className="price-action">
                    <div className="price"> 50   &#2547;</div>
                </div>
                <div className="actions">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="love-icon">&#10084;</button>
                    <button className="share-icon">share</button>
                </div>
            </div>
        {/* Stock and Delivery Info */}
        <div className="Stock-Delivery-row">
            <div className="stock-row">
                <span className="stock">In Stock</span>
                    <span>in 28 shops</span>
                    <a href="">Show on map</a>
            </div>
            <div className="devider"></div>
            <div className="delivery-row">
                <span className="delivery">Delivery:</span>
                <span>free fron 200 &#2547;</span>
                <a href="">Learn more</a>
            </div>
        </div>
        {/* Description Section Card */}
        <div className="description-card">
            <h3 className="descripTittle">Description</h3>
                <p className="descripText">
                    Golden noodles stir-fried in a spicy soy-garlic sauce and reddish
                    chicken pieces are the stars of this dish. Add a few bright touches
                    of hot pepper rings or green onion springs to the dish and enjoy a
                    hearty, delicious lunch (or dinner).
                </p>
        </div>
</div>
    </>);
}
export default ProductInfo