'use client';
import { useState } from "react";
import { PaginationProps } from "./PaginationProps";
  
const Pagination: React.FC<PaginationProps> = ({ elements }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };
    const [totalPages, setTotalPages] = useState(Math.round(elements.length/10));
    return (
      <div className="flex justify-between items-center mt-4">
        <button 
          onClick={() => onPageChange(currentPage - 1)} 
          disabled={currentPage <= 1}
          className="px-4 py-2 mx-1 text-white bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 rounded"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button 
          onClick={() => onPageChange(currentPage + 1)} 
          disabled={currentPage >= totalPages}
          className="px-4 py-2 mx-1 text-white bg-blue-500 hover:bg-blue-700 disabled:bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    );
};

export default Pagination;