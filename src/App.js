import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./theme/GlobalStyles";
import NavBar from "./components/NavBar";
import theme from "./theme/Index";
import routes from "./Routes";
import "./theme/Splash.css";
import TopNav from "./components/TopNav";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <TopNav />
      <div className="row">
        <div className="col-md-3 offset-md">
          <NavBar />
        </div>
      </div>
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
