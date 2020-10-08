import React, { useEffect } from "react";
import Chart from "chart.js";

export default function Chart3() {
  useEffect(() => {
    const chartOne = document.getElementById("chartOne");
    new Chart(chartOne, {
      type: "line",
      data: {
        labels: ["", "Q1", "Q2", "Q3", "Q4"],
        datasets: [
          {
            label: "quarter",
            data: [0, 21, 23, 29, 27],

            borderColor: ["Red", "Red", "Blue", "Red", "Green"],
            borderWidth: 1,
            barPercentage: 0.7,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Percentage Sales/Quarter",
        },
      },
    });
  });
  return (
    <div className="chart">
      <canvas id="chartOne" width="500" height="500" />
    </div>
  );
}
