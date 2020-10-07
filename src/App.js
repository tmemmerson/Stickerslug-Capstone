import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./layouts/DashboardLayout/NavBar";

import theme from "./theme";
import routes from "./routes";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
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
