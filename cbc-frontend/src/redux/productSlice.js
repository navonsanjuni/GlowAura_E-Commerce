import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return res.data;
});

export const fetchProductById = createAsyncThunk("products/fetchById", async (id) => {
  const res = await axios.get(`http://localhost:3000/api/products/${id}`);
  return res.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", selected: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selected = action.payload;
      });
  },
});

export default productSlice.reducer;