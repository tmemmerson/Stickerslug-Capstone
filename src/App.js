import "react-perfect-scrollbar/dist/css/styles.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./components/GlobalStyles";
import NavBar from "./layouts/DashboardLayout/NavBar";
/* import TopNav from  */
import theme from "./theme";
import routes from "./routes";
import { Container, Navbar } from "react-bootstrap";
import "./components/Splash.css";
import TopNav from "./components/TopNav";

const App = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <TopNav />
      {/*       <Navbar
        expand="xlg"
        variant="light"
        bg="success"
        fixed="top"
        class="styled-text"
      >
        <Navbar.Brand href="#">Stickerslug</Navbar.Brand>
      </Navbar> */}
      {/*   <Container></Container>; */}
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
