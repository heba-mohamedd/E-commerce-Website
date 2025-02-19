import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "fav",
  initialState: {
    products: [],
  },
  reducers: {
    // action  >>> type(ADD_TO_CART) , payload = {}

    addToFav: (state, action) => {
      state.products.push(action.payload);
    },
    removeFromFav: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export default favSlice.reducer;
export const { addToFav, removeFromFav } = favSlice.actions;
