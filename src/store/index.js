import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products-slice';
import cartSilce from './cart-slice';

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSilce.reducer,
  },
});

export default store;
