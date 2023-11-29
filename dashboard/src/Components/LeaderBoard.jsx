import React, { useState, useEffect } from "react";
import { GiTrophyCup } from "react-icons/gi";
import { btc } from "../assets/images";

const LeaderBoard = () => {
  const [cyrpto, setCyrpto] = useState([]);
  console.log(cyrpto)

  const getData = () => {
    fetch("https://api.coincap.io/v2/assets")
      .then((res) => res.json())
      .then((data) => {
        setCyrpto(data.data);
        const sortedData = data.data.sort((a, b) => a.rank - b.rank);
        const top11Data = sortedData.slice(0, 11);
        setCyrpto(top11Data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[350px]">
      <div className="flex items-center py-7 px-2 border-[1px]">
        <GiTrophyCup className="text-3xl mr-3" />
        <h1 className="text-xl">Leaderboard</h1>
      </div>
      <div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto">
          {cyrpto.map((item,index) => (
            <li key={item.id} className={`py-3 sm:py-4 list-none border-[1px] px-2 mb-2 rounded-md ${
                index === 0 ? "bg-black text-white" : ""
            }`}
            >
              <div className="flex items-center pb-3">
                <div className="flex-shrink-0 border-[1px] w-6 h-6 rounded-full">
                  <p className="flex items-center justify-center text-black text-xs w-6 h-6 bg-amber-200 rounded-full">
                    {item.rank}
                  </p>
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium truncate dark:text-white">
                    {item.name}
                  </p>
                </div>
                <div className="flex items-center text-sm ml-4">
                  <p className="text-end mr-2">Wallet Increase:</p>
                  <p className="border-[1px] py-1 px-3 text-white bg-green-500 rounded-md text-center">
                    60.34$
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoard;
