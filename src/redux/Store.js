import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Reducer";

const Store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default Store;