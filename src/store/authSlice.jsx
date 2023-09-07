import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
name:"auth",
initialState:false,
reducers:{
    isAuth(state,action){
        state = action.payload
        console.log(state)
        return state
    }
}


})


export const {isAuth} = authSlice.actions

export default authSlice.reducer