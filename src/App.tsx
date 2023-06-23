import React, { Suspense } from 'react';
import './App.css';
import Home from './pages/basePath/Index';
import { ModalProvider } from './context/ModalContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';

const Pokedex = React.lazy(() => import('./pages/basePath/Pokedex'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,

    children: [
      { path: '/', element: <Home /> },
      {
        path: '/pokedex',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Pokedex />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
}

export default App;
