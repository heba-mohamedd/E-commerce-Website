import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice";
import favSlice from "./Slice/favSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, fav: favSlice },
});
