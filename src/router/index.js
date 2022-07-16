import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
// const News = lazy(() => import("../pages/News"));

const routes = [
  { path: '/', element: <Navigate to={'/home'} /> },
  {
    path: '/home',
    element: <Home />,
    children: [
      // { path: '', element: <News /> }
    ],
  },
]

export default routes
