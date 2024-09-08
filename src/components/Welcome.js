import React from "react";
import Search from "./Search";
import { IoIosNotificationsOutline } from "react-icons/io";
import profileImg from "../assets/profile.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="flex flex-row justify-between items-center md:w-[96.4%] md:h-[90px] pl-4">
      <div className="flex flex-col ml-10">
        <div>
          <span className="text-[#1b0b5d] text-2xl font-bold">
            Welcome Back
          </span>
          <span className="ml-3 text-[#54bdd2] text-2xl font-bold font-['Exo'] leading-9">
            Vinal
          </span>
        </div>
        <div className="w-[304px] h-[26px] text-[#1c0b5d] text-[15px] font-normal font-['Rubik'] leading-snug">
          Here are your daily emission updates.
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-5 items-center w-[800px]">
        <Search />
        <div className="bg-[#91cbf5] p-3 rounded-full ">
          <Link to={"/notifications"}>
            <IoIosNotificationsOutline className="w-[20px] h-[20px]" />
          </Link>
        </div>
        <div className="pr-8 flex flex-row gap-x-5">
          <div>
            <img src={profileImg} className="h-[60px]" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="w-[141px] h-[22px] text-[#130a0a] text-base font-bold font-['Exo'] leading-normal">
              Vinal Munasinghe
            </div>
            <div className="text-[#111214]/90 text-xs font-normal font-['Rubik']">
              Administrator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
