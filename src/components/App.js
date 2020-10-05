import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '../routes';

const App = () => {
  const routing = useRoutes(routes);

  return (
    <React.Fragment>
      {routing}
      </React.Fragment>
  );
};

export default App;
