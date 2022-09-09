import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    initializeState(state, action) {
      action.payload.forEach((item) => {
        state.push(item);
      });
    },
  },
});

export default productsSlice;
export const productsActions = productsSlice.actions;
