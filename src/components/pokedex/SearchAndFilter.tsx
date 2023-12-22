import React, { useContext } from 'react';
import Input from '../form-elements/Input';
import DropDown from '../form-elements/DropDown';

interface SearchAndFilterProps {
  searchVariable: string;
  setSearchVariable: (value: string) => void;
}

const SearchAndFilter = ({
  searchVariable,
  setSearchVariable,
}: SearchAndFilterProps) => {
  return (
    <div className="flex gap-8 items-stretch transition-all bg-slate-50 p-5 rounded-md">
      <div className="max-w-xs">
        <h5 className="text-lg font-semibold text-cyan-800">
          Explore Pokemons
        </h5>
        <p className="text-sm text-gray-500">
          Type in the name and select a type to find the pokemon you're looking
          for
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Input value={searchVariable} setValue={setSearchVariable} />
        <DropDown />
      </div>
    </div>
  );
};

export default SearchAndFilter;
