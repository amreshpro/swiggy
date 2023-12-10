import ProductCard from "./ProductCard";
import {  HotBanner, Shimmer } from "../components";
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { addDataInProductBucket } from "../store/productSlice"

const Product = () => {
const dispatch = useDispatch()
      const { data,isLoading} = useQuery(['fetch-data'],async()=>{
        return await axios("https://swiggy-api.vercel.app/food")
    },{
    enable:true
    }
    )


dispatch(addDataInProductBucket(data?.data))
const product = useSelector((state)=>state.product)

if(isLoading) return <Shimmer/>
  return (
    <>
      <HotBanner />
      {/* <FilterBanner /> */}
     
        <div className="container">
          <h1 className="text-gray-800 mt-8 text-center text-2xl font-semibold my-8">
            Order Your Food Now
          </h1>
       <div className="products">
       <div className="flex flex-wrap justify-center gap-6 px-8">

          
{product?.map((item) => {
  return (
    <div
      className="flex flex-wrap gap-4 justify-center px-2 py-2"
      key={item.data.id}
    >
      <ProductCard {...item.data} />
    </div>
  );
})}



</div>
       </div>
        </div>
      
    </>
  );
};
export default Product;
