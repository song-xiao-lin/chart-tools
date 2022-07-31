import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Welcome = lazy(() => import('../pages/Welcome'));
// const News = lazy(() => import("../pages/News"));

const routes = [
  { path: '/', element: <Navigate to={'/welcome'} /> },
  {
    path: '/welcome',
    element: <Welcome />,
    children: [
      // { path: '', element: <News /> }
    ],
  },
]

export default routes
