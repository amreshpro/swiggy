import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import searchSlice from "./searchSlice";


const store = configureStore({
reducer:{
    auth:authSlice,
    cart:cartSlice,
    product:productSlice,
    search:searchSlice
}
})

export default store