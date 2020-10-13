import React from "react";
import { Navbar } from "react-bootstrap";
import "../theme/Text.css";

function TopNav() {
  return (
    <>
      <Navbar bg="red" variant="red">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://coding-assets.s3-us-west-2.amazonaws.com/capstone/misc/stickerslug-header.png"
            width="322"
            height="41"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
      </Navbar>
    </>
  );
}

export default TopNav;
