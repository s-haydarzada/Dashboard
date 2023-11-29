import React, { useState, useEffect } from "react";
import { card1 } from "../assets/images";
import { IoWalletOutline } from "react-icons/io5";

const CyrptoHeader = () => {

  return (
    <div>
      <div className="flex items-center mb-5">
        <IoWalletOutline className="text-2xl mr-2"/>
        <h1 className="text-xl">Wallet Cryptocurrency</h1>
      </div>
      <div className="z-0 relative flex justify-between rounded-lg bg-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-full max-h-32 md:flex-row">
        <div className="flex flex-col justify-start p-4">
          <div className="flex items-center">
            <div className="text-white">
              <h4>Total Assets</h4>
              <b>3976.11</b>
              <p>0.234156 BTC</p>
            </div>
            <div className="text-white">
              <details className="dropdown">
                <summary className="m-1 btn w-10">USD</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-14">
                    <li>
                      USD
                    </li>
                </ul>
              </details>
            </div>
          </div>
        </div>
        <img
          className="z-10 absolute bottom-1 right-0 object-cover rounded-t-lg h-32 md:w-28 md:rounded-none md:rounded-l-lg"
          src={card1}
          alt=""
        />
      </div>
    </div>
  );
};

export default CyrptoHeader;
