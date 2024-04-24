import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
     state.count = state.count + parseInt(action.payload)
    },
     addToCartZero: (state, action) => {
     state.count = 0
    },
    // Add other actions like remove from cart, update cart, etc.
  },
});

export const { addToCart,addToCartZero } = cartSlice.actions;

export default cartSlice.reducer;