import React from "react";
import { useLocation } from "react-router";
import Welcome from "./Welcome";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const NotificationDetails = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <div className="flex flex-col min-h-[100vh] ml-[220px]">
      <Welcome />

      <div className="w-[322px] h-[26px] text-[#1b0b5d] text-2xl font-bold font-['Exo'] leading-9 ml-14 mb-14">
        Notifications
      </div>
      <div className="bg-[#3e3b64] ml-14 flex flex-col p-5 rounded-lg mr-10">
        <div className="h-[21px] pb-8 text-white text-base font-semibold font-['Rubik'] leading-normal mb-10 border-[#6c757d] border-b-2">
          Notification Status
        </div>
        <div className="flex flex-row justify-end w-full">
          <div
            className={`${
              item.status === "Pending"
                ? "bg-[#ff949f]"
                : item.status === "Open"
                ? "bg-[#59c5f7]"
                : "bg-[#53dfb5]"
            } flex justify-center p-2 w-[80px] rounded-lg text-black `}
          >
            {item.status}
          </div>
        </div>
        <div className="flex flex-row mb-10">
          <span className="mr-3">
            <AiOutlineExclamationCircle
              className={`${
                item.type === "critical" ? "text-[#f44336]" : "text-[#ff9800]"
              } w-[30px] h-[30px]`}
            />
          </span>
          <span className="text-[#fb9b9b] text-lg font-bold font-['Roboto']">
            {item.subject}
          </span>
        </div>
        <div className="text-white">{item.para1}</div>
        <div className="text-white mt-5">{item.para2}</div>
        <div className="w-[131px] h-[39px] px-[22px] py-[19px] bg-[#e42675]/80 rounded-[10px] justify-center items-center gap-2.5 inline-flex mt-16">
          <div className="text-center text-white text-lg font-medium font-['Roboto'] leading-loose">
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetails;
