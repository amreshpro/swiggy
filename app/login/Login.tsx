import Link from "next/link"
import BannerStore from "./BannerStore"
import PromotionBanner from "./PromotionBanner"
import {BiCurrentLocation} from 'react-icons/bi'

const Login = () => {
 
  return (

    <>
    <div className="flex w-full  sm:flex-col ">


<div className="login-form w-1/2 flex flex-col px-8 ">

<div className="login-nav pt-12 flex justify-between px-2">

<img className="w-18 " src="https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" alt="logo"  />
<div className="flex gap-2">
  <Link href="" className="text-black font-bold h-max  px-6 py-2">Login</Link>
  <Link href="" className="text-white font-bold h-max px-6 py-2 bg-black">Signup</Link>

</div>
</div>

<div className="show-search-banner-card px-3 p-2 pt-14">
  <h1 className="text-4xl text-gray-800 font-bold">Order Your Food</h1>
  <p className="text-gray-600 text-2xl pt-1">Order food from favourite restaurants near you.</p>
  <div className="mt-8 input-search w-max flex border justify-center items-center border-orange-500">
    <input type="text" className="outline-none text-gray-700   focus:border-orange-500 placeholder-gray-400  px-2  tracking-wide"  placeholder="Enter your delivery location"/>
    <button className="location hover:bg-gray-300 hover:px-2 mx-1 hover:py-2  hover:h-max hover:text-center hover:rounded-sm text-gray-500 text-sm items-center px-2 flex"> <BiCurrentLocation className="text-lg" />Locate me</button>
    <button type="submit" className="bg-orange-500 text-white font-bold px-6 py-4 text-sm uppercase">Find Food</button>
  </div>
  <div className="bottom-text py-4 flex flex-col mt-2 gap-2">
    <h1 className="text-gray-400 ">POPULAR CITIES IN INDIA</h1>
  <h2 className="text-gray-600 font-bold">
Ahmedabad <span className="text-gray-500"> Bangalore</span> Chennai  <span className="text-gray-500"> Delhi</span> Gurgaon <span className="text-gray-500">Hydrabad</span>  Kolkata <span className="text-gray-500"> Mumbai</span> Pune <span className="text-gray-500"> & more.</span> </h2>
  </div>
</div>



</div>
<div className="login-side-img w-1/2 sm:w-full ">
    <img className="w-full " src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"  />
</div>
    </div>
    <PromotionBanner/>
    <BannerStore/>
    </>
  )
}
export default Login