import React from 'react';
import Navbar from '../components/navbar/Navbar';
import CenteredContainer from '../components/container/CenteredContainer';
import { Outlet, useLocation } from 'react-router-dom';
const Root = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col mx-5 md:mx-0">
      <Navbar currentPath={location.pathname} />
      <section className="grow shrink basis-auto">
        <CenteredContainer className="flex items-center h-full gap-14">
          <Outlet />
        </CenteredContainer>
      </section>
    </div>
  );
};

export default Root;
