import React from "react";
import Sidebar from "../../components/Sidebar";
import Gantt from "../../components/Gantt";

function GnattChart(props) {
  return (
    <div className="flex w-full min-h-screen bg-gray-100">
      <Sidebar />
      <Gantt />
    </div>
  );
}

export default GnattChart;
