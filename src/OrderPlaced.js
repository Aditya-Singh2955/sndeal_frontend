import React from "react";
import "./OrderPlaced.css";
import Tick from "../src/image/Products/Philips/green-tick.png";
import Logo from "./image/Products/logo.png";
import Telegram from "../src/image/Products/Philips/telegram.png";
import Address from "../src/image/Products/Philips/location.png";
import Call from "../src/image/Products/Philips/call.png";
import Mail from "../src/image/Products/Philips/email.png";

function OrderPlaced() {
  // Fetch total value from local storage
  const total = parseFloat(localStorage.getItem("orderTotal")) || 0;

  // Fetch user data from local storage
  const storedData = JSON.parse(localStorage.getItem("userdetails")) || {};
  const user = storedData.user || {};

  console.log("Total in OrderPlaced:", total); // Add this line for debugging

  return (
    <div className="login">
      <img className="login_logo" src={Logo} alt="Company Logo" />
      <div className="Order_container">
        <div className="order_photo">
          <img className="Order_image" src={Tick} alt="Order Confirmation Tick" />
        </div>
        <div className="order_status">
          <span className="order_writen">Order Placed!</span>
        </div>
        <div className="order_description">
          Thank you for the order! Your order will be delivered shortly on your doorstep.
        </div>
        <div className="order_address">
          <div className="address_box">
            <div className="address_head">
              <img src={Telegram} alt="Telegram Icon" className="telegram_icon" />
              &nbsp;Your order will be delivered to this address:
            </div>
            <div className="address_order">
              <img src={Address} alt="Location Icon" className="gram_icon" />
              {user.address || "N/A"}
            </div>
            <div className="order_phone">
              <img src={Call} alt="Phone Icon" className="gram_icon" />
              {user.phone || "N/A"}
            </div>
            <div className="order_mail">
              <img src={Mail} alt="Mail Icon" className="gram_icon" />
              {user.email || "N/A"}
            </div>
          </div>
        </div>
        <div className="order_amount">
          Total Amount: ₹{total.toFixed(2)} <br />
          Payment of this amount to be made at the time of delivery.
        </div>
      </div>
    </div>
  );
}

export default OrderPlaced;
