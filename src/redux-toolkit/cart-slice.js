import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: localStorage.getItem('carts')? JSON.parse(localStorage.getItem('carts')) : [],
  name: "cartSlice",
  reducers: {
    addCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
        localStorage.setItem("carts", JSON.stringify(state));
      } else {
        // عملت الخطوه دي عشان المنتج بتاعي ف ال اي ابي ايا مش فيه خاصيه الكميه
        // وانا محتاج الكميه عشان اضيف عليها كل ما اجي اختار منها عدد
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
        localStorage.setItem("carts", JSON.stringify(state));
      }
    },
    deleteCart: (state, action) => {
      const x = state.filter((cart) => cart.id !== action.payload.id);
      localStorage.setItem("carts", JSON.stringify(x));
      return x;
    },
    clear: (state, action) => {
      localStorage.removeItem("carts");
      return [];
    },
    decreaseCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct.quantity <= 1) {
        const x = state.filter((cart) => cart.id !== action.payload.id);
        if(x.length > 0) {
          localStorage.setItem("carts", JSON.stringify(x));
        }else {
          localStorage.removeItem("carts");
        }
        return x;
      } else {
        findProduct.quantity -= 1;
        localStorage.setItem("carts", JSON.stringify(state));
      }
    },
  },
});

export const { decreaseCart, addCart, deleteCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
