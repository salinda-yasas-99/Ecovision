import React from "react";
import Welcome from "../components/Welcome";
import ReactApexChart from "react-apexcharts";

const LiveStatus = () => {
  const series = {
    monthDataSeries1: {
      prices: [8100, 8200, 8300, 8400, 8500, 8600, 8700, 8800, 8900, 9000],
      dates: [
        "2017-11-23T00:00:00.000Z",
        "2017-11-24T00:00:00.000Z",
        "2017-11-25T00:00:00.000Z",
        "2017-11-26T00:00:00.000Z",
        "2017-11-27T00:00:00.000Z",
        "2017-11-28T00:00:00.000Z",
        "2017-11-29T00:00:00.000Z",
        "2017-11-30T00:00:00.000Z",
        "2017-12-01T00:00:00.000Z",
        "2017-12-02T00:00:00.000Z",
      ],
    },
  };

  var options = {
    series: [
      {
        data: series.monthDataSeries1.prices,
      },
    ],
    chart: {
      height: 350,
      type: "line",
      id: "areachart-2",
    },
    annotations: {
      yaxis: [
        {
          y: 8200,
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              color: "#fff",
              background: "#00E396",
            },
            text: "Support",
          },
        },
        {
          y: 8600,
          y2: 9000,
          borderColor: "#000",
          fillColor: "#FEB019",
          opacity: 0.2,
          label: {
            borderColor: "#333",
            style: {
              fontSize: "10px",
              color: "#333",
              background: "#FEB019",
            },
            text: "Y-axis range",
          },
        },
      ],
      xaxis: [
        {
          x: new Date("23 Nov 2017").getTime(),
          strokeDashArray: 0,
          borderColor: "#775DD0",
          label: {
            borderColor: "#775DD0",
            style: {
              color: "#fff",
              background: "#775DD0",
            },
            text: "Anno Test",
          },
        },
        {
          x: new Date("26 Nov 2017").getTime(),
          x2: new Date("28 Nov 2017").getTime(),
          fillColor: "#B3F7CA",
          opacity: 0.4,
          label: {
            borderColor: "#B3F7CA",
            style: {
              fontSize: "10px",
              color: "#fff",
              background: "#00E396",
            },
            offsetY: -10,
            text: "X-axis range",
          },
        },
      ],
      points: [
        {
          x: new Date("01 Dec 2017").getTime(),
          y: 8607.55,
          marker: {
            size: 8,
            fillColor: "#fff",
            strokeColor: "red",
            radius: 2,
            cssClass: "apexcharts-custom-class",
          },
          label: {
            borderColor: "#FF4560",
            offsetY: 0,
            style: {
              color: "#fff",
              background: "#FF4560",
            },

            text: "Point Annotation",
          },
        },
        {
          x: new Date("08 Dec 2017").getTime(),
          y: 9340.85,
          marker: {
            size: 0,
          },
          image: {
            path: "../../assets/images/ico-instagram.png",
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      padding: {
        right: 30,
        left: 20,
      },
    },
    title: {
      text: "Line with Annotations",
      align: "left",
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
      type: "datetime",
    },
  };
  var chart = new ReactApexChart(document.querySelector("#chart"), options);

  var AirDetails = [
    {
      gas: "O2",
      condition: "0.004t",
      status: "Normal",
    },
    {
      gas: "O2",
      condition: "0.004t",
      status: "Middle",
    },
    {
      gas: "O2",
      condition: "0.004t",
      status: "Exceed",
    },
    {
      gas: "O2",
      condition: "0.004t",
      status: "Middle",
    },
  ];

  return (
    <div className="flex flex-col min-h-[100vh] ml-[220px]">
      <Welcome />
      <div>
        {/* {chart.render()} */}
        <chart
          options={options}
          series={options.series.data}
          type="line"
          width="500"
        />
      </div>
      <div className="flex flex-col items-center p-3">
        <table className="w-[1200px] text-sm text-left rtl:text-right rounded-lg overflow-hidden">
          <thead className="text-xs text-white bg-[#4d4b6c]">
            <tr>
              <th
                colspan="3"
                className=" px-6 py-5 h-[15.75px] text-white text-base font-semibold font-['Rubik'] leading-normal bg-[#3e3b64]"
              >
                Air Quality Live
              </th>
            </tr>
            <tr>
              <th scope="col" className="px-6 py-5">
                Gases
              </th>
              <th scope="col" className="px-6 py-5">
                Air Concentration
              </th>
              <th scope="col" className="px-6 py-5">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {AirDetails?.map((item, key) => (
              <tr
                id={key}
                key={item.key}
                className={`${
                  key % 2 === 0 ? "bg-[#3e3b64]" : "bg-[#4d4b6c]"
                } border-b text-white font-medium`}
              >
                <td className="px-6 py-4 whitespace-nowrap">{item.gas}</td>

                <td className="px-6 py-4">{item.condition}</td>
                <td className="px- py-4">
                  <div
                    className={`${
                      item.status === "Normal"
                        ? "bg-[#53dfb5]"
                        : item.status === "Middle"
                        ? "bg-[#59c5f7]"
                        : "bg-[#ff949f]"
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

export default LiveStatus;
