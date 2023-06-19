import { configureStore } from "@reduxjs/toolkit";
// Reducer
import cart from './slices/cart'
import products from "./slices/products";
import productSelected from "./slices/productSelected";

export default configureStore({
    reducer: {
        cart,
        products,
        productSelected,
    }
})