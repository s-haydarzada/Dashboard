import React from 'react';
import { btc } from "../assets/images";


const CyrptoItem = ({item}) => {
  return (
    <div>
       <li className="py-3 sm:py-4">
                <div className="flex items-center pb-3">
                    <div className="flex-shrink-0 border-[1px] px-1 py-1 rounded-lg">
                        <img className="w-8 h-8 rounded-full" src={btc} alt="image"/>
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {item.name}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {item.symbol}
                        </p>
                    </div>
                    <div className="flex items-end flex-col text-sm">
                        <p className='text-end'>0.1832</p>
                        <p className='text-gray-400'>{item.priceUsd} USD</p>
                    </div>
                </div>
            </li>
    </div>
  );
}

export default CyrptoItem;
