import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../Context/FoodContext.jsx";
import "./ProductPage.css";
import image from "../assets/chicken.webp"; 

function ProductPage() {
    const [liked, setLiked] = useState(false);
    const { id } = useParams(); // URL থেকে আইডি পেলাম (যেমন: 1, 2)
    const { foods } = useContext(FoodContext); // সব খাবার আনলাম
    // ৩. আইডি মিলিয়ে স্পেসিফিক খাবার খুঁজছি
  // URL এর id স্ট্রিং থাকে, তাই parseInt দিয়ে নাম্বারে কনভার্ট করলাম
    const product = foods.find((item) => item.id === parseInt(id));

  // যদি প্রোডাক্ট না পাওয়া যায় (ভুল আইডি)
    if (!product) {
        return <div style={{textAlign:"center", marginTop:"50px"}}>Product not found! 😢</div>;
    }
  return (
    <div className="product-details-container">
      
      {/* --- LEFT SIDE: Sticky Image & Nutrition --- */}
      <div className="details-left">
        <div className="sticky-wrapper">
            <div className="image-wrapper">
            <img src={product.image} alt={product.name} className="main-image" />
            <span className="badge-on-image">On Sale</span>
            </div>

            {/* Nutritional Info Grid */}
            <div className="nutritional-grid">
            <div className="nutri-item main-cal">
                <span className="n-value">1,237</span>
                <span className="n-unit">kcal</span>
            </div>
            
            <div className="nutri-item">
                <span className="n-label">Fats</span>
                <span className="n-value">13.6g</span>
                <span className="n-badge low">10%</span>
            </div>
            
            <div className="nutri-item">
                <span className="n-label">Proteins</span>
                <span className="n-value">9.2g</span>
                <span className="n-badge medium">5%</span>
            </div>
            
            <div className="nutri-item">
                <span className="n-label">Carbs</span>
                <span className="n-value">19.5g</span>
                <span className="n-badge low">32%</span>
            </div>

            <div className="nutri-item">
                <span className="n-label">Salt</span>
                <span className="n-value">0.15g</span>
                <span className="n-badge low">0.3%</span>
            </div>
            </div>
        </div>
      </div>

      {/* --- RIGHT SIDE: Info & Actions --- */}
      <div className="details-right">
        
        {/* Breadcrumb & ID */}
        <div className="header-meta">
          <span className="breadcrumb">Catalog &gt; Prepared meal &gt; Second courses</span>
                  <span className="item-id">Item: {product.id }0024</span>
        </div>

        {/* Title */}
        <h1 className="product-title">
          {product.name}
        </h1>

        {/* Ratings */}
        <div className="rating-row">
          <div className="stars">⭐⭐⭐⭐⭐ ({product.rating})</div>
          <span className="review-count">25 reviews</span>
        </div>

        {/* Price & Cart Actions */}
        <div className="price-action-section">
          <div className="price-box">
            <span className="current-price">৳ {product.price}</span>
            <span className="old-price">৳ {parseInt(product.price) + 50}</span>
          </div>
          
          <div className="action-buttons-row">
            <button className="btn-add-cart">ADD TO CART</button>
            
            {/* Wishlist Icon (SVG) */}
            <button className="btn-icon" onClick={()=>setLiked(!liked)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill={liked ? "red" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
            </button>

            {/* Share Icon (SVG) */}
            <button className="btn-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
            </button>
          </div>
        </div>

        {/* Stock & Delivery Info Card */}
        <div className="info-card">
          <div className="info-row">
            <div className="info-left">
              <span className="status-dot"></span>
              <span className="stock-status">In Stock</span>
              <span className="shop-count">in 28 shops</span>
            </div>
            <a href="#" className="info-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Show on map
            </a>
          </div>
          
          <div className="divider"></div>
          
          <div className="info-row">
            <div className="info-left">
              <span className="delivery-label">Delivery:</span>
              <span className="delivery-cost">Free from ৳ 200</span>
            </div>
            <a href="#" className="info-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                Learn more
            </a>
          </div>
        </div>

        {/* Description */}
        <div className="description-section">
          <h3>Description</h3>
          <p>
            Enjoy our delicious <strong>{product.name}</strong> from the <strong>{product.category}</strong> menu. 
            Golden noodles stir-fried in a spicy soy-garlic sauce and reddish
            chicken pieces are the stars of this dish.  
          </p>
          <p>
            This meal provides a perfect balance of nutrition and taste, crafted specially by our expert chefs using locally sourced fresh ingredients.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;