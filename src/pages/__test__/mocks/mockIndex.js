import { configureStore } from "@reduxjs/toolkit";
// Reducer
import cart from './mockSlices/mockCart'
import products from "./mockSlices/mockProducts";
import productSelected from "./mockSlices/mockProductSelected";

export default configureStore({
    reducer: {
        cart,
        products,
        productSelected,
    }
})