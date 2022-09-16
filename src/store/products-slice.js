import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    isLoading: true,
    error: null,
    gridView: true,
    filteredProducts: [],
    filters: {
      text: '',
      category: 'all',
      company: 'all',
      colors: 'all',
      price: 0,
      shipping: false,
    },
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
    },

    setListView(state) {
      state.gridView = false;
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
    updateFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value;

      let filtered = [...state.products];

      filtered = filtered.filter((p) => p.name.startsWith(state.filters.text));

      if (!(state.filters.category === 'all')) {
        filtered = filtered.filter(
          (p) => p.category === state.filters.category
        );
      }

      if (!(state.filters.company === 'all')) {
        filtered = filtered.filter((p) => p.company === state.filters.company);
      }

      if (!(state.filters.colors === 'all')) {
        filtered = filtered.filter((p) =>
          p.colors.join().includes(state.filters.colors)
        );
      }

      filtered = filtered.filter((p) => p.price > state.filters.price);

      filtered = filtered.filter((p) => {
        return state.filters.shipping ? p.shipping : true;
      });

      state.filteredProducts = filtered;
    },

    clearFilters(state) {
      console.log(1);
      state.filters = {
        text: '',
        category: 'all',
        company: 'all',
        colors: 'all',
        price: 0,
        shipping: false,
      };

      state.filteredProducts = [...state.products];
    },
  },
});

export default productsSlice;
export const productsActions = productsSlice.actions;
