// Utility function to get the total from the basket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// Initialize state from local storage if it exists
const storedState = localStorage.getItem("cartState");

export const initialState = storedState
  ? JSON.parse(storedState)
  : {
      user: null,
      basket: [],
      address: null,
      phone: null,
      total: 0, // Added total field
    };

// Reducer function
const reducer = (state, action) => {
  console.log("Dispatching action:", action);
  let newState;

  switch (action.type) {
    case "ADD_TO_BASKET":
      newState = {
        ...state,
        basket: [...state.basket, action.item],
        total: getBasketTotal([...state.basket, action.item]), // Update total
      };
      break;
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
        newState = {
          ...state,
          basket: newBasket,
          total: getBasketTotal(newBasket), // Update total
        };
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it is not in the basket!`
        );
        newState = state;
      }
      break;
    case "UPDATE_TOTAL":
      newState = {
        ...state,
        total: action.total,
      };
      break;
    case "SET_USER":
      newState = {
        ...state,
        user: action.user,
      };
      break;
    case "SET_ADDRESS":
      newState = {
        ...state,
        address: action.address,
      };
      break;
    case "SET_PHONE":
      newState = {
        ...state,
        phone: action.phone,
      };
      break;
    case "CLEAR_BASKET":
      newState = {
        ...state,
        basket: [],
        total: 0, // Reset total
      };
      break;
    default:
      newState = state;
      break;
  }

  // Save the new state to local storage
  localStorage.setItem("cartState", JSON.stringify(newState));
  return newState;
};

export default reducer;
