import React from 'react';

import CenteredContainer from '../components/container/CenteredContainer';
import Charizard from '../assets/Home/banner-2.png';
import Pikachu from '../assets/Home/banner-3.png';

import EmblaCarousel from '../components/carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    axis: 'y',
    dragFree: false,
    speed: 1,
  };

  const carouselSlideClasses = 'h-full mx-auto object-contain';
  const carouselSlides = [
    <div className="w-full h-full flex items-center content-center">
      <img src={Charizard} alt="Charizard" className={carouselSlideClasses} />
    </div>,
    <div className="w-full h-full flex items-center content-center">
      <img src={Pikachu} alt="Pikachu" className={carouselSlideClasses} />
    </div>,
  ];

  return (
    <section className="grow shrink basis-auto">
      <CenteredContainer className="flex items-center h-full gap-14">
        <>
          <div className="flex flex-col gap-8 items-start w-2/5">
            <p className="font-bold text-4xl text-gray-800">
              Gotta Catch 'Em All!
            </p>
            <p className="font-medium text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo in
              delectus incidunt dicta est! Expedita earum quod culpa provident
              adipisci.
            </p>
            <button className="py-2 px-4 rounded-full bg-black text-white">
              Explore Pokemons
            </button>
          </div>
          <div className="w-3/5">
            <EmblaCarousel options={OPTIONS} slides={carouselSlides} />
          </div>
        </>
      </CenteredContainer>
    </section>
  );
};

export default Home;
