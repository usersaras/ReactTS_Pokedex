import React, { SetStateAction } from 'react';
import useFilter from '../hooks/useFilter';

export interface FilterContextType {
  showFilter: boolean;
  setShowFilter: React.Dispatch<SetStateAction<boolean>>;
}

export const FilterContext = React.createContext<FilterContextType>({
  showFilter: false,
  setShowFilter: () => {},
});
const PokedexFilterContext = ({ children }: { children: JSX.Element }) => {
  const { showFilter, setShowFilter } = useFilter();

  return (
    <FilterContext.Provider value={{ showFilter, setShowFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export default PokedexFilterContext;
