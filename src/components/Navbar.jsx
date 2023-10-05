import { useState } from "react"
import SearchBox from "./Search"
import {ImSearch} from 'react-icons/im'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom"
import {FiLogOut } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { isAuth } from "../store/authSlice"



const Navbar = () => {

   const  [isSearchShow,setIsSearchShow] = useState(false)

   const cartDetails = useSelector((state)=>state.cart)




   function showSearchButton(e){
    e.preventDefault()
isSearchShow ?setIsSearchShow(false) : setIsSearchShow(true)
   }



   const dispatch = useDispatch()
   function logoutHandler(){
   
dispatch(isAuth(false))
}






return (
    <>
    <div className="flex items-center justify-between px-4 shadow-xl py-4  mt-0 bg-white w-full">
        <div className="logo">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
        </div>
 <div className="list flex gap-3">
    <button className="text-gray-800 " onClick={showSearchButton} ><ImSearch/></button>
              <a href="" className="text-gray-800 ">Offers</a>
              <a href="" className="text-gray-800 ">Help</a>
              <Link to="/cart"  className="text-gray-800 " ><div className="cart flex "><p className="bg-orange-500 px-2 pt-0.5 absolute top-2 right-9 text-white rounded-full text-center text-sm ">{cartDetails?.cartList.length || 0}</p><AiOutlineShoppingCart className="text-2xl"/></div></Link>
              <button onClick={logoutHandler} className="text-gray-800 ml-1 "> <FiLogOut className="text-xl"/> </button>

 </div>
    </div>
    
{
    isSearchShow ? <SearchBox/> : null
}

    </>
  )
}
export default Navbar