import "./ProductCard.css";

function ProductCard({data}) {
  const { name, image, price, category, rating, description } = data;
  return (
    <>
      <div className="product-card">
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
              <span className="original-price">৳ {price + 50}</span>
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