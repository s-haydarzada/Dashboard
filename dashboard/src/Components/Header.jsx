import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full mb-10">
      <h1 className="text-black text-4xl">Dashboard</h1>
      <div className="flex items-center justify-items-start">
        <div className="flex items-center justify-end mr-10">
          <h4 className="mr-3 uppercase text-xs text-gray-400">Font Scale</h4>          
          <input type="range"/>
        </div>
        <form>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
            <input
              type="search"
              id="default-search"
              className=" block w-full outline-none p-2 ps-10 text-xs text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
        </form>
        <GiHamburgerMenu className="ml-5 text-2xl rounded cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
