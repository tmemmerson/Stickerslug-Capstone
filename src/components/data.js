import React, { useEffect } from "react";
import Chart from "chart.js";

export default function Charts() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "Red",
              "Blue",
              "Yellow",
              "Green",
              "Purple",
              "Orange",
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1,
          },
        ],
      },
    });
  });
  return (
    <div className="Charts">
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
}
