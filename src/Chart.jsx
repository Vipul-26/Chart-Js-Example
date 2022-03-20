import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  const chartData = {
    labels: [
      "Boston",
      "Worcester",
      "Springfield",
      "Lowell",
      "Cambridge",
      "New Bedford"
    ],
    datasets: [
      {
        label: "Population",
        data: [617594, 271045, 153060, 106519, 205162, 335072],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 99, 132, 0.6)"
        ]
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    title: {
      display: true,
      text: "Employee Performance Chart",
      fontSize: 25
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 15,
            fontColor: "#000"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            fontSize: 16,
            fontColor: "#000"
          }
        }
      ]
    }
  };

  return (
    <div className="chart">
      <h2>Chart Js Example</h2>
      <div
        style={{
          width: "60%",
          height: "400px",
          backgroundColor: "antiquewhite",
          padding: "10px",
          margin: "0 auto"
        }}
      >
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default Chart;
