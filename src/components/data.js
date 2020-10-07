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

    const abc = document.getElementById("newChart");
    new Chart(abc, {
      type: "pie",
      data: {
        labels: ["fuck yes??", "Blue", "Yellow", "Green", "Purple", "Orange"],
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
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <div className="chart">
              <canvas id="myChart" width="50" height="50" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="chart">
              <canvas id="newChart" width="50" height="50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
