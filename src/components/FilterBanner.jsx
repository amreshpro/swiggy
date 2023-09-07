import { FaFilter } from "react-icons/fa"

const FilterBanner = () => {
  return (
    <div className="flex flex-wrap gap-4 px-4 mt-4 mb-2">

<button className="px-2 py-2 text-lg flex gap-1 border border-gray-600 text-gray-700 rounded-2xl"><span>Filter</span><FaFilter className="mt-1.5"/></button>

    </div>
  )
}
export default FilterBanner