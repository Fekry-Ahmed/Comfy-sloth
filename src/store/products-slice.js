import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: true,
    error: null,
    gridView: true,
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

    setGridView(state) {
      state.gridView = true;
      console.log(1);
    },

    setListView(state) {
      state.gridView = false;
      console.log(2);
    },
  },
});

export default productsSlice;
export const productsActions = productsSlice.actions;
