import React from "react";
import { Navigate } from "react-router-dom";
import Products from "./components/Views/ProductEditor/Products";
import Customers from "./components/Views/CustomerEditor/Customers";
import Splash from "./components/Views/Home/Splash";
import Charts from "./components/Views/Reports/Data";
const routes = [
  {
    path: "/products",
    element: <Products />,
    children: [
      { path: "/products", element: <Navigate to="/products" /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
  {
    path: "/customers",
    element: <Customers />,
    children: [
      { path: "/customers", element: <Navigate to="/customers" /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
  {
    path: "/",
    element: <Splash />,
    children: [
      { path: "/", element: <Navigate to="/" /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
  {
    path: "/chart",
    element: <Charts />,
    children: [
      { path: "/chart", element: <Navigate to="/chart" /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
];

export default routes;
