import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const DynamicChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.employee_salary));
          empAge.push(parseInt(dataObj.employee_age));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "Salary",
              data: empSal,
              backgroundColor: ["rgba(75, 92, 192, 0.6)"],
              borderWidth: 2
            }
          ]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className="dynamic">
      <h2>Dynamic Chart Js Example</h2>
      <div>
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default DynamicChart;
