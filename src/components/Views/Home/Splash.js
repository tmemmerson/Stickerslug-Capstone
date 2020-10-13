import React from "react";
import Chart2 from "./SplashChart";
import Chart3 from "./SplashChart2";
import "../../../theme/Splash.css";
import ImageCarousel from "./Carousel";

function Splash() {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-3 ">
          <div className="container">
            <div className="row">
              <div className="card-header">
                <h2 align="center" class="styled-text">
                  Most Popular Design
                </h2>
              </div>
            </div>
            <div className="row">
              <img
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/fish500.png"
                alt="coy fish"
                class="img-thumbnail"
              ></img>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2">
                {" "}
                <i class="fas fa-fire fa-5x fire-icon"></i>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>
        {/*         <div className="col-md-3 card">
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
        </div> */}{" "}
        <div className="col-md-3 ">
          <div className="container">
            <div className="row">
              <div className="card-header">
                <h2 align="center" class="styled-text">
                  Top Apple Product
                </h2>
              </div>
            </div>
            <div className="row">
              <img
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/roar500.png"
                alt="roar of the lion macbook decal"
                class="img-thumbnail"
              ></img>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2">
                {" "}
                <i class="fab fa-apple fa-5x apple-icon"></i>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>{" "}
        <div className="col-md-3 ">
          <div className="container">
            <div className="row">
              <div className="card-header">
                <h2 align="center" class="styled-text">
                  Most Popular Apparel
                </h2>
              </div>
            </div>
            <div className="row">
              <img
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/beast500.png"
                alt="beast mode v-neck shirt"
                class="img-thumbnail"
              ></img>
            </div>
            <div className="row">
              <div className="col-md-5"></div>
              <div className="col-md-2">
                {" "}
                <i class="fas fa-tshirt fa-5x shirt-icon"></i>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="row">s</div>
      <div className="row">s</div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 ">
          <Chart2 />
        </div>

        <div className="col-md-5 ">
          <Chart3 />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div class="col-md-6">
          <ImageCarousel />
        </div>
        <div className="col-md-3">
          <img
            src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/channels.png"
            alt="roar of the lion"
            class="img-thumbnail"
          ></img>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Splash;
