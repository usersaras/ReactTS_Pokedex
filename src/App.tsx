import React, { Suspense } from 'react';
import './App.css';
import Home from './pages/Home';
import { ModalProvider } from './context/ModalContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Root from './pages/Root';

const Pokedex = React.lazy(() => import('./pages/Pokedex'));

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
      {/* <div className="relative overflow-hidden">
        <div className="absolute h-full w-full bg-lime-500 opacity-80 z-0 -skew-x-12 left-[40%]"></div>
        <div className="relative z-10 h-screen flex flex-col">
          <Navbar /> */}
      <RouterProvider router={router} />
      {/* </div>
      </div> */}
    </ModalProvider>
  );
}

export default App;
