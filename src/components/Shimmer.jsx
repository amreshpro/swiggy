import { BsFillStarFill }  from 'react-icons/bs'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4 mt-4 '>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>
<ShimmerCard/>



    </div>
  )
}
export default Shimmer






const ShimmerCard = ( ) => {

  // const {name,cloudinaryImageId,cuisines,avgRating,costForTwoString} = props
  
  return (
    <div className="  w-64 h-max hover:scale-90 animate-pulse ">
<div className="img">
  <div className="w-56 h-40 object-fill rounded-xl shadow-lg  bg-slate-50" ></div>
</div>
<div className="text flex flex-col justify-start gap-0.5 mt-1 ml-2">
  <h1 className='mt-0.5 text-gray-800 font-bold'></h1>
    <p className=" text-[15px] px-1 py-0.5 w-max h-max flex gap-2  "><BsFillStarFill className="mt-0.5 bg-green-700 p-1 text-xl text-white rounded-full" /> </p>
  <p className="text-gray-600 text-sm flex flex-wrap "></p>



</div>



    </div>
  )
}
