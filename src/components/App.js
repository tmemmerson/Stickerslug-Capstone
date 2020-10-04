import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SurveyControl from "./SurveyControl";
import Signin from "./Signin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Button } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        
        <Route path="/">
          <SurveyControl />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
