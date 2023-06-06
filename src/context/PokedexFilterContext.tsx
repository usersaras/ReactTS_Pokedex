import React, { SetStateAction, useState } from 'react';
import useFilter from '../hooks/useFilter';

export interface FilterContextType {
  showFilter: boolean;
  setShowFilter: React.Dispatch<SetStateAction<boolean>>;
  selectedPokemonId: number;
  setSelectedPokemonId: React.Dispatch<SetStateAction<number>>;
}

export const FilterContext = React.createContext<FilterContextType>({
  showFilter: false,
  setShowFilter: () => {},
  selectedPokemonId: 1,
  setSelectedPokemonId: () => {},
});
const PokedexFilterContext = ({ children }: { children: JSX.Element }) => {
  const { showFilter, setShowFilter } = useFilter();

  const [selectedPokemonId, setSelectedPokemonId] = useState(0);

  return (
    <FilterContext.Provider
      value={{
        showFilter,
        setShowFilter,
        selectedPokemonId,
        setSelectedPokemonId,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default PokedexFilterContext;
