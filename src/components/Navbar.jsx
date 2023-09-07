import { useState } from "react"
import SearchBox from "./Search"
import {BsSearch} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from "react-router-dom"



const Navbar = () => {

   const  [isSearchShow,setIsSearchShow] = useState(false)





   function showSearchButton(e){
    e.preventDefault()
isSearchShow ?setIsSearchShow(false) : setIsSearchShow(true)
   }

  return (
    <>
    <div className="flex items-center justify-between px-4 shadow-xl py-4  mt-0 bg-white w-full">
        <div className="logo">
            <img src="/logo.png" alt="logo" className="w-8 h-8" />
        </div>
 <div className="list flex gap-2">
    <a href="" className="text-gray-800 " onClick={showSearchButton} ><BsSearch/></a>
              <a href="" className="text-gray-800 ">Offers</a>
              <a href="" className="text-gray-800 ">Help</a>
              <a href="" className="text-gray-800 ">Amresh</a>
              <Link to="/cart"  className="text-gray-800 " ><AiOutlineShoppingCart className="text-2xl"/></Link>




 </div>
    </div>
    
{
    isSearchShow ? <SearchBox/> : null
}

    </>
  )
}
export default Navbar