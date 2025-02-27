import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "./../../utils/axiosInstance";

export const fetchAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkAPI) => {
    try {
      const respons = await axiosInstance.get("/products");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("error from thunk");
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // setProducts: (state, action) => {
    //   state.products = action.payload;
    // },
    // setLoading: (state, action) => {
    //   state.isLoading = action.payload;
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;
    // },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
