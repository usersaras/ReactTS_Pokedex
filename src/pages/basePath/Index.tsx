import CenteredContainer from '../../components/container/CenteredContainer';
import Charizard from '../../assets/Home/banner-2.png';
import Pikachu from '../../assets/Home/banner-3.png';

import EmblaCarousel from '../../components/carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel-react';

const Home = () => {
  const OPTIONS: EmblaOptionsType = {
    loop: false,
    axis: 'y',
    dragFree: false,
    speed: 1,
  };

  const carouselSlideClasses = 'h-full mx-auto object-contain';
  const carouselSlides = [
    <div className="w-full h-full flex items-center content-center relative">
      <img src={Charizard} alt="Charizard" className={carouselSlideClasses} />
      <div className="h-[500px] w-[500px] border-8 border-orange-400 absolute -z-10 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"></div>
      <div className="h-[400px] w-[400px] bg-orange-500 absolute -z-10 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"></div>
    </div>,
    <div className="w-full h-full flex items-center content-center relative">
      <img src={Pikachu} alt="Pikachu" className={carouselSlideClasses} />
      <div className="h-[400px] w-[400px] border-8 border-yellow-500 absolute -z-10 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"></div>
      <div className="h-[300px] w-[300px] bg-yellow-500 absolute -z-10 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-90"></div>
    </div>,
  ];

  return (
    <section className="grow shrink basis-auto">
      <CenteredContainer className="flex items-center h-full gap-14">
        <>
          <div className="flex flex-col gap-8 items-start w-2/5">
            <p className="font-bold text-6xl text-gray-800">
              All is fair in love, war and{' '}
              <span className="text-cyan-700">Pokemon battles!</span>
            </p>
            <p className="font-medium text-lg text-gray-500">
              We do have a lot in common. The same earth, the same air, the same
              sky. Maybe if we started looking at what is the same, instead of
              looking at what is different, well, who knows?
              <span className="block text-right">- Meowth</span>
            </p>
            <button className="py-3 px-5 font-medium text-lg rounded-full bg-cyan-600 text-white hover:bg-cyan-800 transition-all duration-150">
              Explore Pokemons
            </button>
          </div>
          <div className="w-1/2">
            <EmblaCarousel options={OPTIONS} slides={carouselSlides} />
          </div>
        </>
      </CenteredContainer>
    </section>
  );
};

export default Home;
