import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import authReducer from '../features/auth/authSlice';
import menuReducer from '../features/menu/menuSlice'
import productReducer from '../entities/product/productSlice';
import searchReducer from '../features/search/searchSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    auth: authReducer,
    product: productReducer,
    menu: menuReducer,
    search: searchReducer,
  },
});
