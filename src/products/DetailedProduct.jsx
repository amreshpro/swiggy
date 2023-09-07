import { BsFillStarFill }  from 'react-icons/bs'
import { ITEM_IMG_CDN_URL } from '../constants/constant'

// eslint-disable-next-line react/prop-types
const ProductCard = ({name,cloudinaryImageId,cuisines,avgRating} ) => {

   
  return (
    <div className="  w-64 h-max hover:scale-90">
<div className="img">
  <img src={ITEM_IMG_CDN_URL + cloudinaryImageId } alt={name} className="w-56 h-40 object-fill rounded-xl shadow-lg" />
</div>
<div className="text flex flex-col justify-start gap-0.5 mt-1 ml-2">
  <h1 className='mt-0.5 text-gray-800 font-bold'>{name}</h1>
    <p className=" text-[15px] px-1 py-0.5 w-max h-max flex gap-2  "><BsFillStarFill className="mt-0.5 bg-green-700 p-1 text-xl text-white rounded-full" /> {avgRating}</p>
  <p className="text-gray-600 text-sm flex flex-wrap ">{cuisines?.map((i)=> i).join(", ")}</p>

</div>
    </div>
  )
}
export default ProductCard