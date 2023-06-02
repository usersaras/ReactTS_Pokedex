import React from 'react';
import Navbar from '../components/navbar/Navbar';
import CenteredContainer from '../components/container/CenteredContainer';
import { Outlet, useLocation } from 'react-router-dom';
const Root = () => {
  const location = useLocation();

  const checkRootPath = (path: string) => {
    if (path === '/') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      className={`relative ${
        location.pathname === '/' ? 'overflow-hidden' : 'overflow-auto'
      }`}
    >
      {checkRootPath(location.pathname) && (
        <div className="absolute min-h-full w-full bg-lime-500 opacity-80 z-0 -skew-x-12 left-[40%]"></div>
      )}
      <div className="relative z-10 h-screen flex flex-col">
        <Navbar />
        <section className="grow shrink basis-auto">
          <CenteredContainer className="flex items-center h-full gap-14">
            <Outlet />
          </CenteredContainer>
        </section>
      </div>
    </div>
  );
};

export default Root;
