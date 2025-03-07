import { Card } from "@mui/material";
import { ApexOptions } from "apexcharts"; // Ensure correct import
import Chart from "react-apexcharts";

const ApexChart = () => {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line", // ✅ Explicitly use a valid type from ApexOptions
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.5,
      },
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Température moyenne haute et basse",
      align: "left",
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Mois",
      },
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  };

  const series = [
    {
      name: "Haut- 2013",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Faible - 2013",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ];

  return (
    <Card sx={{ padding: 2 }}>
      <Chart options={options} series={series} type="line" height={350} />
    </Card>
  );
};

export default ApexChart;
