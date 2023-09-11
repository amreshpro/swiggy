import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartCard from "./CartCard";

const CartContainer = () => {

const {cartList,totalPrice }= useSelector((state)=>state.cart)









  return (
    <div className="w-full text-center flex flex-col justify-center item-center mt-4 mb-4">
<div className="container flex flex-col gap-4">

{
  cartList?.map((item)=>{
  


    return(
      <CartCard key={item.id} {...item}/>
    )
  })
}


</div>
<div className="total">

<h1 className="text-xl">Total: {totalPrice}</h1>
</div>

<div className="checkout flex flex-col gap-2 justify-center items-center text-center px-2 w-full mt-2">
  <Link to="/product" className="bg-orange-500 text-white px-2 py-2 rounded-lg w-fit">Checkout</Link>
  <Link to="/product" className="text-orange-500  px-2 py-2 w-fit ">Continue Shopping</Link>

</div>
    </div>
  )
}
export default CartContainer