import { createSlice } from "@reduxjs/toolkit";
import { productsRequestServer } from "../../../services/products"

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export default productsSlice.reducer

export const { setProducts } = productsSlice.actions

export const getProducts = () => (dispatch) => {
    const response = productsRequestServer()
    dispatch(setProducts(response))
}