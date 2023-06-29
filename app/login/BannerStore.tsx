

const BannerStore = () => {
  return (
    <div className="flex justify-between sm:flex-wrap font-poppins">

<div className="item-1 ml-16 sm:ml-2 w-96 flex flex-col sm:justify-start  justify-center gap-4">
    <h1 className="text-gray-800 font-bold text-4xl">Restaurants in your pocket</h1>
    <p className="text-gray-500 text-lg font-poppins">Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</p>
    <div className="btn flex gap-2 mt-8">

<a href=""><img className="w-48" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" alt="btn02"/></a>
<a href=""><img className="w-48" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" alt="btn02" /></a>

    </div>
</div>


<div className="mobile-example flex gap-5 sm:mt-5  sm:flex-wrap">
    <img className="w-96 h-full sm:h-1/2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n" alt="mobile1"  />
    <img className="w-96 h-full sm:h-1/2" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn" alt="mobile-2" />
</div>

    </div>
  )
}
export default BannerStore