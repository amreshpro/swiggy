
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import {removeCartItem} from '../store/cartSlice'
import { ITEM_IMG_CDN_URL } from '../constants/constant'

const CartCard = (props) => {
const dispatch = useDispatch()

function deleteThisItem(){
dispatch(removeCartItem(id))
}
const {id,cloudinaryImageId,name} = props


  return (
    <div className='px-2 flex justify-between items-center gap-4'>
<div className="carbox flex gap-2 items-center">
<div className="img">
<img src={ITEM_IMG_CDN_URL + cloudinaryImageId } alt={name} className="w-16 h-16 object-fill rounded-xl shadow-lg" />

</div>
<h1>{name}</h1>
</div>
<div className="text">
  <button onClick={()=>deleteThisItem(`${id}`)}><RiDeleteBin6Line className='text-red-500 text-xl'/></button>
</div>

    </div>
  )
}
export default CartCard