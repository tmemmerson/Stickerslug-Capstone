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

            borderColor: ["Red", "Red", "Blue", "Yellow", "Green"],
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
              "#8fc583",
              "#8fc583",
              "#bbf2af",
              "#d8f2b9",
              "#ddf0a5",
              "#e3ee8c",
            ],
            borderColor: [
              "#e3ee8c",
              "#e3ee8c",
              "#e3ee8c",
              "#e3ee8c",
              "#e3ee8c",
              "#e3ee8c",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Gross Profit/Channel",
        },
      },
    });

    const chartThree = document.getElementById("chartThree");
    new Chart(chartThree, {
      type: "bar",
      data: {
        labels: [
          "AF",
          "AU",
          "AT",
          "BE",
          "BR",
          /* "CA", */
          "CL",
          "CN",
          "HR",
          "CY",
          "CZ",
          "DK",
          "EC",
          "FI",
          "FR",
          "DE",
          "GR",
          "HK",
          "HU",
          "IS",
          "IN",
          "ID",
          "IE",
          "IL",
          "IT",
          "JP",
          "KR",
          "KW",
          "LV",
          "LU",
          "MY",
          "MX",
          "FM",
          "NL",
          "NZ",
          "NG",
          "NO",
          "OM",
          "PE",
          "PH",
          "PL",
          "PT",
          "PR",
          "QA",
          "RU",
          "SA",
          "RS",
          "SG",
          "ZA",
          "ES",
          "SE",
          "CH",
          "TW",
          "TH",
          "TT",
          "TR",
          "GB",
          "VI",
        ],
        datasets: [
          {
            label: "Country",
            data: [
              4,
              73,
              10,
              10,
              14,
              /* 2625, */
              18,
              1,
              2,
              1,
              1,
              15,
              2,
              11,
              32,
              41,
              12,
              29,
              2,
              1,
              4,
              1,
              8,
              10,
              14,
              39,
              16,
              2,
              1,
              4,
              6,
              16,
              3,
              15,
              20,
              1,
              34,
              1,
              3,
              12,
              1,
              2,
              10,
              6,
              4,
              7,
              2,
              17,
              9,
              5,
              14,
              21,
              56,
              3,
              1,
              5,
              58,
              43,
            ],
            backgroundColor: [
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
            ],
            borderColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Order Count by International Country Comparison",
        },
      },
    });
    const chartFour = document.getElementById("chartFour");
    new Chart(chartFour, {
      type: "bar",
      data: {
        labels: ["", "2013", "2014", "2015", "2016", "2017", "2018", "2019"],
        datasets: [
          {
            label: "Year",
            data: ["", 11.4, 17.3, 20.7, 16.2, 15.4, 11.6, 7.5],
            backgroundColor: [
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
              "#c591b0",
              "#7060a5",
              "#f9e7b1",
              "#f6cda3",
              "#f9b3a6",
            ],
            borderColor: [
              "f9b3a6",
              "#f9b3a6",
              "#f9b3a6",
              "#f9b3a6",
              "#f9b3a6",
              "#f9b3a6",
              "#f9b3a6",
              "#f9b3a6",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "% of Total Sales by Year",
        },
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
                  <canvas id="chartFour" width="50" height="50" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="chart">
                  <canvas id="chartThree" width="50" height="50" />
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
