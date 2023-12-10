/* eslint-disable react/prop-types */
import { BsFillStarFill }  from 'react-icons/bs'
import { ITEM_IMG_CDN_URL } from '../constants/constant'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import  toast from 'react-hot-toast';


const ProductCard = (props ) => {
 

const dispatch = useDispatch()

  
  const {name,cloudinaryImageId,cuisines,avgRating,} = props
  
function addToCartHandler(){
dispatch(add(props))
toast.success("Add to cart successfully",{
  position: "bottom-right",
  autoClose: 2500,
})

}





  return (
    <div  className="w-64 h-max hover:scale-95">
<button  className="img" >
  <img src={ITEM_IMG_CDN_URL + cloudinaryImageId } alt={name} className="w-56 h-40 object-fill rounded-xl shadow-lg" />
</button>
<div className="text flex flex-col justify-start gap-0.5 mt-1 ml-2">
  <h1 className='mt-0.5 text-gray-800 font-bold'>{name}</h1>
    <p className=" text-[15px] px-1 py-0.5 w-max h-max flex gap-2  "><BsFillStarFill className="mt-0.5 bg-green-700 p-1 text-xl text-white rounded-full" /> {avgRating}</p>

  <p className="text-gray-600 text-sm flex flex-wrap ">{cuisines?.map((i)=> i).join(", ")}</p>



</div>

<button onClick={()=>addToCartHandler()} className='bg-orange-500 text-white px-2 py-1 rounded-lg mt-1 text-center '>Add to cart</button>

{/* for toast config */}
    </div>
  )
}
export default ProductCard
