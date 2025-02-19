import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    // action  >>> type(ADD_TO_CART) , payload = {}

    addToCart: (state, action) => {
      state.products.push(action.payload);
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );

      state.totalQuantity -= 1;
      state.totalPrice -= action.payload.price;
    },
    increaseQuantity: (state, action) => {
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseQuantity } =
  cartSlice.actions;
