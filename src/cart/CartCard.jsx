
import {RiDeleteBin6Line} from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import {remove} from '../store/cartSlice'
import { ITEM_IMG_CDN_URL } from '../constants/constant'

const CartCard = ({id,cloudinaryImageId}) => {
const dispatch = useDispatch()

function deleteThisItem(id){
dispatch(remove(id))
}

  return (
    <div className='px-2 flex justify-between gap-4'>
<div className="img">
  <img src={ITEM_IMG_CDN_URL+cloudinaryImageId} alt="" className="w-16 h-16" />
</div>
<div className="text">
  <button onClick={()=>deleteThisItem(id)}><RiDeleteBin6Line className='text-red-500'/></button>
</div>

    </div>
  )
}
export default CartCard