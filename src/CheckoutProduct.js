// CheckoutProduct.js
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, price, rating, tittle,description }) {
    const [{basket} , dispatch] = useStateValue();

    const removefromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id
        })
    }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image}  />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{tittle}{description}</p>
        <p className="checkoutProduct__description"></p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removefromBasket}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
