import React from "react";
import Welcome from "../components/Welcome";
import { FaFire } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import graph from "../assets/Graph.png";

const DashBoard = () => {
  var dashDetails = [
    {
      day: "Saturday,August 31",
      gasdetails: [
        {
          gas: "CO",
          percentage: "12.5%",
        },
        {
          gas: "NO",
          percentage: "10.5%",
        },
        {
          gas: "SO",
          percentage: "2.8%",
        },
      ],
      weather: "90%",
      temp1: "28",
      temp2: "25",
    },
    {
      day: "Saturday,August 31",
      gasdetails: [
        {
          gas: "CO",
          percentage: "12.5%",
        },
        {
          gas: "NO",
          percentage: "10.5%",
        },
        {
          gas: "SO",
          percentage: "2.8%",
        },
      ],
      weather: "90%",
      temp1: "28",
      temp2: "25",
    },
    {
      day: "Saturday,August 31",
      gasdetails: [
        {
          gas: "CO",
          percentage: "12.5%",
        },
        {
          gas: "NO",
          percentage: "10.5%",
        },
        {
          gas: "SO",
          percentage: "2.8%",
        },
      ],
      weather: "90%",
      temp1: "28",
      temp2: "25",
    },
  ];
  return (
    <div className="flex flex-col min-h-[100vh] ml-[220px] mb-10">
      <Welcome />
      <div className="bg-[#3e3b64] mx-[3%] flex flex-col p-5 rounded-lg py-20 mt-10">
        <table className="w-[1200px] text-sm text-white text-left rtl:text-right rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-5">
                Day
              </th>
              <th scope="col" className="px-6 py-5">
                Pollution level
              </th>
              <th scope="col" className="px-6 py-5">
                Weather
              </th>
              <th scope="col" className="px-6 py-5">
                Temperature
              </th>
            </tr>
          </thead>
          <tbody>
            {dashDetails?.map((item, key) => (
              <tr id={key} key={item.key}>
                <td className="px-6 py-4">{item.day}</td>
                <td className="px-6 py-4 flex flex-row gap-x-2">
                  {item.gasdetails?.map((gasItem, key) => (
                    <div className=" flex flex-row">
                      <div className="bg-[#ffe187] w-[100px] p-4 flex flex-row justify-items-end items-center rounded-tl-md rounded-bl-md">
                        {gasItem.gas}
                        <FaFire />
                      </div>
                      <div className="bg-[#635695] w-[100px] flex items-center justify-center rounded-tr-md rounded-br-md">
                        {gasItem.percentage}
                      </div>
                    </div>
                  ))}
                </td>
                <td className="px- py-4">
                  <div className="flex flex-row gap-x-2">
                    <FaCloudSun />
                    {item.weather}
                  </div>
                </td>
                <td className="px- py-4">
                  <div className="flex flex-row gap-x-4">
                    <div>
                      {item.temp1}
                      <sup>0</sup>
                    </div>
                    <div>
                      {item.temp2}
                      <sup>0</sup>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row gap-x-5 mt-10 mx-[3%] ">
        <div className="bg-[#3e3b64] w-[50%] flex flex-col p-4 rounded-lg">
          <div className="flex flex-row justify-between">
            <div className="text-white font-bold">Total Emission </div>
            <div className="flex flex-row items-center bg-[#53dfb5] rounded-md p-1">
              <FaLongArrowAltUp />
              <span className="font-bold">3.6%</span>
            </div>
          </div>
          <div className="text-[#e9ecef] text-[64px] font-normal font-['Rubik'] py-5">
            9,040 kt
          </div>
        </div>
        {/* div 2 */}
        <div className="bg-[#3e3b64] w-[50%] flex flex-col p-4 rounded-lg">
          <div className="text-white font font-bold">Emission this week</div>
          <div className="text-white mt-4">17 / 20</div>
          <div className="flex flex-row justify-between">
            <div className="text-white">
              <img src={graph} className="h-[100px]" />
            </div>
            <div className="flex flex-col text-white gap-y-4">
              <div>NO2</div>
              <div>CO</div>
              <div>SO2</div>
            </div>
            <div className="flex flex-col text-white gap-y-2">
              <div className="bg-[#53dfb5] rounded-lg py-1 px-5">17</div>
              <div className="bg-[#ffb703] rounded-lg py-1 px-5">2</div>
              <div className="bg-[#ff9742] rounded-lg py-1 px-5">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
