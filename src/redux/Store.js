import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducer";

const Store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default Store;