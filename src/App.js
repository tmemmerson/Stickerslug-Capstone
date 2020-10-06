import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
/* import Dash from "./components/Dash";
 */
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <div className="row">
            <div className="col-md-2 offset-md1">
              <NavBar />
            </div>
            <div className="col-md-10 offset-md1">
              <Products />
            </div>
          </div>
        </Route>
        <Route path="/">
          <div className="row">
            <div className="col-md-2 offset-md1">
              <NavBar />
            </div>
            <div className="col-md-10 offset-md1"></div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
