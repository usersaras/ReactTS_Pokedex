import React, { SetStateAction, useState } from 'react';
import useFilter from '../hooks/useFilter';

export interface FilterContextType {
  showFilter: boolean;
  setShowFilterTrue: () => void;
  setShowFilterFalse: () => void;
  selectedPokemonId: number;
  setSelectedPokemonId: React.Dispatch<SetStateAction<number>>;
}

export const FilterContext = React.createContext<FilterContextType>({
  showFilter: false,
  setShowFilterTrue: () => {},
  setShowFilterFalse: () => {},
  selectedPokemonId: 1,
  setSelectedPokemonId: () => {},
});
const PokedexFilterContext = ({ children }: { children: JSX.Element }) => {
  const { showFilter, setShowFilter } = useFilter();

  const setShowFilterTrue = () => setShowFilter(true);
  const setShowFilterFalse = () => setShowFilter(false);

  const [selectedPokemonId, setSelectedPokemonId] = useState(0);

  return (
    <FilterContext.Provider
      value={{
        showFilter,
        setShowFilterTrue,
        setShowFilterFalse,
        selectedPokemonId,
        setSelectedPokemonId,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default PokedexFilterContext;
