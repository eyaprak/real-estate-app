import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Button = ({ filters, setFilters, itemLimit }) => {
    const itemPerPage = 4;
    const totalPage = Math.ceil(itemLimit / itemPerPage);
    const handlePrevPage = () => {
        if (filters.page > 0) {
            setFilters({
                ...filters,
                page: filters.page - 1,
            });
        }
    }
    const handleNextPage = () => {

        if (totalPage > filters.page) {
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
            <button className={`${totalPage === filters.page && 'opacity-50 cursor-not-allowed'} bg-primary text-white px-4 py-2 flex items-center gap-2 mt-4 text-lg font-poppins rounded-md`}
                onClick={handleNextPage} disabled={totalPage === filters.page}>
                Next Page
                <FaArrowRight />
            </button>
        </div >
    )
}

export default Button;