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