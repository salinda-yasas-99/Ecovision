import React from "react";
import Welcome from "../components/Welcome";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router";

const Notifications = () => {
  const navigate = useNavigate();

  const handleRowClick = (item) => {
    navigate(`/notification/${item.key}`, { state: { item } });
  };

  var notifications = [
    {
      type: "critical",
      para1:
        "URGENT Oxygen levels have dropped below safe thresholds, creating a hazardous environment for personnel and potentially compromising safety. Immediate action is required to prevent health risks.",
      para2:
        "Contact designated safety officers and follow established procedures to address the oxygen deficiency. Continuous monitoring is essential until normal oxygen levels are restored and the area is deemed safe for re-entry.",
      subject: "Critical Warning: - Low Oxygen Levels",
      date: "Sep 12, 2024 - 17:41",
      status: "Pending",
    },
    {
      type: "critical",
      para1:
        "URGENT Oxygen levels have dropped below safe thresholds, creating a hazardous environment for personnel and potentially compromising safety. Immediate action is required to prevent health risks.",
      para2:
        "Contact designated safety officers and follow established procedures to address the oxygen deficiency. Continuous monitoring is essential until normal oxygen levels are restored and the area is deemed safe for re-entry.",
      subject: "Critical Warning: NO2 Levels Exceeding Limits",
      date: "Sep 12, 2024 - 17:41",
      status: "Open",
    },
    {
      type: "Precautionary",
      para1:
        "URGENT Oxygen levels have dropped below safe thresholds, creating a hazardous environment for personnel and potentially compromising safety. Immediate action is required to prevent health risks.",
      para2:
        "Contact designated safety officers and follow established procedures to address the oxygen deficiency. Continuous monitoring is essential until normal oxygen levels are restored and the area is deemed safe for re-entry.",
      subject: "Precautionary Measure Alert - PM2.5 Levels",
      date: "Sep 12, 2024 - 17:41",
      status: "Done",
    },
  ];
  return (
    <div className="flex flex-col min-h-[100vh] ml-[220px]">
      <Welcome />
      <div className="w-[322px] ml-14 h-[26px] text-[#1b0b5d] text-2xl font-bold font-['Exo'] leading-9 mb-10 mt-10">
        Notifications
      </div>
      <div className="flex flex-col items-center p-3">
        <table className="w-[1200px] text-sm text-left rtl:text-right rounded-lg overflow-hidden">
          <thead className="text-xs text-white bg-[#4d4b6c]">
            <tr>
              <th
                colspan="3"
                className=" px-6 py-5 h-[15.75px] text-white text-base font-semibold font-['Rubik'] leading-normal bg-[#3e3b64]"
              >
                Notification Status
              </th>
            </tr>
          </thead>
          <tbody>
            {notifications?.map((item, key) => (
              <tr
                id={key}
                key={item.key}
                onClick={() => handleRowClick(item)} // Handle row click
                className={`${
                  key % 2 === 0 ? "bg-[#4d4b6c]" : "bg-[#3e3b64] "
                } border-b text-white font-medium`}
              >
                <td className="px-6 py-4 flex flex-row items-center">
                  <span className="mr-3">
                    <AiOutlineExclamationCircle
                      className={`${
                        item.type === "critical"
                          ? "text-[#f44336]"
                          : "text-[#ff9800]"
                      } w-[30px] h-[30px]`}
                    />
                  </span>
                  {item.subject}
                </td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px- py-4">
                  <div
                    className={`${
                      item.status === "Pending"
                        ? "bg-[#ff949f]"
                        : item.status === "Open"
                        ? "bg-[#59c5f7]"
                        : "bg-[#53dfb5]"
                    } flex justify-center p-2 w-[80px] rounded-lg text-white`}
                  >
                    {item.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Notifications;
