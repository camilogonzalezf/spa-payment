import { createSlice } from "@reduxjs/toolkit";

export const shoppingCart = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        setShoppingCart: (state, action) => {
            state.cart.push(action.payload)
        },
        removeItem: (state, action) => {
            state.cart.splice(action.payload, 1)
        }
    }
})

export default shoppingCart.reducer

export const { setShoppingCart, removeItem } = shoppingCart.actions

export const addProductToCart = (payload) => (dispatch) => {
    dispatch(setShoppingCart(payload))
}

export const removeProductToCart = (payload) => (dispatch) => {
    dispatch(removeItem(payload))
}
