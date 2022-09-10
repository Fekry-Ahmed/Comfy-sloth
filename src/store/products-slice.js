import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: true,
  },
  reducers: {
    initializeState(state, action) {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export default productsSlice;
export const productsActions = productsSlice.actions;
