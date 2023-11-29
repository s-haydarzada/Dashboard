import React from "react";
import Header from "../../Components/Header";
import Cryptocurrency from "../../Components/Cryptocurrency";
import LeaderBoard from "../../Components/LeaderBoard";
import ChangeFilter from "../../Components/ChangeFilter";

const Home = () => {
  return (
    <div className="w-screen py-10 px-10">
      <Header />
      <div className="border-[1px] flex justify-between">
        <Cryptocurrency />
        <ChangeFilter/>
        <LeaderBoard />
      </div>
    </div>
  );
};

export default Home;
