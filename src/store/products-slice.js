import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: null,
    isLoading: true,
    error: null,
  },

  reducers: {
    fetchProducts(state, action) {
      state.isLoading = true;
    },

    error(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    success(state, action) {
      state.isLoading = false;
      state.products = action.payload;
    },
  },
});

export default productsSlice;
export const productsActions = productsSlice.actions;
