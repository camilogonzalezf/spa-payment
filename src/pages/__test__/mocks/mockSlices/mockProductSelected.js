import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
    name: 'productSelected',
    initialState: {
        productSelected: {}
    },
    reducers: {
        setProductSelected: (state, action) => {
            state.productSelected = action.payload
        },

        cleanProductSelected: (state, action) => {
            state.productSelected = {}
        }
    }
})

export default productSlice.reducer

export const { setProductSelected, cleanProductSelected } = productSlice.actions

export const setProduct = (payload) => (dispatch) => {
    dispatch(setProductSelected(payload))
}

export const clearProduct = () => (dispatch) => {
    dispatch(cleanProductSelected())
}