import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice/cartSlice";
import favSlice from "./Slice/favSlice";
import productsSlice from "./Slice/productsSlice";
import authSlice from "./Slice/authSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favSlice,
    products: productsSlice,
    auth: authSlice,
  },
});
