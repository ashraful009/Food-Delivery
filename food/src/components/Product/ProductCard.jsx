import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
function ProductCard({ data }) {
  const navigate = useNavigate();
  const { name, image, price, category, rating, description } = data;
  return (
    <>
      <div className="product-card"
      onClick={() => navigate(`/product/${id}`)}
      style={{ cursor: "pointer" }}>
        <div className="product-image">
          <img src={image} alt={name} />
          <span className="badge">On Sale</span>
        </div>

        <div className="product-info">
          <div className="text-content">
            <div className="header-row">
              <span className="category">{category}</span>
              <div className="rating-box">
                <span>⭐ {rating}</span>
                <span className="review-count">(25 reviews)</span>
              </div>
            </div>

            <h2 className="title">{name}</h2>
            
            <p className="description">
              {description}
            </p>

            <div className="price-tag">
              <h3 className="price">৳ {price}</h3>
              <span className="original-price">৳ {parseInt(price) + 50}</span>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-btn" onClick={(e) => e.stopPropagation()}>Add to cart</button>
            <button className="buy-btn" onClick={(e) => e.stopPropagation()}>Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;