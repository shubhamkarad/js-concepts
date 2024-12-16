import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { addItem } from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;

// Selector is a hook in react
// That we can use in the react component and that is coming from the React Redux library.

// Subscribing to the selector,
const cart = useSelector((store) => store.cart, items);

// useDispatch - To dipatch the action.  {Eg: Add item to the cart}

const dipatch = useDispatch();

const handleItem = (productId) => {
  dipatch(addItem(productId));
};
