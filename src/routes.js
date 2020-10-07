import React from "react";
import { Navigate } from "react-router-dom";
import Products from "./components/Products";
import NavBar from "./layouts/DashboardLayout/NavBar";
import Customers from "./components/Customers";
import Splash from "./components/Splash";
import Charts from "./components/data";
const routes = [
  {
    path: "/products",
    element: <Products />,
    children: [
      { path: "/products", element: <Navigate to="/products" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/customers",
    element: <Customers />,
    children: [
      { path: "/customers", element: <Navigate to="/customers" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/",
    element: <Splash />,
    children: [
      { path: "/", element: <Navigate to="/" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/chart",
    element: <Charts />,
    children: [
      { path: "/chart", element: <Navigate to="/chart" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
