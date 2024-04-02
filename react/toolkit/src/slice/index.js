import cart from "./AddTocart";
import { configureStore } from "@reduxjs/toolkit"; 
const store = configureStore({
    reducer: {
        addedCart: cart
    }
})

export default store