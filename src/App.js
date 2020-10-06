import React from "react";
import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <div className="row">
      <div className="col-md-3 offset-md1"></div>
      <div className="col-md-9 offset-md1">
        <Products />
      </div>
    </div>
  );
}

export default App;
