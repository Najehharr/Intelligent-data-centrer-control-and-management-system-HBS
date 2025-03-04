import React from "react";
import { Card } from "@mui/material";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// Function to generate time-series data
const generateDayWiseTimeSeries = (startTimestamp: number, count: number, range: { min: number; max: number }) => {
  let series = [];
  let timestamp = startTimestamp;

  for (let i = 0; i < count; i++) {
    let value = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
    series.push([timestamp, value]);
    timestamp += 86400000; // Move forward by one day
  }

  return series;
};

const RecentOrders = () => {
  // Chart configuration
  const chartOptions: ApexOptions = {
    chart: {
      type: "area",
      height: 350,
      stacked: true,
      events: {
        selection: function (chart, e) {
          console.log(new Date(e.xaxis.min));
        },
      },
    },
    colors: ["#008FFB", "#00E396", "#CED4DC"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },
    xaxis: {
      type: "datetime",
    },
  };

  // Chart series data
  const series = [
    {
      name: "South",
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "North",
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 20,
      }),
    },
    {
      name: "Central",
      data: generateDayWiseTimeSeries(new Date("11 Feb 2017 GMT").getTime(), 20, {
        min: 10,
        max: 15,
      }),
    },
  ];

  return (
    <Card sx={{ padding: "2rem" }}>
      <Chart options={chartOptions} series={series} type="area" height={350} />
    </Card>
  );
};

export default RecentOrders;
