import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{

         add(state,action){
            state.push(action.payload);
            return state;
         },
         remove(state,action){
            state = state.filter((item)=>{
                if(item.id !== action.payload.id) return item;
            })
         }
    }
})

export const {add,remove}  = cartSlice.actions;
export default cartSlice.reducer;