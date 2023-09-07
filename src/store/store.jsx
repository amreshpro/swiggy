import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";


const store = configureStore({
reducer:{
    auth:authSlice,
    cart:cartSlice,
    product:productSlice
}
})

export default store