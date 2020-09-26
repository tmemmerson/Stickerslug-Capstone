import React from "react";

function Footer() {
  const footerStyle = {
    fontFamily: "sans-serif",
    position: "absolute",
    bottom: "0",
    textAlign: "center",
    backgroundColor: "orange",
    width: "210px",
    marginBottom: "5px",
    marginLeft: "1100px",
  };
  const h1Footer = {
    color: "black",
    fontSize: "14px",
  };
  return (
    <div className="page-footer" style={footerStyle}>
      <h3 style={h1Footer}>*-TNJTS-2020-*</h3>
    </div>
  );
}

export default Footer;
