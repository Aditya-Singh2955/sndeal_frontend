import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderDetails.css"; // Import the CSS file for styling

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from local storage
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="Order_fix">
      <div className="orders">
        <h1>Your Orders</h1>
        <div className="orders_container">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="order">
                <div className="order_header">
                  <div>
                    ORDER PLACED
                    <br />
                    {order.date}
                  </div>
                  <div>
                    TOTAL
                    <br />
                    {order.total}
                  </div>
                  <div>
                    SHIP TO
                    <br />
                    {order.shipTo}
                  </div>
                </div>
                {order.items.map((item, index) => (
                  <div key={index} className="order_item">
                    <img
                      src={item.image}
                      alt={item.tittle}
                      className="order_image"
                    />
                    <div className="order_details">
                      <h4>{item.tittle}{item.description}</h4>
                      <button className="order_button">Buy it again</button>
                      &nbsp; &nbsp;
                      <button className="order_button">View your item</button>
                    </div>
                  </div>
                ))}
                <div className="order_footer">
                  <Link to="/order-details">View order details</Link>
                </div>
                <button className="order_archive">Return Order</button>
              </div>
            ))
          ) : (
            <p>No orders found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
