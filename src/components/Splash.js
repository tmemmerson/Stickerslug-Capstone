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
        <div className="col-md-2"></div>
        <div className="col-md-3 card2">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card-header2"></div>
                <p>
                  asdfasd fasdfas dfasd fasdfasdfasdfasd fasdfsad fasdf asdf
                  asdf asdf asdfasd fasdf asdfasdf asdf asdf asd fsda fasd fasd
                  fasdf asdf asdf asd f asdfsadf asdfasdf{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2">
                <i class="fas fa-fire fa-4x fire-icon"></i>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 card3">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card-header3"></div>
                <p>
                  asdfasd fasdfas dfasd fasdfasdfasdfasd fasdfsad fasdf asdf
                  asdf asdf asdfasd fasdf asdfasdf asdf asdf asd fsda fasd fasd
                  fasdf asdf asdf asd f asdfsadf asdfasdf{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2">
                <i class="fab fa-apple fa-5x apple-icon"></i>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>
        <div className="col-md-3 card">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card-header"></div>
                <p>
                  asdfasd fasdfas dfasd fasdfasdfasdfasd fasdfsad fasdf asdf
                  asdf asdf asdfasd fasdf asdfasdf asdf asdf asd fsda fasd fasd
                  fasdf asdf asdf asd f asdfsadf asdfasdf{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2">
                <i class="fab fa-apple fa-5x apple-icon"></i>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>{" "}
      </div>
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
    </React.Fragment>
  );
}

export default Splash;
