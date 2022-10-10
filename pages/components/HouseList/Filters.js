import { GoSettings } from 'react-icons/go';
import { HiViewGrid } from 'react-icons/hi';
import { FaList } from 'react-icons/fa';
const Filters = ({ setView, view, filters, setFilters }) => {
    const changeHandler = (e) => {
        setFilters({
            ...filters,
            page: 0,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <div className="flex items-center gap-6 ">
                <input type="number" className="px-4 py-2 outline-none rounded-md" placeholder="Min Price..." name="minPrice" onChange={changeHandler} value={filters.minPrice} />
                <input type="number" className="px-4 py-2 outline-none rounded-md" placeholder="Max Price..." name="maxPrice" onChange={changeHandler} value={filters.maxPrice} />
                <select className="px-2 pr-8 py-2 outline-none rounded-md  border-[1px] bg-primary appearance-none 
            font-poppins font-medium bg-[url('/icons/arrow-icon-white.svg')]  bg-[center_right_0.2rem] bg-no-repeat text-base text-white "
                    name="bed" onChange={changeHandler}>
                    <option value="1" selected={filters.bed === "oneBed"} >1+ Beds</option>
                    <option value="2" selected={filters.bed === "twoBed"}>2+ Beds</option>
                    <option value="3" selected={filters.bed === "threeBed"}>3+ Beds</option>
                    <option value="4" selected={filters.bed === "fourBed"}>4+ Beds</option>
                </select>
                <select className="px-2 pr-8 py-2 outline-none rounded-md  border-[1px] bg-primary appearance-none 
            font-poppins font-medium bg-[url('/icons/arrow-icon-white.svg')]  bg-[center_right_0.2rem] bg-no-repeat text-base text-white "
                    name="bath" onChange={changeHandler}>
                    <option value="1">1+ Baths</option>
                    <option value="2">2+ Baths</option>
                    <option value="3">3+ Baths</option>
                    <option value="4">4+ Baths</option>
                </select>
                <select className="px-2 pr-8 py-2 outline-none rounded-md bg-transparent border-[1px] border-primary appearance-none 
            font-poppins font-medium bg-[url('/icons/arrow-icon.svg')]  bg-[center_right_0.2rem] bg-no-repeat text-base ">
                    <option value="anyprice">Extra</option>
                </select>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center mt-3 gap-2 transition-all duration-500">
                    <HiViewGrid color={`${view === 'grid' ? '#00B97C' : 'gray'}`} size={24} onClick={() => setView('grid')} />
                    <FaList color={`${view === 'list' ? '#00B97C' : 'gray'}`} size={22} onClick={() => setView('list')} />
                    <span className="ml-2 font-poppins font-normal">Sort By: <span className="font-semibold font-poppins text-primary">Price</span></span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-primary font-poppins font-semibold">

                    </span>
                    <span className="font-poppins font-normal">{' '}Homes Available</span>
                </div>

            </div>
        </>
    )
}
export default Filters;