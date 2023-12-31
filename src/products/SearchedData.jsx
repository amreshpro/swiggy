
// import { FilterBanner, HotBanner } from "../components";
import ProductCard from "./ProductCard";

import { useSelector } from "react-redux"


export const SearchedData = () => {

    const searchProducts = useSelector((state) => state.search)

   
    return (
        <>
            {/* <HotBanner />
      <FilterBanner /> */}

            <div className="container">
                <h1 className="text-gray-800 mt-8 text-center text-2xl font-semibold my-8">
                    Order Your Food Now
                </h1>
                <div className="products">
                    <div className="flex flex-wrap justify-center gap-6 px-8">
                        {

                            searchProducts?.map((item) => {
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

