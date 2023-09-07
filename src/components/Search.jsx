import  { useState } from "react";
import { BiSearch } from "react-icons/bi";



const SearchBox = () => {
    const [inputText, setInputText] = useState("");

  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputText);

        emptyTheInputBox();
    };

    const onKeyUpHandler = (e) => {
        if (e.key === "Enter" || e.which === 14) {
     
            emptyTheInputBox();
        }
    };

    const emptyTheInputBox = () => {
        setInputText("");
    };

    return (
        <div className="flex justify-center flex-wrap  items-center mt-5 pt-5 xsm:gap-2 ">
            <div className="inputBoxContainer  w-max ml-1 text-2xl border border-orange-400 outline-none  ">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyUp={onKeyUpHandler}
                    autoFocus={true}
                    name="search"
                    className="bg-white zsm:m-1 text-orange-500 placeholder-gray-400 h-full px-1 py-[5px] outline-none "
                    placeholder="Search food online ..."
                />
            </div>
            <div className="  w-max  text-2xl    ">
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