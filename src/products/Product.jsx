
import ProductCard from './ProductCard'


import { FilterBanner, HotBanner,Shimmer } from "../components"
import useFetch from "../utils/useFetch"



const Product = () => {
   
const [product,isLoading] = useFetch()
console.log(product)
  return (

<>
<HotBanner/>
<FilterBanner/>


{

isLoading ? <Shimmer/> : <div className="container">


<h1 className="text-gray-800 mt-8 text-center text-2xl font-semibold my-8">Order Your Food Now</h1>
    <div className="flex flex-wrap justify-center gap-6 px-8">
{

    product?.map((item)=>{
     
       return(
        <div className="flex flex-wrap gap-4 justify-center px-2 py-2" key={item.data.id}>
     <ProductCard  {...item.data } />
        </div>
       )
    })
}

        </div>

   </div>

}

   </>
  )
}
export default Product