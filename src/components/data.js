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
    const chartFive = document.getElementById("chartFive");
    new Chart(chartFive, {
      type: "pie",
      data: {
        labels: ["shot", "wine", "mug"],
        datasets: [
          {
            label: "glass type",
            data: [481, 368, 171],
            backgroundColor: ["#d4e5f0", "#c5d2df", "#b0c1d2"],
            borderColor: ["#d4e5f0", "#c5d2df", "#b0c1d2"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Glassware Type Popularity",
        },
      },
    });

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
          text: "Apparel & Accesories Popularity",
        },
      },
    });

    const chartSeven = document.getElementById("chartSeven");
    new Chart(chartSeven, {
      type: "pie",
      data: {
        labels: ["matte", "gloss"],
        datasets: [
          {
            label: "items sold",
            data: [1265, 25202],
            backgroundColor: ["#ffbfbf", "#ff9b82"],
            borderColor: ["#ffbfbf", "#ff9b82"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Decal Material Popularity",
        },
      },
    });

    /* 


    char	1321
copp	1451
glow	1507
pink	1510
purp	1565
blue	1807
reds	2216
silv	2561
whit	4682
blck	5306
 */
    const chartEight = document.getElementById("chartEight");
    new Chart(chartEight, {
      type: "polarArea",
      data: {
        labels: ["black", "white", "silver", "red", "blue", "purple", "pink"],
        datasets: [
          {
            label: "product",
            data: [5306, 4682, 2561, 2216, 1807, 1565, 1510],
            backgroundColor: [
              "#404040",
              "#FFFFFF",
              "#CCFFFF",
              "#FFCCCC",
              "#CCE5FF",
              "#CCCCFF",
              "#FFCCFF",
            ],
            borderColor: [
              "#404040",
              "#404040",
              "#CCFFFF",
              "#FFCCCC",
              "#CCE5FF",
              "#CCCCFF",
              "#FFCCFF",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Product Color Popularity",
        },
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
              <div className="col-md-7">
                <div className="chart">
                  <canvas id="chartThree" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-5">
                {" "}
                <div className="chart">
                  <canvas id="chartEight" width="50" height="50" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-5">
                <div className="chart">
                  <canvas id="chartSeven" width="50" height="50" />
                </div>
              </div>

              <div className="col-md-5">
                <div className="chart">
                  <canvas id="chartFive" width="50" height="50" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="chart">
                  <canvas id="chartSix" width="50" height="50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
