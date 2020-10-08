import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import "./text.css";
function TopNav() {
  return (
    /*     <React.Fragment>
      <div className="row manager3">
        <Navbar
          expand="xlg"
          variant="light"
          bg="success"
          fixed="top"
          class="styled-text"
        >
          <Navbar.Brand href="#">Stickerslug</Navbar.Brand>
        </Navbar>
      </div>
    </React.Fragment> */
    <>
      {/*       <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
      <br /> */}
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
