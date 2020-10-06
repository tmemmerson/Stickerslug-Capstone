import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
/* import NavBar from "./components/NavBar"; */

function App() {
  return (
    <div className="row">
      <div className="col-md-3 offset-md1">
        {/*         <NavBar />
         */}{" "}
      </div>
      <div className="col-md-9 offset-md1">
        <Products />
      </div>
    </div>
  );
}

export default App;
