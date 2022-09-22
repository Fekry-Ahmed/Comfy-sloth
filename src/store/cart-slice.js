import { createSlice } from '@reduxjs/toolkit';

const cartSilce = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.amount += action.payload.amount;
        existingItem.totalPrice = existingItem.amount * existingItem.price;
      } else {
        state.cartItems.push({
          ...action.payload,
          totalPrice: action.payload.amount * action.payload.price,
        });
      }
      state.totalQuantity += action.payload.amount;
    },
    increaseItemAmount(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      existingItem.amount++;
      existingItem.totalPrice += existingItem.price;
      state.totalQuantity++;
    },
    removeItemFromCart(state, action) {
      state.cartItems.filter((item) => item.id !== action.payload);
    },
    decreaseItemAmount(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem.amount > 1) {
        existingItem.amount--;
      } else {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
      state.totalQuantity--;
      existingItem.totalPrice -= existingItem.price;
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalQuantity = 0;
    },
  },
});
export const cartActions = cartSilce.actions;
export default cartSilce;
