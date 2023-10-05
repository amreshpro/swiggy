import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState:  [],
 
  
  reducers: {
    findSearchData(state, action) {
      state=(action.payload);
      console.log(action.payload)
          return state;
    },

    clearSearch(state){
      state=[]
      return state
 
    }

  },
});

export const { findSearchData,clearSearch } = searchSlice.actions;
export default searchSlice.reducer;


