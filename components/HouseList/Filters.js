import { GoSettings } from 'react-icons/go';
import { HiViewGrid } from 'react-icons/hi';
import { FaList } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react';
const Filters = ({ setView, view, filters, setFilters, itemLimit }) => {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const changeHandler = (e) => {
        setFilters({
            ...filters,
            page: 0,
            [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        if (isMobile) setView('grid')
    }, [isMobile])
    return (
        <>
            <div className="flex items-center md:gap-6 gap-2  flex-wrap">
                <input type="number" className="px-4 py-2 outline-none rounded-md flex-1 md:flex-none" placeholder="Min Price..." name="minPrice" onChange={changeHandler} value={filters.minPrice} />
                <input type="number" className="px-4 py-2 outline-none rounded-md flex-1 md:flex-none" placeholder="Max Price..." name="maxPrice" onChange={changeHandler} value={filters.maxPrice} />
                <div className=" flex items-center md:gap-6 gap-2">
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
            font-poppins font-medium bg-[url('/icons/arrow-icon.svg')]  bg-[center_right_0.2rem] bg-no-repeat text-base">
                        <option value="anyprice">Extra</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center  gap-2 transition-all duration-500">
                    <HiViewGrid color={`${view === 'grid' ? '#00B97C' : 'gray'}`} size={24} onClick={() => setView('grid')} />
                    {!isMobile && <FaList color={`${view === 'list' ? '#00B97C' : 'gray'}`} size={22} onClick={() => setView('list')} />}
                    <span className="ml-2 font-poppins font-normal">Sort By: <span className="font-semibold font-poppins text-primary">Price</span></span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-primary font-poppins font-semibold">
                        {itemLimit}
                    </span>
                    <span className="font-poppins font-normal">{' '}Homes Available</span>
                </div>

            </div>
        </>
    )
}
export default Filters;