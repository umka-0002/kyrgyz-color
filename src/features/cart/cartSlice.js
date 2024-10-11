import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  items: [],
  status: 'idle',
  error: null
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async (userId) => {
  const response = await axios.get(`/api/cart/${userId}`);
  return response.data;
});

export const addItemToCart = createAsyncThunk('cart/addItemToCart', async ({ userId, productId, quantity }) => {
  const response = await axios.post('/api/cart', { userId, productId, quantity });
  return response.data;
});

export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async ({ userId, productId }) => {
  const response = await axios.delete(`/api/cart/${userId}/${productId}`);
  return response.data;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
      });
  }
});

export default cartSlice.reducer;
