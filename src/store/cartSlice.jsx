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
      state.totalPrice = countTotalPrice(state);
      return state;
    },

    removeCartItem: (state, action) => {
      state.cartList.filter((item, index) => {
        if (item.id === action.payload) {
            state.totalPrice =updateTotalPrice(state,item.feeDetails.totalFees);
          state.cartList.splice(index, 1);
        }
      });

    
    },
  },
});

export const { add, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;

function countTotalPrice(state) {
  state.cartList.filter((item) => {
    state.totalPrice += item.feeDetails.totalFees;
  });
return state.totalPrice;
}

function updateTotalPrice(state,removePrice) {

if(state.totalPrice>0)
      state.totalPrice = state.totalPrice - removePrice;
 
  return state.totalPrice;
  }