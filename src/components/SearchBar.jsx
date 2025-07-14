import React, { useEffect, useState } from "react";
import { useProductContext } from "../contextApi/ProductContext";

const SearchBar = ({ variant = "" }) => {
  const [inputText, setInputText] = useState("");
  const { setText } = useProductContext();

  useEffect(() => {
    const handler = setTimeout(() => {
      setText(inputText.trim().toLowerCase());
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [inputText, setText]);
  return (
    <form
      className={`w-full ${variant === "mobile" ? "animate-slideDown" : ""}`}
    >
      <div className="flex w-full rounded-lg focus-within:ring-2 focus-within:ring-blue-600">
        <input
          id="search_products"
          type="text"
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          className="p-2.5 w-full z-20 text-sm text-gray-900 bg-white rounded-s-lg border-2 border-r-0 border-gray-300  focus:outline-none"
          placeholder="Search Product"
          required
        />
        <button
          type="submit"
          className={`p-2.5 text-sm font-medium text-white bg-blue-600 rounded-e-lg border border-blue-600`}
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
