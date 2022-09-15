import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: [],
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
      state.filteredProducts = action.payload;
    },

    setGridView(state) {
      state.gridView = true;
      console.log(1);
    },

    setListView(state) {
      state.gridView = false;
      console.log(2);
    },
    sortProducts(state, action) {
      if (action.payload === 'priceLow') {
        state.filteredProducts.sort((a, b) => b.price - a.price);
      }

      if (action.payload === 'PriceHigh') {
        state.filteredProducts.sort((a, b) => a.price - b.price);
      }

      if (action.payload === 'Z_to_A') {
        state.filteredProducts.sort((a, b) => (a.name > b.name ? -1 : 1));
      }

      if (action.payload === 'A_to_Z') {
        console.log(state.filteredProducts);
        state.filteredProducts.sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    },
  },
});

export default productsSlice;
export const productsActions = productsSlice.actions;
