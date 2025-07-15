import React from "react";
import { generatePageNumber } from "../utils/pagination";

const Pagination = React.memo(
  ({ currentPage, totalPages, updateCurrentPage }) => {
    const pages = generatePageNumber(currentPage, totalPages);

    return (
      <div className="flex rounded-md items-center gap-2 sm:gap-4 animate-[pulse_1s_forwards]">
        <button
          className={`flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:cursor-pointer hover:bg-gray-100`}
          onClick={() => updateCurrentPage(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="flex sm:hidden h-10 w-10 items-center justify-center border bg-blue-600 border-blue-600 text-white rounded-md">
          {currentPage}
        </div>
        <div className="hidden sm:inline-flex -space-x-0 divide-x divide-gray-300 border border-gray-300 rounded-md overflow-hidden">
          {pages.map((page) => (
            <PaginationNumber
              key={page}
              page={page}
              isActive={currentPage === page}
              updateCurrentPage={updateCurrentPage}
            />
          ))}
        </div>
        <button
          className={`flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:cursor-pointer hover:bg-gray-100`}
          onClick={() => updateCurrentPage(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    );
  }
);

export default Pagination;

const PaginationNumber = ({ page, isActive, updateCurrentPage }) => {
  return (
    <button
      className={`flex h-10 w-10 items-center justify-center hover:cursor-pointer ${
        isActive
          ? "bg-blue-600 border-blue-600 text-white hover:bg-blue-700"
          : "hover:bg-gray-100"
      }`}
      onClick={() => updateCurrentPage(page)}
    >
      {page}
    </button>
  );
};
