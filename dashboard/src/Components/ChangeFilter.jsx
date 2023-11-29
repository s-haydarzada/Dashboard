import React, { useState,useEffect } from "react";
import { CgArrowsScrollV } from "react-icons/cg";
import { CiStar } from "react-icons/ci";

const ChangeFilter = () => {
  const [field, setField] = useState([]);

  const getData = () => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then((data) => {
        
        setField(data.data);
      });
  };



  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[400px] max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="flex items-center text-xs leading-none text-gray-900 dark:text-white">
          Names <CgArrowsScrollV />
        </h5>
        <div className="flex items-center justify-end">
          <button className="flex items-center justify-center text-xs">
            Price <CgArrowsScrollV />
          </button>
          <button onClick={()=>handleClick()} className="flex items-center justify-center text-xs">
            Change24h <CgArrowsScrollV />
          </button>
        </div>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto scrollbar-hide h-[400px]"
        >
          {
            field.map((item,index)=>(
                <li key={index} className="list-none border-[1px] px-5 mb-2 rounded py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CiStar className="text-xl" />
              </div>
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {item.symbol}
                </p>
              </div>
              <div className="flex items-center justify-between text-base font-semibold text-gray-900 dark:text-white">
                <p className="mx-12">$320</p>
                <p className="border-[1px] py-1 px-3 text-white bg-green-500 rounded-md text-center">
                  60.34$
                </p>
              </div>
            </div>
          </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default ChangeFilter;
