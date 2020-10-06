import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./../css/Features.css";
import { Link } from "react-router-dom";

function Features() {
  return (
    <React.Fragment>
      <div className="features-section">
        <Container>
          <Row>
            <Col className="col-lg-4">
              <FontAwesomeIcon
                className="features-icon"
                icon={faStopwatch}
                size="5x"
              />
              <h4>Choose how much sun.</h4>
              <p>empty text</p>
              <Link to="/signin">Sign In</Link>
            </Col>
            <Col className="col-lg-4">
              <FontAwesomeIcon
                className="features-icon"
                icon={faStopwatch}
                size="5x"
              />
              <h4>Choose how much water.</h4>
              <p>
                Search based on drought tolerance, needing a little water, or
                watering often.
              </p>
              <Link to="/signin">Sign In</Link>
            </Col>
            <Col className="col-lg-4">
              <FontAwesomeIcon
                className="features-icon"
                icon={faStopwatch}
                size="5x"
              />
              <h4>Choose your type of soil.</h4>
              <p>
                Do you have clay-like soil, or do you have a more rocky
                well-drained type?
              </p>
              <Link to="/signin">Sign In</Link>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Features;
