/* import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardView from '/DashboardView';


const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'dashboard', element: <DashboardView /> },
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Navigate to="/app/dashboard" /> }
    ]
  }
];

export default routes;
 */