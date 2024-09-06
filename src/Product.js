import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import axios from "axios"; // Import axios for API calls

function Product({ tittle, image, price, rating, id, description }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>>>", basket);

  const addToBasket = async () => {
    // Dispatch the action to update the state
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        tittle: tittle,
        image: image,
        price: price,
        rating: rating,
        description: description,
      },
    });

    // Prepare the data for the backend
    const productData = {
      userId: "your_user_id",  // Replace with the actual user ID
      productId: id,
      name: tittle,
      description: description,
      price: price,
      rating: rating,
      imageUrl: image,
    };

    // Send the data to the backend API
    try {
      const response = await axios.post(
        `${process.env.APP_API_URL}/api/v1/add-data`,
        productData
      );
      console.log("Item added to cart:", response.data);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>
          {tittle} {description}
        </p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt={tittle}></img>

      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
