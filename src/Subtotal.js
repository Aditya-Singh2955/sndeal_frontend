import React from "react";
import "./Subtotal.css";
import { NumericFormat } from "react-number-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{ basket }] = useStateValue();
  const navigate = useNavigate();

  const handleClick = () => {
    // Store the total value in local storage
    localStorage.setItem("orderTotal", getBasketTotal(basket));

    // Navigate to the review page
    navigate('/review');
  };

  return (
    <div className="subtotal">
      <NumericFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
        decimalScale={2}
        fixedDecimalScale={true}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order Contains a gift
            </small>
          </>
        )}
      />

      <button onClick={handleClick}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
