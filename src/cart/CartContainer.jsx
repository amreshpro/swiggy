import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartCard from "./CartCard";

const CartContainer = () => {

const cartList = useSelector((state)=>state.cart)

let totalPrice = 0;

useEffect(()=>{
  function countPrice(){
    cartList.map((item)=>{
      totalPrice += (+item.data.feeDetails.amount)
    })
  }
  
  countPrice()
},[cartList])


  return (
    <div className="w-full text-center flex flex-col justify-center item-center mt-4 mb-4">
<div className="container">

{
  cartList?.map((item)=>{
    return(
      <CartCard key={item.id} {...item.data}/>
    )
  })
}


</div>
<div className="total">

<h1>Total: {totalPrice}</h1>
</div>

<div className="checkout flex flex-col gap-2 justify-center px-2 w-full">
  <Link to="/product" className="bg-orange-500 text-white px-2 py-2 rounded-lg  w-full">Checkout</Link>
  <Link to="/product" className="text-orange-500  px-2 py-2 ">Continue Shopping</Link>

</div>
    </div>
  )
}
export default CartContainer