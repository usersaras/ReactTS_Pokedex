import { Dialog, Transition } from '@headlessui/react';
import AllPokemonTypes from '../pokedex/AllPokemonTypes';
import { useContext } from 'react';
import {
  FilterContext,
  FilterContextType,
} from '../../context/PokedexFilterContext';

interface FilterDrawerProps {
  className: string;
}

const FilterDrawer = ({ className }: FilterDrawerProps) => {
  const { showFilter } = useContext<FilterContextType>(FilterContext);
  console.log('show', showFilter);

  return (
    <Transition
      show={showFilter}
      className={className}
      appear={true}
      enter="transition-all duration-200 ease-out"
      enterFrom="translate-x-full basis-0"
      enterTo="translate-x-0 basis-1/3"
      leave="transition-all duration-200 ease-out"
      leaveFrom="translate-x-0 basis-1/3"
      leaveTo="translate-x-full basis-0"
    >
      <div className="bg-white border-r p-5 rounded-start shadow h-screen">
        <p className="text-lg font-medium border-b border-gray-200 text-gray-900 pb-2">
          Filter
        </p>
        <AllPokemonTypes />
      </div>
    </Transition>
  );
};

export default FilterDrawer;
