import React, { useEffect } from "react";
import Chart from "chart.js";

export default function Charts() {
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
            backgroundColor: ["", "Red", "Blue", "Yellow", "Green"],
            borderColor: ["", "Red", "Blue", "Yellow", "Green"],
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

    const chartTwo = document.getElementById("chartTwo");
    new Chart(chartTwo, {
      type: "doughnut",
      data: {
        labels: ["", "Etsy", "Amazon", "Amazon CA", ".Com", "eBay"],
        datasets: [
          {
            label: "channel",
            data: [0, 3107, 917110, 25822, 4542, 53810],
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

    const chartThree = document.getElementById("chartThree");
    new Chart(chartThree, {
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
    const chartFour = document.getElementById("chartFour");
    new Chart(chartFour, {
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
    const chartFive = document.getElementById("chartFive");
    new Chart(chartFive, {
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
    const chartSix = document.getElementById("chartSix");
    new Chart(chartSix, {
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
    const chartSeven = document.getElementById("chartSeven");
    new Chart(chartSeven, {
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
    const chartEight = document.getElementById("chartEight");
    new Chart(chartEight, {
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
    const chartNine = document.getElementById("chartNine");
    new Chart(chartNine, {
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
    <div className="jumbotron">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <h1>THIS IS MY PERFECT HEADER</h1>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="jumbotron jumbotron-fluid">
            <div className="row">
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartOne" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartTwo" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartThree" width="50" height="50" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartFour" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartFive" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartSix" width="50" height="50" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartSeven" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartEight" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="chart">
                  <canvas id="chartNine" width="50" height="50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
