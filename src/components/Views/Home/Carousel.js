import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function ImageCarousel() {
  return (
    <div class="container">
      <div className="col-md-2"></div>
      <div className="col-md-10">
        <div className="jumbotron">
          <Carousel className="container" controls={false}>
            <Carousel.Item>
              <Image
                className="carousel-img"
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/claire.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-img"
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/guitar.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-img"
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/honda.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-img"
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/motorcycle.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-img"
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/neumann.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-img"
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/notebook.jpg"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="carousel-img"
                src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/viper.jpg"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
