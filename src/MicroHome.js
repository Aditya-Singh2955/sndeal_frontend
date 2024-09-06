import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './Product';
import './DigitalWatch.css';


const MicroHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.APP_API_URL}/api/v1/homeappliances`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching the products', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h1 className="home__header">Results For Kitchen Appliances</h1>
      <div className="home__row">
        {products
          .filter(product => product.category === 'Kitchen')
          .map(product => {
            let productImage;
            try {
              productImage = require(`${product.imageUrl}`);
            } catch (error) {
              console.error('Image not found:', product.imageUrl);
              productImage = '';
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

export default MicroHome;
