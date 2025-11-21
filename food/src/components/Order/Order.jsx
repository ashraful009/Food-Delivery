import "./Order.css";
import image from "../../assets/chicken.webp"

function Order() {
    return (
        <>
            <div className="order-page">
                {/* 1. Image Circle */}
                <div className="product-img">
                    <img src={image} alt="image" className="img" />
                </div>

                {/* 2. Title */}
                <div className="product-title">
                    <h2 className="title">Chicken Curry</h2>
                </div>

                {/* 3. Price */}
                <div className="product-price">
                    <h3 className="price"> 150৳</h3>
                </div>

                {/* 4. Quantity Control */}
                <div className="product-quantity">
                    <button className="decrement-btn">-</button>
                    <h3 className="quantity">1</h3>
                    <button className="increment-btn">+</button>
                </div>

                {/* 5. Delete Icon */}
                <div className="delete-icon">
                    {/* এখানে আমি একটি ক্রস সাইন দিয়েছি, আপনি চাইলে আইকন বসাতে পারেন */}
                    <h3 className="dlt-icon">✕</h3> 
                </div>
            </div>
        </>
    );
}
export default Order;