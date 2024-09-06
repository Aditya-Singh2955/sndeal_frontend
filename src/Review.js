import React, { useEffect, useState } from "react";
import "./Review.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [localUser, setLocalUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userJson = localStorage.getItem("userdetails");
    if (userJson) {
      const userData = JSON.parse(userJson);
      setLocalUser(userData.user);
    }
  }, []);

  const handleClick = () => {
    const storedState = localStorage.getItem("cartState");
    const storedData = JSON.parse(localStorage.getItem("userdetails"));

    if (storedState && storedData && storedData.user) {
      const { basket } = JSON.parse(storedState);

      // Transform basket items into order format
      const transformedOrders = basket.map((item, index) => ({
        id: index + 1,
        date: new Date().toLocaleDateString(),
        total: `₹${item.price}`,
        shipTo: storedData.user.name,
        items: [
          {
            tittle: item.tittle || item.tittle,
            description: item.description,
            image: item.image,
            returnWindow: "N/A",
          },
        ],
      }));

      // Fetch existing orders from local storage
      const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

      // Append the new orders to the existing orders
      const updatedOrders = [...existingOrders, ...transformedOrders];

      // Save the updated orders to local storage
      localStorage.setItem("orders", JSON.stringify(updatedOrders));

      // Clear the basket in local storage and context
      localStorage.removeItem("cartState"); // Remove cartState from localStorage
      dispatch({ type: "CLEAR_BASKET" });

      // Redirect to the order details page
      navigate("/order-placed");
    }
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{localUser?.name || "No user name"}</p>
            <p>{localUser?.phone || "No user phone"}</p>
            <p>{localUser?.address || "No user address"}</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items For Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.length > 0 ? (
              basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  tittle={item.tittle}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))
            ) : (
              <p>No items in basket</p>
            )}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <button onClick={handleClick} className="paynow_button">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
