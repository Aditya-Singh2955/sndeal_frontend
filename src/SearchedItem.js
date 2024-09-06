import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';
import './DigitalWatch.css';

const SearchResults = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || {};
  const noResults = location.state?.noResults;

  return (
    <div className="home">
      <h1 className="home__header">Search Results</h1>
      <div className="home__row">
        {noResults ? (
          <p>No items found matching your search criteria.</p>
        ) : (
          <>
            {searchResults.watches && searchResults.watches.length > 0 && (
              <>
                {searchResults.watches.map((product) => {
                  let productImage;
                  try {
                    productImage = require(`${product.imageUrl}`);
                  } catch (error) {
                    console.error('Image not found:', product.imageUrl);
                    productImage = ''; // Provide a fallback image or empty string
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
              </>
            )}

            {searchResults.homeAppliances && searchResults.homeAppliances.length > 0 && (
              <>
                {searchResults.homeAppliances.map((product) => {
                  let productImage;
                  try {
                    productImage = require(`${product.imageUrl}`);
                  } catch (error) {
                    console.error('Image not found:', product.imageUrl);
                    productImage = ''; // Provide a fallback image or empty string
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
              </>
            )}

            {searchResults.cookwares && searchResults.cookwares.length > 0 && (
              <>
                {searchResults.cookwares.map((product) => {
                  let productImage;
                  try {
                    productImage = require(`${product.imageUrl}`);
                  } catch (error) {
                    console.error('Image not found:', product.imageUrl);
                    productImage = ''; // Provide a fallback image or empty string
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
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
