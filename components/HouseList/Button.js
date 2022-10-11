import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Button = ({ filters, setFilters, itemLimit }) => {
    const totalPage = itemLimit;

    const handlePrevPage = () => {
        if (filters.page > 0) {
            setFilters({
                ...filters,
                page: filters.page - 1,
            });
        }
    }
    const handleNextPage = () => {
        console.log(totalPage);
        console.log(filters.page)
        if (totalPage > filters.page + 1) {
            setFilters({
                ...filters,
                page: filters.page + 1,
            })
        }
    }
    return (
        <div className="flex items-center gap-4">
            <button className={`${filters.page === 0 && 'opacity-50 cursor-not-allowed'} bg-primary text-white px-4 py-2 flex items-center gap-2 mt-4 text-lg font-poppins rounded-md`}
                onClick={handlePrevPage} disabled={filters.page === 0}>
                <FaArrowLeft />
                Prev Page
            </button>
            <button className={`${totalPage === filters.page + 1 && 'opacity-50 cursor-not-allowed'} bg-primary text-white px-4 py-2 flex items-center gap-2 mt-4 text-lg font-poppins rounded-md`}
                onClick={handleNextPage} disabled={totalPage === filters.page + 1}>
                Next Page
                <FaArrowRight />
            </button>
        </div >
    )
}

export default Button;