import React from "react";
import "./App.css";
import DynamicChart from "./DynamicChart";
import Chart from "./Chart";

const App = () => {
  return (
    <div className="app">
      <DynamicChart />
      <Chart />
    </div>
  );
};

export default App;
