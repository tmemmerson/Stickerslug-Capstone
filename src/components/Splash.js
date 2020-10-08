import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "../layouts/DashboardLayout/NavBar";
import { faFire } from "@fortawesome/free-solid-svg-icons";

import "./Splash.css";

function Splash() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-3">
          <NavBar />
        </div>
        <div className="col-lg-3">
          <h4>header1</h4>
          <p>body1</p>
          <FontAwesomeIcon className="icon" icon={faFire} size="5x" />
        </div>
        <div className="col-lg-3">
          <h4>header2</h4>
          <p>body2</p>
        </div>
        <div className="col-lg-3">
          <h4>header3</h4>
          <p>body3</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-3">
          <h4>header1</h4>
          <p>body1</p>
        </div>
        <div className="col-lg-3">
          <h4>header2</h4>
          <p>body2</p>
        </div>
        <div className="col-lg-3">
          <h4>header3</h4>
          <p>body3</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Splash;
