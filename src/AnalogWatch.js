import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import "./DigitalWatch.css";

import Image from "./image/Products/Timex_Analog/Timex_A1.png"

const AnalogWatch = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.APP_API_URL}/api/v1/watches?isAnalog=true`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching the products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h1 className="home__header">Results For Analog Watch</h1>
      <div className="home__row">
        {products.map((product) => {
          let productImage;
          try {
            productImage = require(`${product.imageUrl}`);
          } catch (error) {
            console.error("Image not found:", product.imageUrl);
            productImage = "";
          }

          return (
            <Product
              key={product.productId}
              id={product.productId}
              image={productImage}
              tittle={product.name}
              description={product.description}
              price={product.price}
              rating={product.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AnalogWatch;
