import image from "../../assets/chicken.webp"
import './ProductImage.css'; 

function ProductImage() {
  return (
    <div className="product-image-container">
      <img src={image} alt="Wok Ramen" className="main-product-image" />
      
      <div className="nutritional-info-card">
        <div className="nutritional-item">
          <span className="label">nutritional value</span>
          <span className="value">1 237</span>
          <span className="unit">kcal</span>
        </div>
        <div className="nutritional-item">
          <span className="label">fats g</span>
          <span className="value">13,6</span>
          <span className="percentage low">10%</span>
        </div>
        <div className="nutritional-item">
          <span className="label">proteins g</span>
          <span className="value">9,2</span>
          <span className="percentage medium">5%</span>
        </div>
        <div className="nutritional-item">
          <span className="label">carbs g</span>
          <span className="value">19,5</span>
          <span className="percentage low">32%</span>
        </div>
        <div className="nutritional-item">
          <span className="label">salt g</span>
          <span className="value">0,15</span>
          <span className="percentage low">0.3%</span>
        </div>
      </div>
    </div>
  );
}

export default ProductImage;