import { BsFillStarFill }  from 'react-icons/bs'
import { ITEM_IMG_CDN_URL } from '../constants/constant'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'


// eslint-disable-next-line react/prop-types
const DetailedProduct = (prop ) => {
const {name,cloudinaryImageId,cuisines,avgRating}=prop
console.log(name)
   
const dispatch = useDispatch()
function addToCartHandler(){
  dispatch(add({...prop}))
}


  return (
    <div className="  w-full flex justify-stretch  gap-8 hover:scale-90 px-2 py-2">
<div className="img">
  <img src={ITEM_IMG_CDN_URL + cloudinaryImageId } alt={name} className="w-96 h-72 object-fill rounded-xl shadow-lg" />
</div>
<div className="text flex flex-col justify-start gap-0.5 mt-1 ml-2">
  <h1 className='mt-0.5 text-gray-800 font-bold'>{name}</h1>
    <p className=" text-[15px] px-1 py-0.5 w-max h-max flex gap-2  "><BsFillStarFill className="mt-0.5 bg-green-700 p-1 text-xl text-white rounded-full" /> {avgRating}</p>
  <p className="text-gray-600 text-sm flex flex-wrap ">{cuisines?.map((i)=> i).join(", ")}</p>

<button className='bg-orange-500 text-white px-2 py-2 w-max text-xl rounded-lg mt-4' onClick={addToCartHandler}>Add to Cart</button>
</div>
    </div>
  )
}
export default DetailedProduct