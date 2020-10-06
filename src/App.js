import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md1">
        <Products />
      </div>
    </div>
  );
}

export default App;
