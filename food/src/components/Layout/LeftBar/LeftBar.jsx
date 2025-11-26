import "./LeftBar.css"

function LeftBar() {
    return (
        <>
            <div className="left-bar">
                {/* Meal Packages Section */}
                <div className="meal-package">
                    <h1 className="package">Meal Packages</h1>
                    <h3 className="Combo">Combo Meals</h3>
                    <h3 className="weak-plan">7 Day Plan</h3>
                    <h3 className="day-15">15 Day Plan</h3>
                    <h3 className="monthly-plan">30 Day Plan</h3>
                </div>

                {/* Food Categories Section */}
                <div className="categories">
                    <h1 className="food-categories">Menu Category</h1>
                    <h3 className="lunch">Lunch</h3>
                    <h3 className="dinner">Dinner</h3>
                    <h3 className="drink">Drinks & Shakes</h3>
                    <h3 className="offer">Special Offers 🔥</h3>
                </div>
            </div>
        </>
    );
}

export default LeftBar;