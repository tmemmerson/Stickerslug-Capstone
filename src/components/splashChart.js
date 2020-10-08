import React, { useEffect } from "react";
import Chart from "chart.js";

export default function Chart2() {
  useEffect(() => {
    const chartSix = document.getElementById("chartSix");
    new Chart(chartSix, {
      type: "doughnut",
      data: {
        labels: [
          "gym bag",
          "v-neck",
          "crewneck",
          "onesie",
          "w. tank",
          "m. tank",
          "tote",
        ],
        datasets: [
          {
            label: "product",
            data: [346, 1097, 437, 159, 192, 466, 118],
            backgroundColor: [
              "#FFD6A5",
              "#FDFFB6",
              "#CAFFBF",
              "#9BF6FF",
              "#A0C4FF",
              "#BDB2FF",
              "#FFC6FF",
            ],
            borderColor: [
              "#FFD6A5",
              "#FDFFB6",
              "#CAFFBF",
              "#9BF6FF",
              "#A0C4FF",
              "#BDB2FF",
              "#FFC6FF",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Apparel & Accesories",
          defaultFontSize: 26,
        },
      },
    });
  });
  return (
    <div className="chart">
      <canvas id="chartSix" width="500" height="500" />
    </div>
  );
}
