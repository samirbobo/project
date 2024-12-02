import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice
  },
});
export default store;