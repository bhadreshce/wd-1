import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart_name',
    initialState: 0,
    reducers: {
        addTo(state, action) { 
            console.log(action.payload);
            return state + action.payload;
        }
    }
});

// Export the reducer
export default cart.reducer;

// Export the action creators
export const { addTo } = cart.actions;