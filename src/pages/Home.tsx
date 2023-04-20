import React from 'react';

import CenteredContainer from '../components/container/CenteredContainer';
import Charizard from '../assets/Home/banner-1.png';
import Navbar from '../components/navbar/Navbar';
import Modal from '../components/modal/Modal';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute h-full w-full bg-lime-500 opacity-80 z-0 -skew-x-12 left-1/2"></div>
      <div className="relative z-10 h-screen flex flex-col">
        <Navbar />
        <section className="grow shrink basis-auto">
          <CenteredContainer className="flex items-center h-full gap-14">
            <>
              <div className="flex flex-col gap-8 items-start w-2/5">
                <h2 className="font-bold text-5xl text-gray-800">
                  Gotta Catch 'Em All!
                </h2>
                <p className="font-medium text-lg text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  in delectus incidunt dicta est! Expedita earum quod culpa
                  provident adipisci.
                </p>
                <button className="py-2 px-4 rounded-full bg-black text-white">
                  Explore Pokemons
                </button>
              </div>
              <div className="w-3/5">
                <img src={Charizard} alt="Charizard" />
              </div>
            </>
          </CenteredContainer>
        </section>
      </div>
    </div>
  );
};

export default Home;
