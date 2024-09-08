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
      </div>
    </aside>
  );
};

export default Sidebar;
