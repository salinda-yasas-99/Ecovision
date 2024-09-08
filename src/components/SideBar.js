import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import dashIcon from "../assets/dashIcon.png";
import liveIcon from "../assets/liveStatusIcon.png";
import DeviceIcon from "../assets/devicesIcon.png";
import ReportIcon from "../assets/reportsIcon.png";
import HelpIcon from "../assets/helpIcon.png";
import settingsIcon from "../assets/settingsIcon.png";
import logoutIcon from "../assets/logOutIcon.png";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Sidebar = ({ activetab }) => {
  const Tabs = [
    { name: "Dashboard", imgSrc: dashIcon, url: "" },
    { name: "Live Status", imgSrc: liveIcon, url: "liveStatus" },
    { name: "Devices", imgSrc: DeviceIcon, url: "devices" },
    { name: "Reports", imgSrc: ReportIcon, url: "reports" },
  ];

  const TabsGrp2 = [
    { name: "Help", imgSrc: HelpIcon, url: "help" },
    { name: "Settings", imgSrc: settingsIcon, url: "settings" },
    { name: "Log out", imgSrc: logoutIcon, url: "" },
  ];

  const navigate = useNavigate();

  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#1c1943]">
        <div className="flex items-center ml-7">
          <img src={logo} className="h-[45px] w-[120px]" alt="diana" />
        </div>

        <ul className="space-y-2 font-medium md:mt-8">
          <li className="flex items-center p-2 text-[#2ca5bc] pl-7 rounded-lg group font-bold">
            GENERAL
          </li>
          {Tabs.map((tab, index) => {
            return (
              <li key={index} className={activetab === tab.url ? "active" : ""}>
                <Link
                  to={`/${tab.url.toLowerCase()}`}
                  className="flex items-center p-2 text-[#fff] ml-5 pl-3 hover:text-[#2ca5bc] hover:border-l-2 hover:border-[#2ca5bc] group"
                >
                  <img src={tab.imgSrc} className="w-5 h-5" alt={tab.name} />
                  <span className="ms-3">{tab.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2 font-medium md:mt-8">
          <li className="flex items-center p-2 text-[#2ca5bc] pl-7 rounded-lg group font-bold">
            SUPPORT
          </li>
          {TabsGrp2.map((tab, index) => {
            return (
              <li
                key={index}
                className={activetab === tab.name ? "active" : ""}
              >
                <Link
                  to={`/${tab.name.toLowerCase()}`}
                  className="flex items-center p-2 text-[#fff] ml-5 pl-3 hover:text-[#2ca5bc] hover:border-l-2 hover:border-[#2ca5bc] group"
                >
                  <img src={tab.imgSrc} className="w-5 h-5" alt={tab.name} />
                  <span className="ms-3">{tab.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row gap-x-3 ml-7 mt-[14px] border-t-2 pt-4">
          <div className="bg-[#55bed2] rounded-full p-[3px]">
            <FaFacebook className="w-[20px] h-[20px]" />
          </div>
          <div className="bg-[#55bed2] rounded-full p-[3px]">
            <FaInstagram className="w-[20px] h-[20px]" />
          </div>
          <div className="bg-[#55bed2] rounded-full p-[3px]">
            <FaTwitter className="w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="flex flex-row text-white ml-7 text-[12px] mt-[10px]">
          Privacy Policy
        </div>
        <div className="flex flex-row text-white ml-7 text-[12px] my-[2px]">
          Terms & Conditions
        </div>
        <div className="flex flex-row text-white ml-7 text-[12px]">©2024</div>
        <div className="flex flex-row text-white ml-7 text-[12px]">
          IT Technologies, Inc.
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
