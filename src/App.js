import React from 'react';
import logo from '../../public/favicon.ico';
import './App.css';
import Products from './components/Products';


function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md1">
        < Products/>
      </div>
    </div>
  );
}

export default App;