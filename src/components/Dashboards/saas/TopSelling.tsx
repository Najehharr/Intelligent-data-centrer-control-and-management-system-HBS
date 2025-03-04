import React, { FC } from "react";
import { Card } from "@mui/material";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// TopSelling Component
const TopSelling: FC = () => {
  const [state, setState] = React.useState({
    series: [
      {
        data: [0, -41, 35, -51, 0, 62, -69, 32, -32, 54, 16, -50],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area" as "area", // Ensures correct type for 'chart.type'
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      title: {
        text: "Negative color for values less than 0",
        align: "left" as "left", // Explicitly set the alignment to "left"
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      stroke: {
        width: 0,
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: ["#FF0000", "#0000FF"], // Set red for the top and blue for the bottom
          inverseColors: false, // Keep the colors in the correct gradient order
          opacityFrom: 0.6,
          opacityTo: 0.8,
          stops: [0, 90, 100],
        },
      },
    },
  });

  return (
    <Card sx={{ padding: "2rem", height: "100%" }}>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </div>
    </Card>
  );
};

export default TopSelling;
