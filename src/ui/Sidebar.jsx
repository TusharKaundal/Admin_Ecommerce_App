"use client";
import React from "react";

const SideBar = ({ children, title, handleClose, isOpen }) => {
  return (
    <div
      className={`absolute min-h-screen inset-0 z-40 transition-all duration-300 ease-in-out ${
        isOpen
          ? "translate-x-0 visible"
          : "translate-x-full pointer-events-none invisible"
      }`}
      onClick={handleClose}
    >
      <aside
        id="sidebar"
        className={`fixed top-0 right-0 bottom-0 bg-white opacity-100 z-100 w-70 sm:w-80`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex min-h-screen grow flex-col overflow-y-auto bg-white shadow-xl px-4 py-6 sm:px-6 animate-slideDown h-full">
          <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-gray-900">{title}</h2>
            <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                onClick={handleClose}
                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500 hover:cursor-pointer"
              >
                <span className="absolute -inset-0.5" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </button>
            </div>
          </div>
          {children}
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
