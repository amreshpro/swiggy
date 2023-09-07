import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers:{

         addDataInProductBucket(state,action){
            state= action.payload;
            return state;
         }
    }
})

export const {addDataInProductBucket}  = productSlice.actions;
export default productSlice.reducer;