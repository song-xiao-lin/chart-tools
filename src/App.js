import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import route from './router';

export default function App() {
  const element = useRoutes(route)
  return (
    <Suspense fallback={<h2>Loading</h2>}>
      {element}
    </Suspense>
  )
}
