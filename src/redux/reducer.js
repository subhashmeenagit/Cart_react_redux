import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
    {
        cartItems: [],
        subTotal: 0,
        shipping: 0,
        tax: 0,
        total: 0,
    },
    {
        addToCart: (state, action) => {
            const item = action.payload;
            const isItemExist = state.cartItems.find((i) => i.id === item.id);

            if (isItemExist) {
                state.cartItems.forEach((i) => {
                    if (i.id === item.id) i.quantity += 1;
                });
            } else {
                state.cartItems.push(item);
            }
        },

        decrement: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload);
            if (item.quantity > 1) {
                state.cartItems.forEach((i) => {
                    if (i.id === item.id) i.quantity -= 1;
                });
            }
        },

        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
        },
        calculatePrice: (state) => {
            let sum = 0;
            state.cartItems.forEach((i) => (sum += i.price * i.quantity));
            state.subTotal = sum;
            state.shipping = state.subTotal > 2500 ? 0 : 200;
            if (state.cartItems.length == 0) state.shipping = 0;
            state.tax = +(state.subTotal * 0.21).toFixed();
            state.total = state.subTotal + state.tax + state.shipping;

        },
    }
);