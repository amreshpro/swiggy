import { useState } from "react";
import { BiSearch } from "react-icons/bi";




import { useDispatch, useSelector } from 'react-redux'
import { findSearchData } from "../store/searchSlice";
import { useNavigate } from "react-router-dom";



const SearchBox = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputText, setInputText] = useState("");

    const product = useSelector((state) => state.product)


    const handleSubmit = (e) => {
        e.preventDefault();


        let result = product.filter((item) => {

            if (item?.data.cuisines.join('').toLowerCase().match(inputText)) return item

        })


        console.log(inputText);
        console.log(result)
        dispatch(findSearchData(result))
        emptyTheInputBox();

        navigate('/searched-product')

    };

    const onKeyUpHandler = (e) => {
        if (e.key === "Enter" || e.which === 14) {
            let result = product.filter((item) => {

                if (item?.data.cuisines.join('').toLowerCase().match(inputText)) return item

            })
            console.log(inputText);
            console.log(result)
            dispatch(findSearchData(result))
            emptyTheInputBox();
            navigate('/searched-product')
            emptyTheInputBox();
        }
    };

    const emptyTheInputBox = () => {
        setInputText("");
    };



    // if(isLoading){
    //     return <Shimmer/>
    // }

    return (

        <div className="flex justify-center">
            <div className="search-box flex   m-4 outline outline-1 outline-orange-400">

                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyUp={onKeyUpHandler}
                    autoFocus={true}
                    name="search"
                    className="bg-white zsm:m-1  text-orange-400 placeholder-gray-400 h-full px-1 py-[5px] outline-none "
                    placeholder="Search food online ..."
                />


                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="bg-primary-500 h-full text-primary-900  py-[9px] px-2 sm:rounded-full bg-orange-400 "
                >
                    {<BiSearch className="text-white" />}{" "}
                </button>
            </div>
        </div>


    );
};
export default SearchBox;