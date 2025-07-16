import { useState } from "react";
import SearchBar from "./SearchBar";
import { useCart } from "../contextApi/CartContext";
import logo from "../assets/logo.png";

const Header = () => {
  const [openMobileSearchBar, setMobileSearchBar] = useState(false);
  const { cartItems, handleOpenClose } = useCart();
  return (
    <>
      <nav className="grid grid-cols-2 md:grid-cols-3">
        <div className="w-10">
          <img src={logo} alt="Logo" />
        </div>
        <div className="hidden md:block">
          <SearchBar variant="header" />
        </div>
        <div className="flex justify-end items-center gap-1">
          <div
            className="md:hidden p-1 hover:bg-gray-100 text-gray-400 rounded-sm cursor-pointer flex justify-center items-center"
            onClick={() => setMobileSearchBar((prev) => !prev)}
          >
            <svg
              className="w-6 h-6"
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
          </div>
          <div
            className="relative p-1 hover:bg-gray-100 text-gray-400 rounded-sm hover:cursor-pointer"
            onClick={handleOpenClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute z-30 -right-0.5 -top-0.5 rounded-[100%] p-1 w-3 h-3 text-white bg-red-600 text-[8px] flex justify-center items-center animate-wiggleY">
                {cartItems.length}
              </span>
            )}
          </div>
          <div className="p-1.5 hover:bg-gray-100 text-gray-400 rounded-[100%] cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.657-10 5v3h20v-3c0-3.343-6.686-5-10-5z" />
            </svg>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden transition-[margin] duration-300 ${
          openMobileSearchBar ? "mt-6" : "mt-0"
        }`}
      >
        {openMobileSearchBar && <SearchBar variant="mobile" />}
      </div>
    </>
  );
};

export default Header;
