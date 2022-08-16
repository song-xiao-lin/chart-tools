import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Welcome = lazy(() => import('../pages/Welcome'));
const Test = lazy(() => import("../pages/Test"));

const routes = [
  { path: '/', element: <Navigate to={'/test'} /> },
  {
    path: '/welcome',
    element: <Welcome />,
    children: [
      // { path: '', element: <News /> }
    ],
  },
  {
    path: '/test',
    element: <Test />,
  },
]

export default routes
