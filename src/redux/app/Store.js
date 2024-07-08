import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../feature/CartSlice';

export const store = configureStore({
  reducer: {
    allCart: cartSlice,
  },
});

export default store;
