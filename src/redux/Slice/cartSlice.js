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
      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );
      existingProduct
        ? (existingProduct.quantity += 1)
        : state.products.push(action.payload);

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        state.totalQuantity -= product.quantity;
        state.totalPrice -= product.price * product.quantity;
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += product.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.products = state.products.filter(
            (prod) => prod.id !== action.payload.id
          );
        }
        state.totalQuantity -= 1;
        state.totalPrice -= product.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
