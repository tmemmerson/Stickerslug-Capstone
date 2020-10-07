import React from "react";
import { Navigate } from "react-router-dom";
import Products from "./components/Products";
import NavBar from "./layouts/DashboardLayout/NavBar";
const routes = [
  {
    path: "/",
    element: <Products />,
    children: [
      { path: "/", element: <Navigate to="/" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
  {
    path: "/999",
    element: <NavBar />,
    children: [
      { path: "/999", element: <Navigate to="/999" /> },
      { path: "*", element: <Navigate to="/404" /> },
    ],
  },
];

export default routes;
