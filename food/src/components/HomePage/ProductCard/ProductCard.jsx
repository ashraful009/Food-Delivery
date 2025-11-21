import image from "../../../assets/chicken.webp"; // আপনার ইমেজের পাথ ঠিক রাখবেন
import "./ProductCard.css";

function ProductCard() {
  return (
    <>
      <div className="product-card">
        {/* Left Side: Image */}
        <div className="product-image">
          <img src={image} alt="food Image" />
          {/* ইমেজের উপর ছোট্ট ব্যাজ (অপশনাল ডিজাইনের জন্য) */}
          <span className="badge">On Sale</span>
        </div>

        {/* Right Side: Info */}
        <div className="product-info">
          <div className="text-content">
            <div className="header-row">
              <span className="category">Lunch</span>
              <div className="rating-box">
                <span>⭐ 4.5</span>
                <span className="review-count">(25 reviews)</span>
              </div>
            </div>

            <h2 className="title">Chicken Curry with Spices</h2>
            
            <p className="description">
              Delicious traditional chicken curry cooked with aromatic spices. 
              Perfect choice for a hearty meal.
            </p>

            <div className="price-tag">
              <h3 className="price">৳ 150</h3>
              <span className="original-price">৳ 190</span>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-btn">Add to cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;