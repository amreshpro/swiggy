import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalPrice: 0,
  },

  reducers: {
    add(state, action) {
      state.cartList.push(action.payload);
      console.log(action.payload)
      state.totalPrice = state.cartList?.reduce((totalPrice,item)=>{return totalPrice += +item?.feeDetails.amount},0)
      return state;
    },

    removeCartItem: (state, action) => {
      state.cartList.filter((item, index) => {
        if (item.id === action.payload) {
          state.cartList.splice(index, 1);
            state.totalPrice = state.cartList?.reduce((totalPrice,item)=>{return totalPrice += +item?.feeDetails.amount},0)
        }
      });

    
    },

    clearCart:(state)=>{
      state.cartList=[],
      state.totalPrice=0
    }

  },
});

export const { add, removeCartItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;


