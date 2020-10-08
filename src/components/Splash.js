import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../layouts/DashboardLayout/NavBar";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import Chart2 from "./splashChart";
import "./Splash.css";

function Splash() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 app-chart">
          <Chart2 />
        </div>

        <div className="col-md-4">
          <h4>header3</h4>
          <p>body3</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-3 card">
          <div className="container">
            <div className="row">
              <div className="card-header">
                <h2 align="center">Most Popular</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {" "}
                <i class="fas fa-fire fa-5x fire-icon"></i>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 card">
          <div className="container">
            <div className="row">
              <div className="card-header">
                <h2 align="center">Top Apple Product</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {" "}
                <i class="fab fa-apple fa-5x apple-icon"></i>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 card">
          <div className="container">
            <div className="row">
              <div className="card-header">
                <h2 align="center">Sales Channels</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <i class="fab fa-amazon amazon-icon fa-6x"></i>
              </div>
              <div className="col-md-4">
                <i class="fab fa-ebay ebay-icon fa-7x"></i>
              </div>
              <div className="col-md-4">
                {" "}
                <i class="fab fa-etsy etsy-icon fa-5x"></i>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </React.Fragment>
  );
}

export default Splash;
