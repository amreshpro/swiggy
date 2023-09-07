

const PromotionBanner = () => {
  return (
    <div className="bg-amber-900 h-full text-white flex sm:flex-wrap justify-evenly items-center gap-4 px-6  pb-14">

<div className="item1 w-58 flex flex-col items-center gap-2 ">
    <img className="w-24 pb-4" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" alt="img1" />
    <h1 className="text-xl font-bold">No Minimum Order</h1>
    <p className="text-gray-300 text-sm">Order in for yourself or for the group, with no restrictions on order value.</p>
</div>
<div className="item1 w-58 flex flex-col items-center gap-2">
<img className="w-24 pb-4" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" alt="logo2" />
<h1 className="text-xl font-bold">No Minimum Order</h1>
    <p className="text-gray-300 text-sm">Order in for yourself or for the group, with no restrictions on order value.</p>
</div>
<div className="item1 w-58 flex flex-col items-center gap-2">
  <img className="w-24 pb-4" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" alt="logo3"  />
  <h1 className="text-xl font-bold">No Minimum Order</h1>
    <p className="text-gray-300 text-sm">Order in for yourself or for the group, with no restrictions on order value.</p>
</div>
    </div>
  )
}
export default PromotionBanner