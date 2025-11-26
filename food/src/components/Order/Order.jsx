import React, {useState} from "react";
import "./Order.css";
import image from "../../assets/chicken.webp"

function Order() {

    const [incre, setIncre] = useState(1)
    const price = incre*150


    function increment() {
        setIncre(i => i + 1)
    }
    function Decrement() {
            if(incre > 1)
                setIncre(i => i - 1)
    }


    return (
        <>
            <div className="order-page">
                <div className="product-img">
                    <img src={image} alt="image" className="img" />
                </div>

                <div className="product-title">
                    <h2 className="title">Chicken Curry</h2>
                </div>

                <div className="product-price">
                    <h3 className="price" > { price}৳</h3>
                </div>

                <div className="product-quantity">
                    <button className="decrement-btn" onClick={Decrement}>-</button>
                    <h3 className="quantity" >{ incre}</h3>
                    <button className="increment-btn" onClick={increment}>+</button>
                </div>

                <div className="delete-icon">
                    <h3 className="dlt-icon">✕</h3> 
                </div>
            </div>
        </>
    );
}
export default Order;