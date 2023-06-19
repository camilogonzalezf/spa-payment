import { createSlice } from "@reduxjs/toolkit";
const mockInitialState = {
    cart: [
        {
            sku: 1,
            name: 'Milo',
            quantity: 5,
            price: 2,
            url: 'url',
            total: 10
        },
        {
            sku: 2,
            name: 'Alqueria',
            quantity: 2,
            price: 3,
            url: 'url',
            total: 6
        }
    ]
}
export const shoppingCart = createSlice({
    name: 'cart',
    initialState: {
        cart: mockInitialState.cart
    },
    reducers: {
    }
})

export default shoppingCart.reducer