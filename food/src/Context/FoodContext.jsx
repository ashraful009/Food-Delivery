import { createContext, useState } from "react";
import Img1 from "../assets/chicken.webp";
import Img2 from "../assets/Chicken with salad.jpeg"
import Img3 from "../assets/Chicken,Rice & Vegetable.jpeg"
import Img4 from "../assets/Lunch box.jpg"
import Img5 from "../assets/Masala-Dosa.jpg"
import Img6 from "../assets/Rice-Chiken.jpg"
import Img7 from "../assets/vietnam-food.jpeg"

export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
    
    const [foods, setFoods] = useState([
        {
            id: 1,
            name: "Chicken Curry",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 150,
            category: "Lunch",
            image: Img1,
            rating: 4.5
        },
        {
            id: 2,
            name: "Chicken with salad",
            description:"Chicken with salad Chicken with salad Chicken with salad",
            price: 250,
            category: "Fast Food",
            image: Img2,
            rating: 4.8
        },
        {
            id: 3,
            name: "Chicken,Rich & Vegetable",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 230,
            category: "Fast Food",
            image: Img3,
            rating: 4.8
        },
        {
            id: 4,
            name: "Lunch box",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 210,
            category: "Fast Food",
            image: Img4,
            rating: 4.8
        },
        {
            id: 5,
            name: "Masala-Dosa",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 250,
            category: "Fast Food",
            image: Img5,
            rating: 4.8
        },
        {
            id: 6,
            name: "Rice-Chiken",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 270,
            category: "Fast Food",
            image: Img6,
            rating: 4.8
        },
        {
            id: 7,
            name: "vietnam-food",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 350,
            category: "Fast Food",
            image: Img7,
            rating: 4.8
        },
        {
            id: 8,
            name: "vietnam-food",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 350,
            category: "Fast Food",
            image: Img7,
            rating: 4.8
        },
        {
            id: 9,
            name: "vietnam-food",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 350,
            category: "Fast Food",
            image: Img7,
            rating: 4.8
        },
        {
            id: 10,
            name: "vietnam-food",
            description: "Delicious traditional chicken curry cooked with aromatic spices. Perfect choice for a hearty meal.",
            price: 350,
            category: "Fast Food",
            image: Img7,
            rating: 4.8
        },
        
        
    ]);

    return (
        <FoodContext.Provider value={{ foods, setFoods }}>
            {children}
        </FoodContext.Provider>
    );
};