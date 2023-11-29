import React, { useEffect, useState } from "react";
import CyrptoItem from "./CyrptoItem";
import CyrptoHeader from "./CyrptoHeader";
import { data } from "autoprefixer";

const Cryptocurrency = () => {
    const [cyrpto,setCyrpto]=useState([])

    const getData=()=>{
        fetch("https://api.coincap.io/v2/assets")
        .then(res=>res.json())
        .then(data=>{
            setCyrpto(data.data)
        })
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div className=" w-[400px] max-w-md p-4 h-[600px] bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

    <CyrptoHeader/>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto scrollbar-hide h-[400px]"
        >
            {
                cyrpto.map((item,index)=>(
                    <CyrptoItem item={item} key={index}/>
                ))
            }
        </ul>
      </div>
    </div>
  );
};

export default Cryptocurrency;
