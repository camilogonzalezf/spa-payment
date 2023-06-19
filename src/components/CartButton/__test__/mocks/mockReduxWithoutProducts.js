import { createSlice } from "@reduxjs/toolkit";

export const shoppingCart = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
    }
})

export default shoppingCart.reducer